
import React from 'react';
import { COMPLIANCE_DATA } from '../constants';
import SectionHeader from './SectionHeader';

const ComplianceExplorer: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="Regulatory Compliance Mapping" 
        description="Automated evidence generation for DORA, BSI TR-02102, and NIST PQC migration guidelines."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {COMPLIANCE_DATA.map((standard) => (
          <div key={standard.id} className="glass-panel rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{standard.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{standard.description}</p>
              </div>
              <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold border border-indigo-100">
                {standard.id}
              </div>
            </div>

            <div className="space-y-4">
              {standard.requirements.map((req) => (
                <div key={req.id} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    req.status === 'Compliant' ? 'bg-emerald-500' :
                    req.status === 'Partial' ? 'bg-amber-500' : 'bg-rose-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{req.id}</p>
                      <span className={`text-[10px] font-bold uppercase ${
                        req.status === 'Compliant' ? 'text-emerald-600' :
                        req.status === 'Partial' ? 'text-amber-600' : 'text-rose-600'
                      }`}>{req.status}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 my-1">{req.text}</p>
                    <p className="text-xs text-slate-500 italic">CryptoBOM: {req.implementation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-3xl p-8 border-2 border-indigo-200 bg-indigo-50/30 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
            📦
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Automated Evidence Pack</h3>
            <p className="text-slate-500 text-sm">Generate signed CycloneDX CBOMs, audit logs, and compliance attestations.</p>
          </div>
        </div>
        <button className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
          Generate Full Report (PDF/JSON)
        </button>
      </div>
    </div>
  );
};

export default ComplianceExplorer;
