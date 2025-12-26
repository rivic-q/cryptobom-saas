
import React, { useState, useEffect, useRef } from 'react';
import { DemoEvent } from '../types';

const InteractiveDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [events, setEvents] = useState<DemoEvent[]>([]);
  const [pods, setPods] = useState<{name: string, status: 'safe' | 'warning' | 'critical'}[]>(
    Array.from({length: 12}, (_, i) => ({ name: `container-${i+1}`, status: 'safe' }))
  );
  const logEndRef = useRef<HTMLDivElement>(null);

  const algorithms = ['RSA-2048', 'MD5', 'AES-128', 'Kyber-768', 'DES', 'ECC-P256'];
  const podsList = ['auth-service', 'payment-api', 'user-db', 'gateway-01', 'cache-node', 'ledger-sync'];

  const addEvent = () => {
    const algo = algorithms[Math.floor(Math.random() * algorithms.length)];
    const pod = podsList[Math.floor(Math.random() * podsList.length)];
    const id = Math.random().toString(36).substr(2, 9);
    const timestamp = new Date().toLocaleTimeString();
    
    let severity: 'low' | 'medium' | 'high' | 'critical' = 'low';
    if (['MD5', 'DES'].includes(algo)) severity = 'critical';
    else if (['RSA-2048', 'ECC-P256'].includes(algo)) severity = 'high';
    else if (algo === 'AES-128') severity = 'medium';

    const newEvent: DemoEvent = { id, timestamp, pod, algorithm: algo, severity, status: 'detected' };
    
    setEvents(prev => [newEvent, ...prev].slice(0, 20));

    // Update pod visualization status
    setPods(prev => prev.map(p => {
      if (p.name === `container-${Math.floor(Math.random() * 12) + 1}`) {
        return { ...p, status: severity === 'critical' ? 'critical' : severity === 'high' ? 'warning' : 'safe' };
      }
      return p;
    }));
  };

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(addEvent, 1500);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-8 rounded-[2.5rem] border border-slate-200">
        <div>
          <h2 className="text-3xl font-black text-slate-900">DevSecOps Telemetry Ingestion</h2>
          <p className="text-slate-500 font-medium">Live eBPF probes monitoring CNCF containers for PQ C compliance and QMCF adherence.</p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className={`px-8 py-4 rounded-2xl font-black transition-all shadow-lg text-sm ${
              isRunning ? 'bg-rose-500 text-white shadow-rose-100' : 'bg-indigo-600 text-white shadow-indigo-100'
            }`}
          >
            {isRunning ? 'Deactivate Sensors' : 'Activate Live Sensors'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cluster Visualization */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center">
            <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3 shadow-sm shadow-indigo-200"></span>
            IBM Cloud Cluster Topology
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-8">
            {pods.map((pod, i) => (
              <div key={i} className="flex flex-col items-center space-y-3 group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                  pod.status === 'critical' ? 'bg-rose-50 text-rose-600 border-2 border-rose-400' :
                  pod.status === 'warning' ? 'bg-amber-50 text-amber-600 border-2 border-amber-400' :
                  'bg-slate-50 text-slate-400 border border-slate-200'
                }`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{pod.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[2.5rem] bg-slate-900 text-white relative">
            <div className="relative z-10 flex justify-between items-center">
              <div className="space-y-1">
                <h4 className="font-black text-indigo-400 text-xs uppercase tracking-[0.2em]">Sensor Pipeline Status</h4>
                <p className="text-lg font-bold">Filtering: OpenSSL, BoringSSL, LibCrypto</p>
                <p className="text-xs text-slate-500">Node: IBM-K8S-ZONE-DE-01</p>
              </div>
              <div className="flex space-x-10">
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">C-Bombs/sec</p>
                  <p className="text-2xl font-black">{isRunning ? '12.4' : '0.0'}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">S-Bombs Linked</p>
                  <p className="text-2xl font-black">{isRunning ? '342' : '0'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Event Log */}
        <div className="bg-slate-900 rounded-[3rem] p-8 flex flex-col h-[650px] border border-slate-800 shadow-2xl shadow-indigo-900/10">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center justify-between">
            SaaS Data Stream
            {isRunning && <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-400"></span>}
          </h3>
          <div className="flex-1 overflow-y-auto space-y-4 pr-3 custom-scrollbar">
            {events.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-slate-600 space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl grayscale">📡</div>
                <p className="text-sm font-medium">Ready for SaaS telemetry...</p>
              </div>
            )}
            {events.map((event) => (
              <div key={event.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    event.severity === 'critical' ? 'bg-rose-500 text-white' :
                    event.severity === 'high' ? 'bg-amber-500 text-white' :
                    event.severity === 'medium' ? 'bg-indigo-500 text-white' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    {event.severity}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 font-bold">{event.timestamp}</span>
                </div>
                <p className="text-xs font-bold text-slate-200 leading-relaxed">
                  <span className="text-indigo-400">{event.pod}</span> identified using <span className="text-white underline decoration-indigo-500/50 underline-offset-4">{event.algorithm}</span>
                </p>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <button 
              disabled={!isRunning}
              className="w-full bg-white text-slate-900 text-xs font-black py-4 rounded-xl shadow-xl shadow-black/20 disabled:opacity-30"
            >
              GENERATE REAL-TIME CBOM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
