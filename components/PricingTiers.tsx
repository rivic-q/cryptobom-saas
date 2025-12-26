
import React from 'react';
import { AppSection } from '../types';

interface PricingTiersProps {
  onNavigate: (section: AppSection) => void;
}

const PricingTiers: React.FC<PricingTiersProps> = ({ onNavigate }) => {
  const tiers = [
    {
      name: 'Open Source',
      price: '$0',
      description: 'Community-driven PQC discovery for individual developers and researchers.',
      features: [
        'Local eBPF Scanning',
        'CycloneDX CBOM Export',
        'Standard Algorithm Triage',
        'Community Support',
        'Self-Hosted Only'
      ],
      cta: 'Get Started',
      accent: 'bg-slate-100 text-slate-900 border-slate-200'
    },
    {
      name: 'Premium',
      price: '$2,450',
      description: 'The standard for mid-sized Fintechs requiring DORA/BSI evidence packs.',
      features: [
        'Full Cluster Mesh Discovery',
        'Automated Compliance Reports',
        'Policy Enforcement Engine',
        'Priority NIST Updates',
        'SaaS Control Plane'
      ],
      cta: 'Go Premium',
      popular: true,
      accent: 'bg-indigo-600 text-white border-indigo-500'
    },
    {
      name: 'IBM Enterprise',
      price: 'Custom',
      description: 'Hardware-backed PQC for global financial institutions and governments.',
      features: [
        'IBM Cloud HSMLive Integration',
        'Dedicated Audit Concierge',
        'Multi-Region Mesh Sync',
        'Air-Gapped Deployment',
        '24/7 Forensic Support'
      ],
      cta: 'Contact Sales',
      accent: 'bg-slate-900 text-white border-slate-800'
    }
  ];

  return (
    <div className="space-y-16 py-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-5xl font-black text-slate-900 tracking-tight">Go-to-Market Tiers</h2>
        <p className="text-slate-500 text-lg">Choose the enforcement level required for your regulatory environment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div 
            key={tier.name} 
            className={`relative p-10 rounded-[3rem] border-2 flex flex-col justify-between transition-all hover:scale-[1.02] ${
              tier.popular ? 'shadow-2xl shadow-indigo-200' : 'shadow-sm'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                Most Popular for DORA
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="ml-1 text-slate-500 font-bold text-sm">/mo</span>}
                </div>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed">{tier.description}</p>
              
              <ul className="space-y-4 pt-6">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mr-3 text-[10px]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => tier.cta === 'Contact Sales' ? onNavigate(AppSection.CONTACT) : onNavigate(AppSection.REGISTER)}
              className={`mt-10 w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${tier.accent} hover:opacity-90 active:scale-95`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-6">
           <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-3xl">🛡️</div>
           <div>
              <h4 className="text-xl font-black text-slate-900">IBM Cloud Strategic Partnership</h4>
              <p className="text-slate-500 text-sm font-medium">Enterprise customers gain direct access to IBM's PQC hardware roadmap.</p>
           </div>
        </div>
        <button onClick={() => onNavigate(AppSection.CONTACT)} className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-xs hover:bg-slate-50">Learn About IBM Integration</button>
      </div>
    </div>
  );
};

export default PricingTiers;
