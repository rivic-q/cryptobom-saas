import React from 'react';
import { AppSection } from '../types.ts';

interface HomepageProps {
  onNavigate: (section: AppSection) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-32 py-10 animate-in">
      {/* PERSISTENT SaaS IDENTITY */}
      <section className="text-center space-y-10 max-w-6xl mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="flex justify-center items-center space-x-3">
          <div className="inline-flex items-center space-x-3 bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-slate-800 shadow-2xl">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Join the February 2026 Beta Program</span>
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85]">
          The Automated <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">PQC Pivot.</span>
        </h1>
        
        <p className="text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium">
          Identify, catalog, and migrate your cryptographic assets before the <span className="text-slate-900 font-bold">2026 mandates</span> take effect. The first automated PQC compliance platform built for <span className="text-indigo-600 font-bold">IBM Cloud</span> environments.
        </p>

        <div className="flex justify-center items-center space-x-6 pt-10">
          <button 
            onClick={() => onNavigate(AppSection.REGISTER)}
            className="px-12 py-7 bg-indigo-600 text-white rounded-[2.5rem] font-black text-xl shadow-2xl shadow-indigo-100 transition-all hover:scale-105 active:scale-95 flex items-center space-x-4 group"
          >
            <span>Reserve Beta Slot</span>
            <span className="text-indigo-200 group-hover:translate-x-2 transition-transform">→</span>
          </button>
          <button 
            onClick={() => onNavigate(AppSection.OVERVIEW)}
            className="px-12 py-7 bg-white border-2 border-slate-200 text-slate-700 rounded-[2.5rem] font-black text-xl hover:bg-slate-50 transition-all"
          >
            SaaS Interactive Demo
          </button>
        </div>

        {/* IBM Trust Logos Section */}
        <div className="pt-20 border-t border-slate-100 mt-20">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Strategic Partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center space-x-2">
                <div className="w-10 h-1 h-px bg-slate-400"></div>
                <span className="text-xl font-black tracking-tighter text-slate-900">IBM Cloud</span>
             </div>
             <div className="flex items-center space-x-2">
                <span className="text-xl font-black tracking-tighter text-slate-900">IBM Research</span>
             </div>
             <div className="flex items-center space-x-2">
                <span className="text-xl font-black tracking-tighter text-slate-900">Berlin Tech Hub</span>
             </div>
          </div>
        </div>
      </section>

      {/* REFINED PROBLEM / SOLUTION BENTO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-16 rounded-[4rem] border border-slate-200 space-y-8 flex flex-col justify-center hover:border-indigo-200 transition-colors">
            <div className="w-12 h-1 bg-indigo-500"></div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Automated CBOM Audit</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
               Legacy systems are exposed to "Harvest Now, Decrypt Later" threats. QMCF provides real-time <span className="text-indigo-600 font-bold">CryptoBOM synthesis</span>, verifying all CNCF infrastructure against NIST standards automatically.
            </p>
         </div>
         <div className="bg-slate-900 p-16 rounded-[4rem] text-white space-y-8 flex flex-col justify-center shadow-2xl">
            <div className="w-12 h-1 bg-indigo-500"></div>
            <h2 className="text-5xl font-black tracking-tight leading-none">Ready for EU DORA</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
               Built on <span className="text-white font-bold">IBM Trusted Profiles</span>. QMCF provides hardware-enforced policy logic to shield clusters instantly, satisfying DORA Article 16 and BSI TR-02102 mandates.
            </p>
         </div>
      </div>

      {/* Berlin Connection */}
      <div className="bg-indigo-50 p-20 rounded-[4rem] border border-indigo-100 flex flex-col items-center text-center space-y-6">
        <h3 className="text-3xl font-black text-slate-900">Developed in the Berlin IBM Ecosystem</h3>
        <p className="text-slate-600 max-w-2xl text-lg font-medium">
          Born from the collaboration at the Berlin IBM Ambassador meeting, our framework bridges the gap between theoretical White Papers and production-ready implementation.
        </p>
        <button onClick={() => onNavigate(AppSection.TEAM)} className="text-indigo-600 font-black uppercase text-xs tracking-widest border-b-2 border-indigo-200 pb-1 hover:border-indigo-600 transition-all">Meet the Berlin Core Team</button>
      </div>
    </div>
  );
};

export default Homepage;