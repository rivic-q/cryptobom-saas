
export enum AppSection {
  HOME = 'Mission Control',
  OVERVIEW = 'KPI Dashboard',
  METHODOLOGY = 'Methodology Map',
  QUANTUM_SCIENCE = 'Quantum Threats',
  TERMINAL = 'Mesh Terminal',
  POLICY_ENGINE = 'Triage & Policy',
  AI_LAB = 'AI Security Lab',
  REPORT_CENTER = 'SaaS Report Center',
  COMPLIANCE = 'Regulatory Mapping',
  SOLUTIONS = 'Use Cases & Personas',
  ROADMAP = 'Roadmap 2025-2030',
  TEAM = 'Our Team',
  REGISTER = 'Account Registration',
  PRIVACY = 'Privacy Policy',
  TERMS = 'Terms of Service',
  TRUST = 'Trust Center',
  DORA_ATTESTATION = 'DORA Attestation',
  CONTACT = 'Contact Sales',
  DEV_HUB = 'Developer Hub',
  HELP = 'Help Center',
  PRICING = 'Tiers & Licensing'
}

export enum MeshTier {
  OPEN_SOURCE = 'Open Source Core',
  PREMIUM = 'Enterprise Premium',
  ENTERPRISE = 'IBM Managed Enterprise'
}

export interface SSHKey {
  id: string;
  name: string;
  publicKey: string;
  fingerprint: string;
  createdAt: string;
  type: 'RSA' | 'ED25519' | 'ECDSA';
}

export interface CryptoAlgorithm {
  name: string;
  category: 'Asymmetric' | 'Symmetric' | 'Hash' | 'Post-Quantum';
  riskScore: number;
  simulatedScore?: number;
  status: 'Forbidden' | 'Critical' | 'Quantum-Vulnerable' | 'Deprecated' | 'Safe' | 'Quantum-Resistant';
  securityBasis: string;
  quantumThreat: string;
  quantumThreatImpact: string;
  action: string;
  description: string;
  remediation: string;
  priority: 'Highest' | 'High' | 'Medium' | 'Low' | 'Very Low' | 'None';
  complianceIds: string[];
}

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  avatar: string;
}

export interface SaaSReport {
  id: string;
  type: 'CBOM' | 'SBOM' | 'QMCF-Evidence' | 'NIST-Audit';
  timestamp: string;
  size: string;
  status: 'Ready' | 'Generating';
}

export interface ComplianceRequirement {
  id: string;
  text: string;
  implementation: string;
  status: 'Compliant' | 'Partial' | 'Non-Compliant';
  region: string;
}

export interface ComplianceStandard {
  id: string;
  name: string;
  description: string;
  requirements: ComplianceRequirement[];
}

export interface DemoEvent {
  id: string;
  timestamp: string;
  pod: string;
  algorithm: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'detected' | 'blocked' | 'monitored';
}
