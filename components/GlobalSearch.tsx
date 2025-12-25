
import React, { useState, useEffect, useRef } from 'react';
import { AppSection } from '../types';
import { DIRTY_DOZEN, COMPLIANCE_DATA, ROADMAP_DATA } from '../constants';

interface GlobalSearchProps {
  onNavigate: (section: AppSection) => void;
}

interface SearchResult {
  title: string;
  category: 'Section' | 'Algorithm' | 'Compliance' | 'Roadmap';
  target: AppSection;
  description?: string;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const searchData: SearchResult[] = [];

    // Search Sections
    Object.values(AppSection).forEach(section => {
      if (section.toLowerCase().includes(lowerQuery)) {
        searchData.push({ title: section, category: 'Section', target: section });
      }
    });

    // Search Algorithms
    DIRTY_DOZEN.forEach(algo => {
      if (algo.name.toLowerCase().includes(lowerQuery) || algo.description.toLowerCase().includes(lowerQuery)) {
        searchData.push({ 
          title: algo.name, 
          category: 'Algorithm', 
          target: AppSection.POLICY_ENGINE,
          description: algo.status 
        });
      }
    });

    // Search Compliance
    COMPLIANCE_DATA.forEach(comp => {
      if (comp.name.toLowerCase().includes(lowerQuery) || comp.id.toLowerCase().includes(lowerQuery)) {
        searchData.push({ 
          title: comp.name, 
          category: 'Compliance', 
          target: AppSection.REPORT_CENTER,
          description: comp.id
        });
      }
    });

    // Search Roadmap
    ROADMAP_DATA.forEach(item => {
      if (item.title.toLowerCase().includes(lowerQuery)) {
        searchData.push({ 
          title: item.title, 
          category: 'Roadmap', 
          target: AppSection.ROADMAP,
          description: item.quarter
        });
      }
    });

    setResults(searchData.slice(0, 8));
    setIsOpen(true);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    onNavigate(result.target);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mx-6" ref={containerRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search mission controls, algorithms, or compliance data..."
          className="block w-full bg-slate-100 border-none rounded-2xl py-3 pl-11 pr-4 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 transition-all shadow-inner"
        />
        {query && (
          <button 
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-2">
            {results.map((result, idx) => (
              <button
                key={`${result.title}-${idx}`}
                onClick={() => handleSelect(result)}
                className="w-full text-left px-6 py-4 hover:bg-slate-50 transition-colors flex items-center justify-between border-b border-slate-50 last:border-none group"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{result.title}</span>
                  {result.description && (
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{result.description}</span>
                  )}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded bg-slate-100 text-slate-500">
                  {result.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl border border-slate-200 shadow-2xl p-10 text-center z-[100]">
          <p className="text-sm font-bold text-slate-400 italic">No nodes found matching "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
