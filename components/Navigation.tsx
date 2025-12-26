
import React, { useState } from 'react';
import { AppSection } from '../types';

interface NavigationProps {
  currentSection: AppSection;
  onSectionChange: (section: AppSection) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentSection, 
  onSectionChange, 
  isCollapsed, 
  onToggle 
}) => {
  const operationalSections = [
    AppSection.HOME,
    AppSection.OVERVIEW,
    AppSection.TERMINAL,
    AppSection.AI_LAB,
    AppSection.REPORT_CENTER,
    AppSection.POLICY_ENGINE,
    AppSection.PRICING,
    AppSection.REGISTER
  ];

  const getIcon = (section: AppSection) => {
    switch (section) {
      case AppSection.HOME: return '🎯';
      case AppSection.OVERVIEW: return '📊';
      case AppSection.TERMINAL: return '⚡';
      case AppSection.AI_LAB: return '🧪';
      case AppSection.REPORT_CENTER: return '📋';
      case AppSection.POLICY_ENGINE: return '⚖️';
      case AppSection.REGISTER: return '🔑';
      case AppSection.PRICING: return '🏷️';
      default: return '•';
    }
  };

  return (
    <nav className={`${isCollapsed ? 'w-20' : 'w-64'} bg-slate-950 h-screen fixed right-0 top-0 text-slate-300 flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.3)] z-50 border-l border-white/5 transition-all duration-300`}>
      <button 
        onClick={onToggle}
        className="absolute -left-4 top-10 w-8 h-8 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-all z-[60]"
      >
        <span className="text-[10px] font-black">{isCollapsed ? '→' : '←'}</span>
      </button>

      <div className={`p-6 ${isCollapsed ? 'items-center' : ''} flex flex-col h-full overflow-hidden`}>
        <div className={`mb-12 flex items-center ${isCollapsed ? 'justify-center' : 'space-x-4'} transition-all cursor-pointer`} onClick={() => onSectionChange(AppSection.HOME)}>
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] shrink-0">
            QM
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h1 className="text-white font-black text-lg leading-none tracking-tighter">QMCF SaaS</h1>
              <p className="text-[9px] text-indigo-400 uppercase font-black tracking-[0.2em] mt-1 whitespace-nowrap">Core Operation</p>
            </div>
          )}
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
          {!isCollapsed && (
             <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-4 ml-2">Console Operations</p>
          )}
          {operationalSections.map((section) => {
            const isActive = currentSection === section;
            return (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`w-full text-left px-4 py-4 rounded-2xl flex items-center transition-all group ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/50 scale-[1.02]'
                    : 'hover:bg-white/5 hover:text-white text-slate-500'
                }`}
              >
                <span className={`text-lg ${isCollapsed ? 'mx-auto' : 'mr-4'}`}>{getIcon(section)}</span>
                {!isCollapsed && (
                  <span className="text-[13px] font-bold tracking-tight whitespace-nowrap">{section}</span>
                )}
              </button>
            );
          })}
        </div>

        {!isCollapsed && (
          <div className="pt-6 border-t border-white/5 mt-auto">
            <div className="bg-indigo-950/40 p-5 rounded-2xl border border-indigo-500/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-black">Cluster Alpha</span>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">9 active eBPF pods connected.</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
