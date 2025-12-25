
import React, { useState, useRef, useEffect } from 'react';
import { 
  runDeepAnalysis, 
  runSearchGroundedAnalysis, 
  runMapsGroundedAnalysis, 
  generateImage, 
  editImage, 
  generateVideo, 
  analyzeMedia,
  textToSpeech,
  transcribeAudio,
  decode,
  decodeAudioData
} from '../services/geminiService';
import LiveConversation from './LiveConversation';

type LabTab = 'analyst' | 'vision' | 'cinema' | 'voice';

const AISecurityLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>('analyst');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState('');
  const [resultMedia, setResultMedia] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);
  
  // States for Image/Video Generation
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState<string>('1:1');
  const [isGrounded, setIsGrounded] = useState(false);
  const [useMaps, setUseMaps] = useState(false);

  // File handling
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{data: string, mime: string, url: string}[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = (event.target?.result as string).split(',')[1];
        setUploadedFiles(prev => [...prev, {
          data: base64,
          mime: file.type,
          url: URL.createObjectURL(file)
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAnalystRun = async () => {
    if (!prompt) return;
    setLoading(true);
    setResultText('');
    setThinking(activeTab === 'analyst' && !isGrounded);

    try {
      if (useMaps) {
        let loc = undefined;
        try {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          loc = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
        } catch(e) {}
        const res = await runMapsGroundedAnalysis(prompt, loc);
        setResultText(res.text);
      } else if (isGrounded) {
        const res = await runSearchGroundedAnalysis(prompt);
        setResultText(res.text);
      } else if (uploadedFiles.length > 0) {
        const res = await analyzeMedia(prompt, uploadedFiles.map(f => ({ data: f.data, mimeType: f.mime })));
        setResultText(res);
      } else {
        const res = await runDeepAnalysis(prompt);
        setResultText(res);
      }
    } catch (e) {
      setResultText(`Error: ${e}`);
    } finally {
      setLoading(false);
      setThinking(false);
    }
  };

  const handleCreativeRun = async (mode: 'generate' | 'edit' | 'video') => {
    if (!prompt && mode !== 'video') return;
    setLoading(true);
    setResultMedia(null);

    try {
      if (mode === 'generate') {
        const url = await generateImage(prompt, size, aspectRatio);
        setResultMedia(url);
      } else if (mode === 'edit') {
        if (uploadedFiles.length === 0) throw new Error("Please upload an image to edit.");
        const url = await editImage(prompt, uploadedFiles[0].data, uploadedFiles[0].mime);
        setResultMedia(url);
      } else if (mode === 'video') {
        const startImg = uploadedFiles.length > 0 ? { base64: uploadedFiles[0].data, mime: uploadedFiles[0].mime } : undefined;
        const url = await generateVideo(prompt, (aspectRatio === '9:16' ? '9:16' : '16:9'), startImg);
        setResultMedia(url);
      }
    } catch (e) {
      setResultText(`Error: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceTask = async (task: 'tts' | 'transcribe') => {
    setLoading(true);
    try {
      if (task === 'tts') {
        const base64 = await textToSpeech(prompt);
        if (base64) {
          const audioCtx = new AudioContext();
          const buffer = await decodeAudioData(decode(base64), audioCtx, 24000, 1);
          const source = audioCtx.createBufferSource();
          source.buffer = buffer;
          source.connect(audioCtx.destination);
          source.start();
        }
      } else {
        if (uploadedFiles.length === 0) throw new Error("Please upload an audio file to transcribe.");
        const res = await transcribeAudio(uploadedFiles[0].data, uploadedFiles[0].mime);
        setResultText(res);
      }
    } catch (e) {
      setResultText(`Error: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 animate-in">
      {/* Lab Header */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-3xl shadow-2xl shadow-indigo-100">🧪</div>
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">AI Security Lab</h2>
            <p className="text-slate-500 font-medium">Experimental workspace for multimodal cryptographic intelligence.</p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
          {(['analyst', 'vision', 'cinema', 'voice'] as LabTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Input Controls */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Configuration</h3>
            
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Operational Prompt</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your security analysis or creative vision..."
                className="w-full h-32 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:ring-4 focus:ring-indigo-500/10 focus:outline-none resize-none"
              />
            </div>

            {/* Contextual Controls */}
            {activeTab === 'analyst' && (
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <div className="flex items-center justify-between p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                  <span className="text-[10px] font-black text-indigo-900 uppercase">Search Grounding</span>
                  <input type="checkbox" checked={isGrounded} onChange={e => setIsGrounded(e.target.checked)} className="accent-indigo-600 h-4 w-4" />
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                  <span className="text-[10px] font-black text-emerald-900 uppercase">Maps/Geo Awareness</span>
                  <input type="checkbox" checked={useMaps} onChange={e => setUseMaps(e.target.checked)} className="accent-emerald-600 h-4 w-4" />
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <div className="grid grid-cols-3 gap-2">
                  {(['1K', '2K', '4K'] as const).map(s => (
                    <button key={s} onClick={() => setSize(s)} className={`py-2 rounded-lg text-[10px] font-black border transition-all ${size === s ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>{s}</button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['1:1', '16:9', '9:16', '21:9'].map(ar => (
                    <button key={ar} onClick={() => setAspectRatio(ar)} className={`py-2 rounded-lg text-[10px] font-black border transition-all ${aspectRatio === ar ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>{ar}</button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'cinema' && (
               <div className="space-y-4 pt-4 border-t border-slate-50">
                <div className="grid grid-cols-2 gap-2">
                  {['16:9', '9:16'].map(ar => (
                    <button key={ar} onClick={() => setAspectRatio(ar)} className={`py-2 rounded-lg text-[10px] font-black border transition-all ${aspectRatio === ar ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>{ar === '16:9' ? 'Landscape' : 'Portrait'}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4 pt-6">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>📎 Attach Assets</span>
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" multiple />
              
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((file, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
                    <img src={file.url} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setUploadedFiles(prev => prev.filter((_, idx) => idx !== i))}
                      className="absolute inset-0 bg-rose-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              disabled={loading}
              onClick={() => {
                if (activeTab === 'analyst') handleAnalystRun();
                else if (activeTab === 'vision') handleCreativeRun('generate');
                else if (activeTab === 'cinema') handleCreativeRun('video');
                else if (activeTab === 'voice') handleVoiceTask('tts');
              }}
              className={`w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all ${
                loading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white shadow-indigo-100 hover:scale-[1.02] active:scale-95'
              }`}
            >
              {loading ? 'Synthesizing...' : `Run ${activeTab.toUpperCase()} Engine`}
            </button>
            
            {activeTab === 'vision' && uploadedFiles.length > 0 && (
              <button 
                onClick={() => handleCreativeRun('edit')}
                className="w-full py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest mt-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
              >
                Apply Edit Instructions
              </button>
            )}

            {activeTab === 'voice' && uploadedFiles.length > 0 && (
              <button 
                onClick={() => handleVoiceTask('transcribe')}
                className="w-full py-3 bg-amber-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest mt-2 hover:bg-amber-700 transition-all shadow-lg shadow-amber-100"
              >
                Transcribe Audio Asset
              </button>
            )}
          </div>
        </div>

        {/* Output Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className={`bg-white rounded-[3rem] border border-slate-200 shadow-sm p-10 min-h-[500px] flex flex-col relative overflow-hidden ${thinking ? 'thinking-glow' : ''}`}>
            
            {thinking && (
               <div className="absolute top-8 right-10 flex items-center space-x-2">
                 <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                 <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Thinking (32k Budget)</span>
               </div>
            )}

            <div className="flex-1">
              {resultMedia ? (
                <div className="space-y-6 animate-in zoom-in-95">
                   <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
                     {resultMedia.includes('mp4') ? (
                       <video src={resultMedia} controls autoPlay loop className="w-full h-full object-contain bg-black" />
                     ) : (
                       <img src={resultMedia} className="w-full h-full object-contain bg-slate-50" />
                     )}
                   </div>
                   <div className="flex justify-between items-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset ID: LAB-GEN-{Math.floor(Math.random()*10000)}</p>
                      <button className="text-indigo-600 font-black text-[10px] uppercase border-b-2 border-indigo-100">Add to CBOM Vault</button>
                   </div>
                </div>
              ) : resultText ? (
                <div className="prose prose-slate max-w-none animate-in fade-in">
                   <p className="text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">{resultText}</p>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-30 grayscale space-y-6">
                  <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center text-5xl">📡</div>
                  <p className="text-slate-500 font-bold max-w-xs">Laboratory output idle. Configure operational prompt to initiate analysis.</p>
                </div>
              )}
            </div>

            {activeTab === 'voice' && (
              <div className="mt-10 pt-10 border-t border-slate-100">
                <LiveConversation />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISecurityLab;
