import React, { useState, useEffect } from 'react';
import { AppSection } from './types.ts';
import Navigation from './components/Navigation.tsx';
import DashboardOverview from './components/DashboardOverview.tsx';
import MethodologyTable from './components/MethodologyTable.tsx';
import SectionHeader from './components/SectionHeader.tsx';
import PolicyEngine from './components/PolicyEngine.tsx';
import QuantumScience from './components/QuantumScience.tsx';
import Homepage from './components/Homepage.tsx';
import ReportCenter from './components/ReportCenter.tsx';
import MeshTerminal from './components/MeshTerminal.tsx';
import GlobalSearch from './components/GlobalSearch.tsx';
import ScanningSummary from './components/ScanningSummary.tsx';
import PricingTiers from './components/PricingTiers.tsx';
import AssetInventory from './components/AssetInventory.tsx';
import AISecurityLab from './components/AISecurityLab.tsx';
import { 
  RoadmapPage, 
  TeamPage, 
  RegistrationPage, 
  SolutionsPage,
  PrivacyPolicyPage, 
  TermsOfServicePage, 
  TrustCenterPage, 
  DoraAttestationPage,
  ContactSalesPage, 
  DeveloperHubPage, 
  HelpCenterPage
} from './components/StaticPages.tsx';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [currentEnv, setCurrentEnv] = useState<'staging' | 'production' | 'live'>('staging');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavCollapsed(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const discoveryRows = [
    { method: 'QMCF Mesh Discovery', whitePaper: 'Runtime mapping of mesh connections', cryptoBom: 'pkg/qmcf/mesh/scanner', status: 'Core MVP' },
    { method: 'CNCF PQC Validator', whitePaper: 'Verify container crypto against CNCF PQC policies', cryptoBom: 'pkg/cncf/pqc/validator', status: 'Core MVP' },
    { method: 'Static SBOM Synthesis', whitePaper: 'Ingest S-Bombs from CI/CD pipeline', cryptoBom: 'pkg/sbom/ingestor', status: 'Core MVP' },
    { method: 'CBOM Synthesis', whitePaper: 'Merge mesh telemetry into unified CBOM', cryptoBom: 'pkg/cbom/synthesizer', status: 'Core MVP' }
  ];

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.HOME:
        return <Homepage onNavigate={setCurrentSection} />;
      case AppSection.OVERVIEW:
        return (
          <div className="space-y-12">
            <SectionHeader 
              title="Mission Control Dashboard" 
              description="Real-time visualization of your cryptographic risk posture and February 2026 compliance velocity."
            />
            <DashboardOverview />
            <SectionHeader 
              title="Discovered Mesh Assets" 
              description="Automated inventory of cryptographic primitives identified via eBPF kernel probes."
            />
            <AssetInventory />
            <SectionHeader 
              title="Vulnerability Summary" 
              description="A summary of Shor-vulnerable vs. quantum-safe cryptographic identities."
            />
            <ScanningSummary />
          </div>
        );
      case AppSection.TERMINAL:
        return <MeshTerminal currentEnv={currentEnv} onEnvChange={setCurrentEnv} />;
      case AppSection.AI_LAB:
        return <AISecurityLab />;
      case AppSection.METHODOLOGY:
        return (
          <div className="space-y-12">
            <SectionHeader 
              title="The SITG & QMCF Methodology" 
              description="Mapping theoretical white-paper foundations to production-ready CryptoBOM implementations."
            />
            <MethodologyTable title="Triangulated Mesh Discovery" rows={discoveryRows} />
          </div>
        );
      case AppSection.QUANTUM_SCIENCE:
        return <QuantumScience />;
      case AppSection.POLICY_ENGINE:
        return <PolicyEngine />;
      case AppSection.REPORT_CENTER:
        return <ReportCenter />;
      case AppSection.ROADMAP:
        return <RoadmapPage />;
      case AppSection.TEAM:
        return <TeamPage />;
      case AppSection.REGISTER:
        return <RegistrationPage />;
      case AppSection.SOLUTIONS:
        return <SolutionsPage />;
      case AppSection.PRICING:
        return <PricingTiers onNavigate={setCurrentSection} />;
      case AppSection.PRIVACY:
        return <PrivacyPolicyPage />;
      case AppSection.TERMS:
        return <TermsOfServicePage />;
      case AppSection.TRUST:
        return <TrustCenterPage />;
      case AppSection.DORA_ATTESTATION:
        return <DoraAttestationPage />;
      case AppSection.CONTACT:
        return <ContactSalesPage />;
      case AppSection.DEV_HUB:
        return <DeveloperHubPage />;
      case AppSection.HELP:
        return <HelpCenterPage />;
      default:
        return <div className="p-20 text-center text-slate-400">Node Provisioning...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-row-reverse selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
        isCollapsed={isNavCollapsed}
        onToggle={() => setIsNavCollapsed(!isNavCollapsed)}
      />
      
      <main className={`flex-1 ${isNavCollapsed ? 'mr-20' : 'mr-64'} transition-all duration-300`}>
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 px-10 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-4 shrink-0">
             <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => setCurrentSection(AppSection.HOME)}
             >
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center font-black text-white text-sm shadow-lg">QM</div>
                <span className="text-slate-900 font-black tracking-tighter text-lg group-hover:text-indigo-600 transition-colors hidden sm:inline">QMCF SaaS Portal</span>
             </div>
             <div className="h-4 w-px bg-slate-200 mx-4 hidden sm:block"></div>
          </div>
          
          <GlobalSearch onNavigate={setCurrentSection} />
          
          <div className="flex items-center space-x-4 shrink-0">
            <div className="hidden md:flex flex-col items-end mr-4">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SaaS Status</span>
               <span className="text-[11px] font-bold text-emerald-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Node Live
               </span>
            </div>
            <button 
              onClick={() => setCurrentSection(AppSection.REGISTER)}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-wider shadow-lg shadow-indigo-100 hover:scale-105 transition-all"
            >
              Beta Console
            </button>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto min-h-screen">
          <div key={currentSection} className="animate-in pb-20">
            {renderSection()}
          </div>
        </div>

        <footer className="bg-white border-t border-slate-200 pt-20 pb-12 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-white text-lg">QM</div>
                 <h2 className="text-2xl font-black text-slate-900 tracking-tighter">Quantum Mesh Foundation</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                The leading cryptographic governance framework for regulated EU entities. Proudly developed in the Berlin IBM ecosystem.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Platform</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><button onClick={() => setCurrentSection(AppSection.SOLUTIONS)} className="hover:text-indigo-600">Strategic Use Cases</button></li>
                <li><button onClick={() => setCurrentSection(AppSection.METHODOLOGY)} className="hover:text-indigo-600">Methodology Map</button></li>
                <li><button onClick={() => setCurrentSection(AppSection.ROADMAP)} className="hover:text-indigo-600">2026 Pilot Roadmap</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Resources</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><button onClick={() => setCurrentSection(AppSection.TEAM)} className="hover:text-indigo-600">Berlin Core Team</button></li>
                <li><button onClick={() => setCurrentSection(AppSection.CONTACT)} className="hover:text-indigo-600">Contact Sales</button></li>
                <li><button onClick={() => setCurrentSection(AppSection.DEV_HUB)} className="hover:text-indigo-600">Developer Hub</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Legal</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><button onClick={() => setCurrentSection(AppSection.PRIVACY)} className="hover:text-indigo-600">Privacy Policy</button></li>
                <li><button onClick={() => setCurrentSection(AppSection.TERMS)} className="hover:text-indigo-600">Terms of Service</button></li>
                <li><button onClick={() => setCurrentSection(AppSection.DORA_ATTESTATION)} className="hover:text-indigo-600">DORA Attestation</button></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2025 QMCF Framework. Made with ❤️ in Berlin.</p>
            <div className="flex items-center space-x-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
               <span>Status: <span className="text-emerald-500 font-bold uppercase">Operational</span></span>
               <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
               <span>Cloud: IBM-EU-West-1</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;