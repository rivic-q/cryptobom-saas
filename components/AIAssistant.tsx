
import React, { useState } from 'react';
import { analyzeCryptoPolicy } from '../services/geminiService';
import SectionHeader from './SectionHeader';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const data = await analyzeCryptoPolicy(input);
      setResult(data);
    } catch (e) {
      alert("AI analysis failed. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  const examples = [
    "List of algorithms: AES-128, RSA-2048, SHA-1, DES",
    "Deployment Policy: Block anything under 112 bits of security",
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="AI Policy Analyst" 
        description="Leverage Gemini 3 to evaluate your custom policies against the Dirty Dozen triage matrix and global compliance standards."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-8">
            <label className="text-sm font-bold text-slate-500 uppercase block mb-4">Input Policy or Algorithm List</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Detected algorithms: RSA-2048, MD5, SHA-256..."
              className="w-full h-48 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono text-sm"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {examples.map((ex) => (
                <button 
                  key={ex}
                  onClick={() => setInput(ex)}
                  className="text-[10px] font-bold text-slate-400 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full uppercase transition-colors"
                >
                  Try: {ex.substring(0, 30)}...
                </button>
              ))}
            </div>
            <button
              onClick={handleAnalyze}
              disabled={loading || !input}
              className={`mt-6 w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all ${
                loading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <span>✨ Run AI Analysis</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {result ? (
            <div className="glass-panel rounded-3xl p-8 border-2 border-indigo-100 animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Analysis Results</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Risk Score:</span>
                  <span className={`text-2xl font-bold ${result.overallRisk >= 7 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {result.overallRisk}/10
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{result.summary}"
              </p>

              <div className="space-y-4">
                {result.findings?.map((finding: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800">{finding.algorithm}</span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        finding.riskLevel.toLowerCase().includes('high') ? 'bg-rose-100 text-rose-700' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {finding.riskLevel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{finding.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 h-full border-dashed border-2 border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl grayscale">
                🔍
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-400">No Analysis Yet</h3>
                <p className="text-sm text-slate-400 max-w-xs">Input a policy on the left to get a real-time risk assessment from the AI Assistant.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
