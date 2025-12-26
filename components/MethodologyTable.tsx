
import React from 'react';

interface Row {
  method: string;
  whitePaper: string;
  cryptoBom: string;
  status: string;
}

interface MethodologyTableProps {
  title: string;
  rows: Row[];
}

const MethodologyTable: React.FC<MethodologyTableProps> = ({ title, rows }) => {
  return (
    <div className="glass-panel rounded-3xl overflow-hidden shadow-sm border border-slate-200 mb-8">
      <div className="bg-slate-50 border-b border-slate-200 px-8 py-4">
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Detection Layer</th>
              <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">White Paper Guidance</th>
              <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CryptoBOM Component</th>
              <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-4 font-semibold text-slate-700 text-sm">{row.method}</td>
                <td className="px-8 py-4 text-slate-600 text-sm italic">"{row.whitePaper}"</td>
                <td className="px-8 py-4 font-mono text-indigo-600 text-xs bg-indigo-50/30">{row.cryptoBom}</td>
                <td className="px-8 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MethodologyTable;
