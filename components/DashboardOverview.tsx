
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { TIMELINE_DATA } from '../constants';

const DashboardOverview: React.FC = () => {
  const stats = [
    { label: 'Quantum Readiness', value: '72%', trend: '+18%', color: 'text-indigo-600', sub: 'vs last quarter' },
    { label: 'Risk Exposure (REI)', value: '1.8', trend: '-0.6', color: 'text-emerald-600', sub: 'Operational Low' },
    { label: 'Mandatory Compliance', value: '98.4%', trend: 'STABLE', color: 'text-blue-600', sub: 'BSI TR-02102 Verified' },
    { label: 'Primitive Inventory', value: '284', trend: '+12', color: 'text-slate-600', sub: 'Active CryptoBOMs' },
  ];

  const trendData = [
    { month: 'Jan', readiness: 25, vulnerability: 85, compliance: 60 },
    { month: 'Feb', readiness: 38, vulnerability: 70, compliance: 65 },
    { month: 'Mar', readiness: 42, vulnerability: 62, compliance: 78 },
    { month: 'Apr', readiness: 60, vulnerability: 45, compliance: 88 },
    { month: 'May', readiness: 72, vulnerability: 30, compliance: 98 },
  ];

  const algoBreakdown = [
    { name: 'PQ Safe (ML-KEM)', value: 48, color: '#6366f1' },
    { name: 'Hybrid (Dual State)', value: 24, color: '#10b981' },
    { name: 'Classical (RSA/ECC)', value: 28, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* High-Fidelity KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{s.label}</p>
              <div className="flex items-baseline justify-between">
                <span className={`text-3xl font-black tracking-tight ${s.color}`}>{s.value}</span>
                <span className="text-[10px] font-black text-emerald-600 px-2 py-0.5 rounded-lg bg-emerald-50 border border-emerald-100">{s.trend}</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-50">
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Readiness Velocity Chart */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Quantum Shield Velocity</h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">Measuring the decrease in Shor-vulnerable endpoints across clusters.</p>
            </div>
            <div className="flex items-center space-x-6">
               <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Safe Readiness</span>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Threat Vector</span>
               </div>
            </div>
          </div>
          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorReadiness" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px' }}
                />
                <Area type="monotone" dataKey="readiness" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorReadiness)" />
                <Area type="monotone" dataKey="vulnerability" stroke="#e2e8f0" strokeWidth={2} fill="transparent" strokeDasharray="6 6" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Primitive Mix Distribution */}
        <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white flex flex-col shadow-2xl">
          <div className="mb-10">
            <h3 className="text-xl font-black tracking-tight">Primitive Distribution</h3>
            <p className="text-xs text-slate-500 mt-2 font-medium uppercase tracking-widest">Active Runtime Inventory</p>
          </div>
          <div className="h-[250px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={algoBreakdown}
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                >
                  {algoBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-5 mt-10">
            {algoBreakdown.map((item) => (
              <div key={item.name} className="flex justify-between items-center group cursor-default">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
                </div>
                <span className="text-xs font-black text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual vs Automated Audit Benchmarks */}
      <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        <div className="lg:col-span-1 space-y-6">
          <div className="w-16 h-16 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-3xl">🚀</div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Audit Acceleration</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              SaaS automation cuts regulatory friction by 92% compared to manual spreadsheets.
            </p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 border-b-2 border-indigo-600/20 pb-1 hover:border-indigo-600 transition-all">Download Benchmarks</button>
        </div>
        <div className="lg:col-span-3 h-[250px] w-full pl-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={TIMELINE_DATA} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="phase" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 800}} width={120} />
              <Tooltip cursor={{fill: 'rgba(99,102,241,0.05)'}} />
              <Bar dataKey="automated" name="QMCF SaaS (Hours)" fill="#6366f1" radius={[0, 8, 8, 0]} barSize={16} />
              <Bar dataKey="manual" name="Manual Audit (Days)" fill="#f1f5f9" radius={[0, 8, 8, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
