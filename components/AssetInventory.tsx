
import React from 'react';

const AssetInventory: React.FC = () => {
  const assets = [
    { id: 'ASSET-991', pod: 'payment-gateway-v1', algo: 'RSA-2048', mode: 'Classical', compliance: 'Non-Compliant', risk: 'Critical' },
    { id: 'ASSET-992', pod: 'auth-service-v2', algo: 'ML-KEM-768', mode: 'Quantum-Safe', compliance: 'Compliant', risk: 'None' },
    { id: 'ASSET-993', pod: 'ledger-sync-node', algo: 'ECC-P256', mode: 'Classical', compliance: 'Partial', risk: 'High' },
    { id: 'ASSET-994', pod: 'vault-proxy-01', algo: 'AES-256', mode: 'Symmetric', compliance: 'Compliant', risk: 'Low' },
    { id: 'ASSET-995', pod: 'user-api-cluster', algo: 'Kyber/RSA Hybrid', mode: 'Dual-State', compliance: 'Compliant', risk: 'Safe' },
  ];

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-10 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-black text-slate-900">Discovered Mesh Assets</h3>
          <p className="text-slate-500 font-medium">Real-time inventory of cryptographic identifiers across global clusters.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">Filter: Vulnerable</button>
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:scale-105 transition-all">Export CBOM</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset ID</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pod Identity</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Algorithm</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Status</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-10 py-6 font-mono text-xs text-indigo-600">{asset.id}</td>
                <td className="px-10 py-6">
                   <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-900">{asset.pod}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{asset.mode}</span>
                   </div>
                </td>
                <td className="px-10 py-6">
                   <span className={`px-3 py-1 rounded-lg text-[10px] font-black border ${
                     asset.mode === 'Quantum-Safe' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                     asset.mode === 'Classical' ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-slate-100 text-slate-600 border-slate-200'
                   }`}>
                      {asset.algo}
                   </span>
                </td>
                <td className="px-10 py-6">
                   <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${asset.compliance === 'Compliant' ? 'bg-emerald-500' : asset.compliance === 'Partial' ? 'bg-amber-500' : 'bg-rose-500'}`}></div>
                      <span className="text-sm font-bold text-slate-700">{asset.compliance}</span>
                   </div>
                </td>
                <td className="px-10 py-6">
                   <span className={`text-xs font-black ${asset.risk === 'Critical' ? 'text-rose-600' : asset.risk === 'High' ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {asset.risk}
                   </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-8 bg-slate-50/50 text-center border-t border-slate-100">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing 5 of 284 identified cryptographic mesh endpoints.</p>
      </div>
    </div>
  );
};

export default AssetInventory;
