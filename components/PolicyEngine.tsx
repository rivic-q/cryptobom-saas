import React, { useState, useMemo } from 'react';
import { DIRTY_DOZEN } from '../constants';
import SectionHeader from './SectionHeader';
import AlgorithmDetailModal from './AlgorithmDetailModal';
import { CryptoAlgorithm } from '../types';

const PolicyEngine: React.FC = () => {
  const [selectedAlgoName, setSelectedAlgoName] = useState(DIRTY_DOZEN[0].name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [yearsToDeadline, setYearsToDeadline] = useState(7.5);

  const dynamicAlgorithms = useMemo(() => {
    return DIRTY_DOZEN.map(algo => {
      let score = algo.riskScore;
      if (algo.status === 'Quantum-Vulnerable' && yearsToDeadline < 5.0) {
        score *= (1.0 + (5.0 - yearsToDeadline) / 10.0);
      }
      return { ...algo, simulatedScore: Math.min(10, Number(score.toFixed(1))) } as CryptoAlgorithm;
    });
  }, [yearsToDeadline]);

  const selectedAlgo = dynamicAlgorithms.find(a => a.name === selectedAlgoName) || dynamicAlgorithms[0];

  const handleSelectAlgorithm = (name: string) => {
    setSelectedAlgoName(name);
    setIsModalOpen(true);
  };

  return (
    <div className="animate-in pb-20">
      <SectionHeader 
        title="Triage & Mandatory Policy Enforcement" 
        description="Implementing mandatory EU/German cryptographic mandates. Non-compliance results in automatic risk-score escalation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel rounded-[3rem] p-10 bg-gradient-to-br from-indigo-50 to-white border-indigo-100 border-2 shadow-xl shadow-indigo-500/5">
            <h4 className="text-indigo-900 font-black text-sm uppercase tracking-widest flex items-center mb-6">2030 PQC Horizon Tracking</h4>
            <input type="range" min="0" max="10" step="0.1" value={yearsToDeadline} onChange={(e) => setYearsToDeadline(parseFloat(e.target.value))} className="w-full h-4 bg-indigo-100 rounded-full appearance-none cursor-pointer accent-indigo-600 shadow-inner" />
            <div className="flex justify-between text-[10px] font-black text-indigo-400 uppercase mt-4 tracking-widest"><span>Enforcement</span><span>Active Triage</span><span>Roadmap</span></div>
          </div>

          <div className="bg-white p-10 border border-slate-200 rounded-[3rem] shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Regulatory Risk Matrix</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {dynamicAlgorithms.map((algo) => (
                <button key={algo.name} onClick={() => handleSelectAlgorithm(algo.name)} className={`p-6 rounded-[2.5rem] border-2 transition-all flex flex-col items-center space-y-3 ${selectedAlgoName === algo.name ? 'border-indigo-600 bg-indigo-50/50 shadow-lg scale-105' : 'border-slate-100 hover:border-indigo-300 bg-white'}`}>
                  <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${algo.simulatedScore! >= 8 ? 'bg-rose-600 text-white' : 'bg-emerald-100 text-emerald-700'}`}>{algo.simulatedScore} / 10</span>
                  <span className="font-black text-sm text-slate-800">{algo.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-10 border border-slate-200 rounded-[3rem] border-t-8 border-indigo-600 sticky top-24">
            <h3 className="text-2xl font-black text-slate-900 mb-4">{selectedAlgo.name}</h3>
            <div className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-xl border-2 inline-block mb-6 ${selectedAlgo.status === 'Safe' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-rose-600 text-white border-rose-500'}`}>{selectedAlgo.status}</div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">{selectedAlgo.description}</p>
            <button onClick={() => setIsModalOpen(true)} className="w-full bg-slate-900 text-white font-black py-5 rounded-[2rem] text-xs uppercase tracking-widest">Open Regulatory Deep-Dive</button>
          </div>
        </div>
      </div>

      {isModalOpen && <AlgorithmDetailModal algorithm={selectedAlgo} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default PolicyEngine;