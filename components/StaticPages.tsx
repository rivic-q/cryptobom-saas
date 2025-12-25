
import React, { useState, useEffect } from 'react';
import { TEAM_DATA, ROADMAP_DATA } from '../constants.tsx';

export const TeamPage: React.FC = () => (
  <div className="space-y-12">
    <div className="bg-white p-12 border border-slate-200 rounded-[3rem] text-center max-w-4xl mx-auto">
      <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">The Berlin Core Team</h2>
      <p className="text-slate-500 text-lg">Architecting the future of IBM-backed cloud-native cryptographic security from the heart of Germany.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TEAM_DATA.map(member => (
        <div key={member.name} className="bg-white p-8 border border-slate-200 rounded-3xl text-center group transition-colors shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-2xl mx-auto mb-6 text-2xl font-black">
            {member.avatar}
          </div>
          <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
          <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mt-1">{member.role}</p>
          <div className="mt-4 pt-4 border-t border-slate-50 text-slate-500 text-sm">
            Expertise: {member.expertise}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Added RoadmapPage component to fix missing export error in App.tsx
export const RoadmapPage: React.FC = () => (
  <div className="space-y-12">
    <div className="bg-white p-12 border border-slate-200 rounded-[3rem] text-center max-w-4xl mx-auto">
      <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Strategic Roadmap 2025-2030</h2>
      <p className="text-slate-500 text-lg">Phased implementation of quantum-resistant infrastructure following NIST and BSI guidelines.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {ROADMAP_DATA.map((item, idx) => (
        <div key={idx} className="bg-white p-10 border border-slate-200 rounded-[2.5rem] relative overflow-hidden group hover:border-indigo-500 transition-all">
          <div className="flex justify-between items-start mb-6">
            <span className="text-indigo-600 font-black text-sm uppercase tracking-widest">{item.quarter}</span>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
              item.status === 'In Progress' ? 'bg-indigo-100 text-indigo-700' :
              'bg-slate-100 text-slate-500'
            }`}>
              {item.status}
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
          <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export const RegistrationPage: React.FC = () => {
  const [tier, setTier] = useState('Premium');

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="bg-white p-16 border border-slate-200 rounded-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[4rem]"></div>
        <h2 className="text-5xl font-black text-slate-900 mb-3 tracking-tighter">Join the Beta</h2>
        <p className="text-slate-500 text-lg mb-12 font-medium">Reserve your slot for the February 2026 PQC pilot.</p>
        
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Operator Email</label>
              <input type="email" placeholder="operator@enterprise.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-sm focus:ring-4 focus:ring-indigo-500/10 focus:outline-none font-bold" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Primary Industry</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-sm focus:ring-4 focus:ring-indigo-500/10 focus:outline-none font-bold appearance-none">
                <option>Finance (DORA Mandated)</option>
                <option>Government (BSI Mandated)</option>
                <option>Healthcare</option>
                <option>Defense</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Current Cloud Infrastructure</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['IBM Cloud', 'AWS', 'Azure', 'On-Prem'].map(cloud => (
                <div key={cloud} className="flex items-center space-x-2 p-3 border border-slate-100 rounded-xl bg-slate-50">
                  <input type="radio" name="cloud" id={cloud} className="accent-indigo-600" />
                  <label htmlFor={cloud} className="text-[11px] font-bold text-slate-600">{cloud}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4 shadow-2xl">
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">IBM Strategic Credits Program</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Early beta members qualify for the <span className="text-white font-bold">2026 IBM Quantum Credit program</span>. Beta slots are limited to 50 enterprise participants.
            </p>
          </div>

          <button className="w-full bg-indigo-600 text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-indigo-900/20 hover:bg-indigo-500 transition-all">
            Join February 2026 Pilot
          </button>
        </form>
      </div>
    </div>
  );
};

// Fixed exports for rest of static pages to ensure they can be used as components
export const SolutionsPage = () => <div className="p-20 text-center text-slate-400 font-bold">Solutions View - Under Development</div>;
export const PrivacyPolicyPage = () => <div className="p-20 text-center text-slate-400 font-bold">Privacy Policy - Under Development</div>;
export const TermsOfServicePage = () => <div className="p-20 text-center text-slate-400 font-bold">Terms of Service - Under Development</div>;
export const TrustCenterPage = () => <div className="p-20 text-center text-slate-400 font-bold">Trust Center - Under Development</div>;
export const DoraAttestationPage = () => <div className="p-20 text-center text-slate-400 font-bold">DORA Attestation - Under Development</div>;
export const ContactSalesPage = () => <div className="p-20 text-center text-slate-400 font-bold">Contact Sales - Under Development</div>;
export const DeveloperHubPage = () => <div className="p-20 text-center text-slate-400 font-bold">Developer Hub - Under Development</div>;
export const HelpCenterPage = () => <div className="p-20 text-center text-slate-400 font-bold">Help Center - Under Development</div>;
