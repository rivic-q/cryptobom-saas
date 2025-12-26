
import React from 'react';
import SectionHeader from './SectionHeader';

const QuantumScience: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10">
      <SectionHeader 
        title="The Quantum Threat Landscape" 
        description="Understanding the core algorithms (Shor's, Grover's) and how they fundamentally challenge classical cryptography."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shor's Algorithm */}
        <div className="glass-panel rounded-[2rem] p-10 border-l-8 border-rose-500">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-3xl">⚛️</div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Shor's Algorithm (1994)</h3>
              <p className="text-rose-600 font-bold text-sm">Threat: Asymmetric Primitives</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">Purpose</h4>
              <p className="text-slate-700 text-sm leading-relaxed">Efficiently factors large integers and computes discrete logarithms in <b>Polynomial Time</b> (vs. Exponential for classical computers).</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Impact Details</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span><b>RSA:</b> Completely broken via integer factorization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span><b>ECC:</b> Completely broken via elliptic curve log</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span><b>Diffie-Hellman:</b> Completely broken</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
                <span>Required Qubits</span>
                <span className="text-rose-600">~4,000-8,000 logical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grover's Algorithm */}
        <div className="glass-panel rounded-[2rem] p-10 border-l-8 border-amber-500">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-3xl">🔋</div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Grover's Algorithm (1996)</h3>
              <p className="text-amber-600 font-bold text-sm">Threat: Symmetric Primitives</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">Purpose</h4>
              <p className="text-slate-700 text-sm leading-relaxed">Searches unstructured databases <b>Quadratically Faster</b>. It reduces the brute-force complexity of symmetric keys.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Impact Details</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <span><b>AES-128:</b> Security reduced to 64-bit (Vulnerable)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <span><b>AES-256:</b> Security reduced to 128-bit (Acceptable)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <span><b>SHA-256:</b> Collision resistance halved</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
                <span>Mitigation Strategy</span>
                <span className="text-amber-600">Double Key Sizes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Strategy Panel */}
      <div className="glass-panel rounded-[2rem] p-10 bg-indigo-900 text-white overflow-hidden relative">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">The Hybrid Transition Strategy</h3>
            <p className="text-indigo-200 leading-relaxed mb-8">
              Because full PQC migration takes years, the White Paper recommends a <b>Dual Algorithm Approach</b>: using both classical (RSA/ECC) and PQ (Kyber/Dilithium) primitives in parallel to ensure security during the transition period.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <h4 className="text-[10px] font-black uppercase text-indigo-300 mb-1">Dual Algorithm</h4>
                <p className="text-sm font-bold">Max security during pivot</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <h4 className="text-[10px] font-black uppercase text-indigo-300 mb-1">Agility First</h4>
                <p className="text-sm font-bold">Swap logic in real-time</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10">
            <h4 className="font-bold text-indigo-400 mb-4 uppercase text-xs tracking-widest">RIVIC Priority Matrix</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Kyber (KEM)</span>
                <span className="bg-rose-500 px-3 py-1 rounded-full text-[10px] font-black">HIGHEST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dilithium (Sig)</span>
                <span className="bg-orange-500 px-3 py-1 rounded-full text-[10px] font-black">HIGH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Falcon (Sig)</span>
                <span className="bg-amber-500 px-3 py-1 rounded-full text-[10px] font-black">MEDIUM</span>
              </div>
              <div className="flex justify-between items-center opacity-50">
                <span className="text-sm">Classic McEliece</span>
                <span className="bg-slate-500 px-3 py-1 rounded-full text-[10px] font-black text-slate-900">LOW</span>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
      </div>
    </div>
  );
};

export default QuantumScience;
