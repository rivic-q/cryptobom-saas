import React, { useState } from 'react';
import { SaaSReport, DemoEvent } from '../types';
import { generateComprehensiveAuditReport } from '../services/geminiService';
import { DIRTY_DOZEN, COMPLIANCE_DATA } from '../constants';

const ReportCenter: React.FC = () => {
  const [isGeneratingAudit, setIsGeneratingAudit] = useState(false);
  const [auditReport, setAuditReport] = useState<string | null>(null);
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [expandedReportId, setExpandedReportId] = useState<string | null>(null);

  const reports: SaaSReport[] = [
    { id: 'CB-2025-001', type: 'CBOM', timestamp: '2025-05-12 09:14', size: '2.4 MB', status: 'Ready' },
    { id: 'SB-2025-142', type: 'SBOM', timestamp: '2025-05-12 09:15', size: '1.8 MB', status: 'Ready' },
    { id: 'EUD-DORA-A16', type: 'QMCF-Evidence', timestamp: '2025-05-12 10:30', size: '14.2 MB', status: 'Ready' },
    { id: 'BSI-AUDIT-25', type: 'NIST-Audit', timestamp: '2025-05-12 11:00', size: '420 KB', status: 'Generating' },
  ];

  const reportEvents: Record<string, DemoEvent[]> = {
    'CB-2025-001': [
      { id: 'ev-101', timestamp: '09:10:22', pod: 'payment-gateway-v1', algorithm: 'RSA-2048', severity: 'high', status: 'detected' },
      { id: 'ev-102', timestamp: '09:12:45', pod: 'auth-service-v2', algorithm: 'Kyber-768', severity: 'low', status: 'monitored' },
      { id: 'ev-103', timestamp: '09:14:01', pod: 'user-db-proxy', algorithm: 'AES-128', severity: 'medium', status: 'blocked' }
    ],
    'SB-2025-142': [
      { id: 'ev-201', timestamp: '08:45:10', pod: 'build-node-alpha', algorithm: 'SHA-1 (Legacy)', severity: 'critical', status: 'detected' },
      { id: 'ev-202', timestamp: '08:50:22', pod: 'ci-pipeline-x', algorithm: 'RSA-4096', severity: 'medium', status: 'monitored' }
    ],
    'EUD-DORA-A16': [
      { id: 'ev-301', timestamp: '10:15:00', pod: 'gateway-core-01', algorithm: 'ECC-P256', severity: 'high', status: 'detected' },
      { id: 'ev-302', timestamp: '10:20:45', pod: 'gateway-core-01', algorithm: 'ML-KEM-1024', severity: 'low', status: 'monitored' }
    ]
  };

  const handleRunAIAudit = async () => {
    setIsGeneratingAudit(true);
    setAuditReport(null);
    try {
      const report = await generateComprehensiveAuditReport(DIRTY_DOZEN, COMPLIANCE_DATA);
      setAuditReport(report || "No report generated.");
      setShowAuditModal(true);
    } catch (e) {
      console.error(e);
      alert("AI Audit failed. Check API configuration.");
    } finally {
      setIsGeneratingAudit(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedReportId(expandedReportId === id ? null : id);
  };

  return (
    <div className="space-y-10 animate-in">
      <div className="bg-white p-12 border border-slate-200 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
        <div className="max-w-xl">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-emerald-100">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Audit Ready Plane</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Attestation Hub</h2>
          <p className="text-slate-500 leading-relaxed font-medium font-inter">
            Centralized evidence management for EU DORA and BSI TR-02102. Every report is cryptographically signed and ready for regulatory submission.
          </p>
        </div>
        <div className="shrink-0 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleRunAIAudit}
            disabled={isGeneratingAudit}
            className={`px-8 py-5 rounded-2xl font-black text-xs shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center space-x-3 ${
              isGeneratingAudit ? 'bg-slate-100 text-slate-400 cursor-wait' : 'bg-indigo-600 text-white shadow-indigo-100'
            }`}
          >
            {isGeneratingAudit ? (
              <><div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div><span>Reasoning...</span></>
            ) : (
              <span>✨ Generate AI Compliance Audit</span>
            )}
          </button>
        </div>
      </div>

      {showAuditModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl animate-in fade-in" onClick={() => setShowAuditModal(false)}></div>
          <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col animate-in zoom-in-95">
            <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Post-Quantum Compliance Audit</h3>
              <button onClick={() => setShowAuditModal(false)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar font-medium text-slate-700 leading-relaxed whitespace-pre-wrap">
              {auditReport}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {reports.map((report) => {
          const isExpanded = expandedReportId === report.id;
          const events = reportEvents[report.id] || [];
          return (
            <div key={report.id} className={`bg-white border transition-all duration-300 rounded-[2.5rem] overflow-hidden shadow-sm ${isExpanded ? 'border-indigo-400 ring-4 ring-indigo-50' : 'border-slate-200 hover:border-indigo-300'}`}>
              <div className="p-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer group" onClick={() => toggleExpand(report.id)}>
                <div className="flex items-center space-x-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black border transition-all ${isExpanded ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
                    {report.type[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">{report.type} Proof Pack</h3>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{report.timestamp} • {report.size}</div>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              {isExpanded && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-4">
                  <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-100/30">
                          <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Time</th>
                          <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Pod</th>
                          <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Primitive</th>
                          <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {events.length > 0 ? events.map((event) => (
                          <tr key={event.id} className="hover:bg-indigo-50/30">
                            <td className="px-6 py-4 font-mono text-[10px] text-slate-500 font-bold">{event.timestamp}</td>
                            <td className="px-6 py-4 text-[11px] font-black text-slate-700">{event.pod}</td>
                            <td className="px-6 py-4"><span className={`text-[11px] font-black uppercase ${event.severity === 'high' ? 'text-rose-600' : 'text-slate-700'}`}>{event.algorithm}</span></td>
                            <td className="px-6 py-4"><span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${event.status === 'blocked' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>{event.status}</span></td>
                          </tr>
                        )) : <tr><td colSpan={4} className="p-8 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">Fetching deep logs...</td></tr>}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportCenter;