
import React from 'react';
import { CryptoAlgorithm } from '../types';
import { COMPLIANCE_DATA } from '../constants';

interface AlgorithmDetailModalProps {
  algorithm: CryptoAlgorithm;
  onClose: () => void;
}

const AlgorithmDetailModal: React.FC<AlgorithmDetailModalProps> = ({ algorithm, onClose }) => {
  const currentScore = algorithm.simulatedScore ?? algorithm.riskScore;
  const isInflated = (algorithm.simulatedScore ?? 0) > algorithm.riskScore;
  const inflationPct = isInflated ? ((currentScore / algorithm.riskScore - 1) * 100).toFixed(0) : 0;

  const getRequirementDetails = (reqId: string) => {
    for (const standard of COMPLIANCE_DATA) {
      const found = standard.requirements.find(r => r.id === reqId);
      if (found) return { standard: standard.name, ...found };
    }
    return null;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-500" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 fade-in duration-300">
        {/* Header Section */}
        <div className="px-12 py-10 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{algorithm.name}</h2>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-xl shadow-sm border-2 ${
                algorithm.status === 'Forbidden' ? 'bg-rose-600 text-white border-rose-500' :
                algorithm.status === 'Safe' ? 'bg-emerald-600 text-white border-emerald-500' :
                'bg-amber-500 text-white border-amber-400'
              }`}>
                {algorithm.status}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Primitive Class:</span>
                <span className="text-xs font-bold text-slate-700">{algorithm.category}</span>
              </div>
              <div className="h-4 w-px bg-slate-200"></div>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enforced Risk Index:</span>
                <span className={`text-xl font-black tracking-tighter ${currentScore >= 7 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {currentScore.toFixed(1)} / 10
                </span>
                {isInflated && (
                  <span className="text-[9px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg font-black uppercase tracking-widest border border-indigo-200">
                    +{inflationPct}% Deadline Load
                  </span>
                )}
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-white border-2 border-slate-100 rounded-[1.25rem] flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Operational Overview</h4>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium text-lg">{algorithm.description}</p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Quantum Vulnerability Report</h4>
                </div>
                <div className="bg-rose-50/50 border-2 border-rose-100 rounded-[2rem] p-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⚠️</span>
                    <h5 className="font-black text-rose-900 uppercase text-xs tracking-widest">Threat Analysis</h5>
                  </div>
                  <p className="text-rose-800 font-bold text-sm leading-relaxed">{algorithm.quantumThreat}</p>
                  <p className="text-rose-700/80 font-medium text-xs italic bg-white/40 p-4 rounded-xl border border-rose-100">
                    "{algorithm.quantumThreatImpact}"
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Remediation Directive</h4>
                </div>
                <div className="bg-emerald-50/50 border-2 border-emerald-100 rounded-[2rem] p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">✅</span>
                    <h5 className="font-black text-emerald-900 uppercase text-xs tracking-widest">Actionable Steps</h5>
                  </div>
                  <p className="text-emerald-900 font-black text-lg leading-tight mb-4">{algorithm.action}</p>
                  <p className="text-emerald-800 font-semibold text-sm leading-relaxed bg-white/40 p-5 rounded-2xl border border-emerald-100">
                    {algorithm.remediation}
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-10">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-6 bg-amber-500 rounded-full"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Regulatory Matrix Mapping</h4>
                </div>
                {algorithm.complianceIds.length > 0 ? (
                  <div className="space-y-4">
                    {algorithm.complianceIds.map(id => {
                      const details = getRequirementDetails(id);
                      return details ? (
                        <div key={id} className="p-6 rounded-[2rem] bg-slate-50 border-2 border-slate-100 flex items-start space-x-5 transition-all hover:bg-white hover:border-amber-200 group">
                          <div className="mt-1 w-10 h-10 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-xs font-black text-slate-400 group-hover:text-amber-600 transition-colors">
                            §
                          </div>
                          <div>
                            <p className="text-[9px] font-black text-amber-600 uppercase tracking-[0.2em] mb-1">{details.standard}</p>
                            <p className="text-xs font-black text-slate-900 mb-2 uppercase tracking-tight">{details.id}</p>
                            <p className="text-xs text-slate-500 font-bold leading-relaxed">{details.text}</p>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                ) : (
                  <div className="p-12 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                    <p className="text-sm text-slate-400 font-bold italic tracking-tight">No mandated regulatory violations identified.</p>
                  </div>
                )}
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1.5 h-6 bg-slate-900 rounded-full"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Internal Policy Ledger</h4>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-slate-950 text-slate-100 space-y-6 shadow-2xl">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enforcement Mode:</span>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Active Hardening</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="block text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Last Audit</span>
                      <span className="text-xs font-bold text-slate-300">24h ago</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="block text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Mesh TTL</span>
                      <span className="text-xs font-bold text-slate-300">Infinite</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="block text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">Admission Controller Logic</span>
                    <div className="bg-black/40 p-4 rounded-xl font-mono text-[10px] text-indigo-300 leading-relaxed border border-white/5">
                      if crypto.status == "{algorithm.status}" {`{`} <br />
                      &nbsp;&nbsp;mesh.allowTraffic(false) <br />
                      &nbsp;&nbsp;log.SecurityIncident("{algorithm.name}_VULN") <br />
                      {`}`}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-12 py-8 border-t border-slate-100 bg-slate-50 flex justify-end items-center space-x-6">
          <button 
            onClick={onClose}
            className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-900 transition-colors"
          >
            Close Analyst View
          </button>
          <button className="px-10 py-5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            Download Technical Factsheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetailModal;
