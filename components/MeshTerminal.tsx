
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SSHKey } from '../types';

interface MeshTerminalProps {
  currentEnv: 'staging' | 'production' | 'live';
  onEnvChange: (env: 'staging' | 'production' | 'live') => void;
}

const MeshTerminal: React.FC<MeshTerminalProps> = ({ currentEnv, onEnvChange }) => {
  const [history, setHistory] = useState<string[]>(['QMCF Mesh Gateway v2.5.0 initialized...', 'Type "help" to see available mesh commands.']);
  const [input, setInput] = useState('');
  const [isVideoGenerating, setIsVideoGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState('');
  const [sshKeys, setSshKeys] = useState<SSHKey[]>([
    {
      id: 'default-pqc-key',
      name: 'Primary ML-DSA Node',
      publicKey: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPJ...',
      fingerprint: 'SHA256:8xV/u...',
      createdAt: '2025-01-10',
      type: 'ED25519'
    },
    {
      id: 'legacy-rsa-key',
      name: 'Legacy Cluster Root (Deprecated)',
      publicKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC...',
      fingerprint: 'SHA256:LGCY...',
      createdAt: '2023-11-05',
      type: 'RSA'
    }
  ]);
  const [activeKeyId, setActiveKeyId] = useState<string>('default-pqc-key');
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'generate' | 'import'>('generate');
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyType, setNewKeyType] = useState<'RSA' | 'ED25519' | 'ECDSA'>('ED25519');
  const [importKeyData, setImportKeyData] = useState('');
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const activeKey = sshKeys.find(k => k.id === activeKeyId);

  const generateSSHKey = () => {
    if (!newKeyName.trim()) return;
    
    const id = `key-${Math.random().toString(36).substr(2, 9)}`;
    const newKey: SSHKey = {
      id,
      name: newKeyName,
      type: newKeyType,
      publicKey: `ssh-${newKeyType.toLowerCase()} AAAAB3NzaC1...${Math.random().toString(36).substr(2, 20)}`,
      fingerprint: `SHA256:${Math.random().toString(36).substr(2, 12).toUpperCase()}...`,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setSshKeys([...sshKeys, newKey]);
    setActiveKeyId(id); // Automatically set new key as active
    setNewKeyName('');
    setIsKeyModalOpen(false);
    setHistory([...history, `[SYSTEM] NEW PQC IDENTITY GENERATED: ${newKey.name} (${newKey.type})`, `[SYSTEM] Switched active identity to: ${newKey.name}`]);
  };

  const importSSHKey = () => {
    if (!newKeyName.trim() || !importKeyData.trim()) return;

    const typeMatch = importKeyData.match(/^ssh-(rsa|ed25519|ecdsa)/);
    const detectedType = typeMatch ? typeMatch[1].toUpperCase() as any : 'RSA';

    const id = `key-${Math.random().toString(36).substr(2, 9)}`;
    const newKey: SSHKey = {
      id,
      name: newKeyName,
      type: detectedType,
      publicKey: importKeyData,
      fingerprint: `SHA256:IMP${Math.random().toString(36).substr(2, 8).toUpperCase()}...`,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setSshKeys([...sshKeys, newKey]);
    setActiveKeyId(id);
    setNewKeyName('');
    setImportKeyData('');
    setIsKeyModalOpen(false);
    setHistory([...history, `[SYSTEM] IDENTITY IMPORTED: ${newKey.name} (${newKey.type})`, `[SYSTEM] Switched active identity to: ${newKey.name}`]);
  };

  const deleteKey = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (id === activeKeyId) {
      setHistory([...history, '[ERROR] SECURITY VIOLATION: Cannot delete the active identity while session is open.']);
      return;
    }
    const keyToDelete = sshKeys.find(k => k.id === id);
    setSshKeys(sshKeys.filter(k => k.id !== id));
    setHistory([...history, `[SYSTEM] Identity Decommissioned: ${keyToDelete?.name}`]);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `mesh@qmcf:~/${currentEnv}$ ${input}`];

    if (cmd === 'help') {
      newHistory.push('Available Commands:', '  - switch [env]: Change active cluster context (staging|production|live)', '  - push: Deploy C-Bomb to active cluster', '  - scan: Run eBPF discovery on local pod mesh', '  - status: Check node health and PQC compliance', '  - keys: List managed SSH keys', '  - trace: Technical stack integration overview', '  - clear: Wipe terminal history');
    } else if (cmd === 'keys') {
      newHistory.push('Managed SSH Identities:');
      sshKeys.forEach(k => {
        newHistory.push(`  - [${k.id === activeKeyId ? 'ACTIVE' : '      '}] ${k.name} (${k.type}) - ${k.fingerprint}`);
      });
    } else if (cmd === 'scan') {
      newHistory.push(`Scanning Mesh using identity: ${activeKey?.name}...`, '  [OK] Discovery Phase: Found 14 active connections', '  [WARN] Compliance Alert: RSA-2048 detected in payment-gateway-01', '  [SAFE] Quantum Verify: ML-KEM/Kyber-768 verified in auth-mesh');
    } else if (cmd === 'status') {
       newHistory.push(`Active Environment: ${currentEnv.toUpperCase()}`, `Active Identity: ${activeKey?.name}`, `Encryption Status: ${activeKey?.type === 'RSA' ? 'VULNERABLE' : 'QUANTUM-SAFE'}`);
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      newHistory.push(`Command not found: ${cmd}`);
    }

    setHistory(newHistory);
    setInput('');
  };

  const pqcKeyCount = sshKeys.filter(k => k.type === 'ED25519' || k.type === 'ECDSA').length;
  const legacyKeyCount = sshKeys.filter(k => k.type === 'RSA').length;

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="bg-white p-10 rounded-[3rem] border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Mesh Terminal</h2>
          <p className="text-slate-500 font-medium">Direct port connection for cryptographic operationalization.</p>
        </div>
        <div className="flex space-x-2">
          {['staging', 'production', 'live'].map((env) => (
            <button 
              key={env}
              onClick={() => onEnvChange(env as any)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                currentEnv === env ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-slate-50 text-slate-400 border-slate-100'
              }`}
            >
              {env}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* SSH Key Vault Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Management</h3>
              <button 
                onClick={() => setIsKeyModalOpen(true)}
                className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-all shadow-md"
                title="Provision New Identity"
              >
                +
              </button>
            </div>
            
            <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1 max-h-[400px]">
              {sshKeys.map(key => (
                <div 
                  key={key.id}
                  onClick={() => setActiveKeyId(key.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all group relative ${
                    activeKeyId === key.id ? 'border-indigo-500 bg-indigo-50 shadow-md ring-2 ring-indigo-500/10' : 'border-slate-50 bg-slate-50 hover:border-slate-200 hover:bg-white'
                  }`}
                >
                  {activeKeyId === key.id && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-600 rounded-r-full"></div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black text-slate-900 tracking-tight truncate mr-2">{key.name}</span>
                    {activeKeyId === key.id && <span className="text-[8px] font-black text-indigo-600 uppercase tracking-widest bg-white px-2 py-0.5 rounded-md border border-indigo-100">Active</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-bold uppercase ${key.type === 'RSA' ? 'text-rose-500' : 'text-emerald-600'}`}>
                      {key.type}
                    </span>
                    <button 
                      onClick={(e) => deleteKey(key.id, e)}
                      className="text-[9px] text-slate-400 hover:text-rose-600 font-bold uppercase transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-6">
               <div className="bg-slate-900 rounded-2xl p-4">
                  <p className="text-[9px] font-black text-indigo-400 uppercase mb-2 tracking-widest">CNCF Scanning Summary</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400">Quantum-Safe (New)</span>
                        <span className="text-xs font-black text-emerald-400">{pqcKeyCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400">Outdated (Classical)</span>
                        <span className="text-xs font-black text-rose-500">{legacyKeyCount}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="bg-emerald-500 h-full transition-all duration-1000" 
                          style={{ width: `${(pqcKeyCount / sshKeys.length) * 100}%` }}
                        ></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Terminal Area */}
        <div className="lg:col-span-3">
          <div className="bg-slate-950 rounded-[3rem] p-1 shadow-2xl overflow-hidden ring-4 ring-slate-900 h-full">
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                bash — {currentEnv} — via {activeKey?.name}
              </div>
              <div className="w-8"></div>
            </div>
            
            <div 
              ref={scrollRef}
              className="h-[550px] overflow-y-auto p-10 font-mono text-sm space-y-2 custom-scrollbar"
            >
              {history.map((line, i) => (
                <div key={i} className={`${line.includes('ERROR') ? 'text-rose-400' : line.includes('[OK]') ? 'text-emerald-400' : line.includes('mesh@') ? 'text-indigo-400' : line.includes('[SYSTEM]') ? 'text-amber-400 font-bold' : 'text-slate-300'}`}>
                  {line}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-2">
                <span className="text-indigo-400 font-bold shrink-0">mesh@qmcf:~/${currentEnv}$</span>
                <input 
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-white w-full font-mono"
                  placeholder="Enter mesh command..."
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Key Management Modal */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setIsKeyModalOpen(false)}></div>
          <div className="relative bg-white rounded-[3rem] shadow-2xl max-w-lg w-full p-10 border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-slate-900">Provision Identity</h3>
              <button onClick={() => setIsKeyModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">✕</button>
            </div>

            <div className="flex space-x-4 mb-8 p-1 bg-slate-50 rounded-2xl">
              <button 
                onClick={() => setModalMode('generate')}
                className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  modalMode === 'generate' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'
                }`}
              >
                Generate
              </button>
              <button 
                onClick={() => setModalMode('import')}
                className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  modalMode === 'import' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'
                }`}
              >
                Import
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Identity Label</label>
                <input 
                  type="text" 
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="e.g., DE-Auth-Primary" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-indigo-500/10 focus:outline-none" 
                />
              </div>

              {modalMode === 'generate' ? (
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Algorithm Standard</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['RSA', 'ED25519', 'ECDSA'].map(t => (
                      <button 
                        key={t}
                        onClick={() => setNewKeyType(t as any)}
                        className={`py-3 rounded-xl text-[10px] font-black uppercase border-2 transition-all ${
                          newKeyType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-400 border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Public Key Data</label>
                  <textarea 
                    value={importKeyData}
                    onChange={(e) => setImportKeyData(e.target.value)}
                    placeholder="ssh-rsa AAAAB3..." 
                    className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-xs font-mono focus:ring-4 focus:ring-indigo-500/10 focus:outline-none resize-none" 
                  />
                </div>
              )}

              <button 
                onClick={() => {
                  if (modalMode === 'generate') generateSSHKey();
                  else importSSHKey();
                }}
                disabled={!newKeyName.trim() || (modalMode === 'import' && !importKeyData.trim())}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all disabled:opacity-50"
              >
                {modalMode === 'generate' ? 'Confirm Generation' : 'Confirm Import'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeshTerminal;
