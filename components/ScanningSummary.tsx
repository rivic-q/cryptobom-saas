
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const ScanningSummary: React.FC = () => {
  const scanData = [
    { name: 'Quantum Safe (ML-KEM/ML-DSA)', value: 142, color: '#10b981' },
    { name: 'Outdated (RSA-2048)', value: 89, color: '#f43f5e' },
    { name: 'Vulnerable (ECC-P256)', value: 56, color: '#f59e0b' },
    { name: 'Legacy (SHA-1/MD5)', value: 12, color: '#94a3b8' },
  ];

  const totalAssets = scanData.reduce((acc, curr) => acc + curr.value, 0);
  const outdatedPercentage = (((89 + 56 + 12) / totalAssets) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      <div className="bg-white p-10 rounded-[3rem] border border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900">CNCF Mesh Scan Summary</h3>
            <p className="text-slate-500 font-medium mt-1">Global audit of all cryptographic primitives in active use.</p>
          </div>
          <div className="bg-rose-50 border border-rose-100 px-6 py-3 rounded-2xl text-center">
            <span className="block text-[10px] font-black text-rose-400 uppercase tracking-widest">Risk Exposure</span>
            <span className="text-2xl font-black text-rose-600">{outdatedPercentage}%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={scanData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {scanData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {scanData.map(item => (
              <div key={item.name} className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-200 transition-all group">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-slate-900">{item.value}</span>
                  <span className="text-[10px] text-slate-400 font-bold block">Nodes</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
          <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">Urgent Remediation Required</h4>
          <div className="space-y-3">
             <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold">payment-gateway-pod-02</span>
                <span className="text-rose-500 font-black">RSA-2048</span>
             </div>
             <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold">auth-service-v1</span>
                <span className="text-rose-500 font-black">SHA-1 Hash</span>
             </div>
             <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold">db-proxy-node</span>
                <span className="text-rose-500 font-black">DES-EDE3</span>
             </div>
          </div>
          <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Schedule Auto-Upgrade</button>
        </div>

        <div className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100">
           <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">Compliance Deadline Tracker</h4>
           <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-slate-600">BSI TR-02102 Migration</span>
                <span className="text-sm font-black text-indigo-600">62% Path Clear</span>
              </div>
              <div className="w-full bg-indigo-200/30 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[62%] transition-all duration-1000"></div>
              </div>
              <p className="text-[10px] text-indigo-700/60 font-medium leading-relaxed">
                Mandatory deadline for removal of RSA < 3000 bits in German critical infra is approaching. Auto-upgrades recommended for Q3.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ScanningSummary;
