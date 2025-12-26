
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const VideoDemo: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');

  const generateDemoVideo = async () => {
    setIsGenerating(true);
    setStatus('Initializing Veo Engine...');
    
    try {
      // Fix: Await hasSelectedApiKey as per SDK guidelines.
      if (!(await window.aistudio?.hasSelectedApiKey())) {
        await window.aistudio?.openSelectKey();
      }

      // Fix: Initializing GoogleGenAI inside the handler to ensure it uses the latest API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      setStatus('Prompting model for cinematic security visualization...');
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Futuristic high-tech security dashboard visualization, scanning a digital map of a Kubernetes cluster, glowing neon connections, transition to quantum safe cryptography shield icon, cinematic 4k aesthetic.',
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        setStatus(`Synthesizing frames... (${new Date().toLocaleTimeString()})`);
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      // Fix: Appending the API key to the download link as required by the video generation SDK.
      setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
      setStatus('Generation Complete.');
    } catch (error) {
      console.error(error);
      setStatus('Generation failed. Please ensure you have a valid paid API key.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="glass-panel p-10 rounded-[2.5rem] bg-white space-y-8 shadow-xl">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-black text-slate-900">CBOM Conceptual Visualization</h3>
        <p className="text-slate-500 max-w-lg mx-auto">Board-level executive overview generated in real-time by Veo 3.1 AI.</p>
      </div>

      <div className="aspect-video bg-slate-100 rounded-[2rem] overflow-hidden flex items-center justify-center relative border border-slate-200">
        {videoUrl ? (
          <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center space-y-6">
            {isGenerating ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-black text-indigo-600 animate-pulse">{status}</p>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-3xl text-3xl">🎬</div>
                <button 
                  onClick={generateDemoVideo}
                  className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:scale-105 active:scale-95 transition-all"
                >
                  Generate Cinematic Demo
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-3">
        <span className="text-lg">💡</span>
        <p className="text-xs text-amber-800 leading-relaxed font-medium">
          Note: Video generation requires a paid GCP project API key. 
          The result represents the abstract "visibility" provided by the eBPF layer to non-technical stakeholders.
        </p>
      </div>
    </div>
  );
};

export default VideoDemo;
