
import React from 'react';
import { COMPLIANCE_DATA } from '../constants';

const ComplianceChecklist: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 border border-slate-200 rounded-3xl">
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">European Compliance Matrix</h2>
        <p className="text-slate-500 max-w-2xl leading-relaxed">
          The following checklist is derived directly from the SITG White Paper methodology, specifically tailored for 
          EU DORA and German BSI TR-02102 requirements on IBM Cloud Infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {COMPLIANCE_DATA.map(standard => (
          <div key={standard.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">{standard.name}</h3>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                standard.id.includes('BSI') ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {standard.id}
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {standard.requirements.map(req => (
                <div key={req.id} className="px-8 py-6 flex items-start space-x-6 hover:bg-slate-50 transition-colors">
                  <div className={`mt-1.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    req.status === 'Compliant' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{req.id} • {req.region}</span>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">IBM Infrastructure Verified</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{req.text}</h4>
                    <p className="text-sm text-slate-500 italic">Methodology: {req.implementation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 mb-6 md:mb-0">
          <h3 className="text-2xl font-black">Generate European Audit Pack</h3>
          <p className="text-indigo-200 text-sm">Download signed attestations for EU regulators, built on IBM Cloud Trusted Profile.</p>
        </div>
        <button className="bg-white text-indigo-900 px-10 py-4 rounded-2xl font-black text-sm hover:bg-indigo-50 transition-colors">
          Download Compliance PDF
        </button>
      </div>
    </div>
  );
};

export default ComplianceChecklist;
