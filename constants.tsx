import { CryptoAlgorithm, ComplianceStandard, RoadmapItem, TeamMember } from './types';

export const DIRTY_DOZEN: CryptoAlgorithm[] = [
  { 
    name: 'RSA (2048-4096)', 
    category: 'Asymmetric', 
    riskScore: 8.5, 
    status: 'Quantum-Vulnerable', 
    securityBasis: 'Integer Factorization',
    quantumThreat: "Completely broken by Shor's algorithm",
    quantumThreatImpact: "Security strength collapses from 128/256 bits to 0 bits. Factoring N is polynomial time.",
    priority: 'Low',
    action: 'Block + Migration',
    description: 'Virtually all public key cryptography currently in use. MANDATORY migration per BSI TR-02102 and DORA Art. 16.',
    remediation: 'Migrate to ML-KEM (Kyber) or dual hybrid approach immediately.',
    complianceIds: ['NIST-PQC', 'DORA-Art-16', 'BSI-TR-02102-1', 'SP-1800-38-Inv']
  },
  { 
    name: 'ECC (ECDSA/ECDH)', 
    category: 'Asymmetric', 
    riskScore: 8.0, 
    status: 'Quantum-Vulnerable', 
    securityBasis: 'Elliptic Curve Discrete Logarithm',
    quantumThreat: "Completely broken by Shor's algorithm",
    quantumThreatImpact: "Security strength collapses from 128/256 bits to 0 bits. Solving ECDLP is polynomial time.",
    priority: 'Low',
    action: 'Block + Migration',
    description: 'Used in Blockchain, TLS, and Mobile. MANDATORY transition to Dilithium for financial signatures in EU.',
    remediation: 'Transition to Dilithium (High priority) for signatures.',
    complianceIds: ['BSI-TR-02102-1', 'SP-1800-38-Inv', 'FIPS-204']
  },
  { 
    name: 'AES-128', 
    category: 'Symmetric', 
    riskScore: 6.5, 
    status: 'Deprecated', 
    securityBasis: 'Substitution-Permutation Network',
    quantumThreat: "Strength halved by Grover's algorithm",
    quantumThreatImpact: "Security strength reduces from 128 bits to 64 bits. Vulnerable to quantum search.",
    priority: 'Medium',
    action: 'Monitor + Upgrade',
    description: 'Standard symmetric cipher. EU BSI guidelines now mandate AES-256 for high-security long-term data.',
    remediation: 'Migrate to AES-256 to maintain 128-bit quantum security level.',
    complianceIds: ['BSI-TR-02102-1']
  },
  { 
    name: 'Kyber (ML-KEM)', 
    category: 'Post-Quantum', 
    riskScore: 0.1, 
    status: 'Safe', 
    securityBasis: 'Module-LWE',
    quantumThreat: 'Quantum-Resistant (FIPS 203)',
    quantumThreatImpact: "Minimal impact. Maintains >128 bits of security against Grover's and lattice attacks.",
    priority: 'Highest',
    action: 'Target Standard',
    description: 'Primary NIST standard for Key Encapsulation (KEM).',
    remediation: 'Primary migration target for all key exchange mechanisms.',
    complianceIds: ['NIST-PQC', 'BSI-TR-02102-1', 'FIPS-203']
  },
  {
    name: 'Dilithium (ML-DSA)',
    category: 'Post-Quantum',
    riskScore: 0.2,
    status: 'Safe',
    securityBasis: 'Module-LWE Signature',
    quantumThreat: 'Quantum-Resistant (FIPS 204)',
    quantumThreatImpact: 'Resistant to quantum-enabled lattice reduction attacks.',
    priority: 'Highest',
    action: 'Target Standard',
    description: 'Primary NIST standard for general-purpose digital signatures.',
    remediation: 'Target for X.509 certificates and code signing migration.',
    complianceIds: ['FIPS-204', 'NIST-PQC']
  },
  {
    name: 'SPHINCS+ (SLH-DSA)',
    category: 'Post-Quantum',
    riskScore: 0.1,
    status: 'Safe',
    securityBasis: 'Hash-based Stateless',
    quantumThreat: 'Quantum-Resistant (FIPS 205)',
    quantumThreatImpact: 'Conservative security not reliant on lattice assumptions.',
    priority: 'High',
    action: 'Target Standard',
    description: 'Stateless hash-based signature standard. Robust against lattice crypto-analysis.',
    remediation: 'Ideal for critical long-term root of trust identities.',
    complianceIds: ['FIPS-205', 'NIST-PQC']
  },
  {
    name: 'Classic McEliece',
    category: 'Post-Quantum',
    riskScore: 0.05,
    status: 'Safe',
    securityBasis: 'Error-Correcting Codes',
    quantumThreat: 'Quantum-Resistant (Conservative)',
    quantumThreatImpact: 'Immune to all known quantum speedups. 40+ years of security history.',
    priority: 'Medium',
    action: 'Target Standard (Archival)',
    description: 'The oldest PQC candidate. Best for long-term secret data (Store-Now-Decrypt-Later defense).',
    remediation: 'Use for sensitive archival data requiring 30+ years of security.',
    complianceIds: ['NIST-PQC-Finalist']
  },
  {
    name: 'Falcon',
    category: 'Post-Quantum',
    riskScore: 0.3,
    status: 'Safe',
    securityBasis: 'NTRU-Lattices',
    quantumThreat: 'Quantum-Resistant (Efficient Sig)',
    quantumThreatImpact: 'Highly efficient signatures and verification times.',
    priority: 'Medium',
    action: 'Evaluation',
    description: 'Lattice-based signature scheme optimized for bandwidth and verification speed.',
    remediation: 'Evaluate for high-traffic TLS handshakes.',
    complianceIds: ['NIST-PQC']
  },
  {
    name: 'BIKE',
    category: 'Post-Quantum',
    riskScore: 0.4,
    status: 'Safe',
    securityBasis: 'QC-MDPC Code-based',
    quantumThreat: 'Quantum-Resistant (Round 4)',
    quantumThreatImpact: 'Resistant to quantum search and algebraic lattice attacks.',
    priority: 'Medium',
    action: 'Evaluation',
    description: 'Bit Flipping Key Encapsulation. Optimized for communication efficiency.',
    remediation: 'Evaluate for bandwidth-constrained satellite or mobile links.',
    complianceIds: ['NIST-PQC-R4']
  },
  {
    name: 'HQC',
    category: 'Post-Quantum',
    riskScore: 0.45,
    status: 'Safe',
    securityBasis: 'Hamming Quasi-Cyclic Codes',
    quantumThreat: 'Quantum-Resistant (Round 4)',
    quantumThreatImpact: 'Code-based security with balanced performance.',
    priority: 'Medium',
    action: 'Evaluation',
    description: 'Code-based KEM candidate in NIST Round 4 evaluation.',
    remediation: 'Secondary KEM target for defense-in-depth strategies.',
    complianceIds: ['NIST-PQC-R4']
  },
  {
    name: 'FrodoKEM',
    category: 'Post-Quantum',
    riskScore: 0.15,
    status: 'Safe',
    securityBasis: 'Unstructured LWE',
    quantumThreat: 'Quantum-Resistant (Conservative)',
    quantumThreatImpact: 'Based on learning with errors on unstructured lattices. High security confidence.',
    priority: 'Low',
    action: 'Evaluation',
    description: 'Conservative KEM for entities requiring maximum confidence in security assumptions.',
    remediation: 'Implement for ultra-sensitive government or intelligence data.',
    complianceIds: ['NIST-PQC-Conservative']
  },
  {
    name: 'XMSS / LMS',
    category: 'Post-Quantum',
    riskScore: 0.1,
    status: 'Safe',
    securityBasis: 'Hash-based Stateful',
    quantumThreat: 'Quantum-Resistant (RFC 8391)',
    quantumThreatImpact: 'Proven security for firmware and software updates.',
    priority: 'High',
    action: 'Target Standard (Firmware)',
    description: 'Stateful hash-based signatures already standardized for specific high-trust uses.',
    remediation: 'MANDATORY for firmware integrity and secure boot processes.',
    complianceIds: ['NIST-SP-800-208', 'BSI-TR-02102-1']
  }
];

export const COMPLIANCE_DATA: ComplianceStandard[] = [
  {
    id: 'DORA',
    name: 'DORA (EU Mandate)',
    description: 'Digital Operational Resilience Act - MANDATORY for all EU Financial Entities.',
    requirements: [
      { id: 'DORA-Art-16', text: 'ICT Risk Management Framework', implementation: 'Continuous eBPF monitoring of cryptographic primitives', status: 'Compliant', region: 'EU' },
      { id: 'DORA-Art-20', text: 'Cryptographic Inventory', implementation: 'CycloneDX CBOMs every 24h as mandatory evidence', status: 'Compliant', region: 'EU' }
    ]
  },
  {
    id: 'BSI-TR',
    name: 'BSI TR-02102 (DE Mandate)',
    description: 'German BSI standards for cryptographic procedures - MANDATORY for KRITIS.',
    requirements: [
      { id: 'BSI-TR-02102-1', text: 'Kryptographische Verfahren: Empfehlungen', implementation: 'Enforcement of approved curves and PQC migration targets', status: 'Compliant', region: 'DE' },
      { id: 'BSI-TR-02102-2', text: 'Verwendung von TLS', implementation: 'Policy Engine for TLS 1.3 + PQC hybrid keys', status: 'Partial', region: 'DE' },
      { id: 'BSI-TR-02102-3', text: 'Transition to PQC Signature Algorithms', implementation: 'Mandatory use of Dilithium or Falcon for new systems', status: 'Partial', region: 'DE' }
    ]
  },
  {
    id: 'NIST-PQC-MIG',
    name: 'NIST SP 1800-38',
    description: 'Migration to Post-Quantum Cryptography: Global Best Practice.',
    requirements: [
      { id: 'SP-1800-38-Inv', text: 'Establish Cryptographic Inventory', implementation: 'Automated CBOM/SBOM discovery in CI/CD', status: 'Compliant', region: 'US' },
      { id: 'SP-1800-38-Risk', text: 'Risk-Based Prioritization of Migration', implementation: 'Dirty Dozen Triage Matrix scoring', status: 'Compliant', region: 'US' }
    ]
  }
];

export const ROADMAP_DATA: RoadmapItem[] = [
  { quarter: 'Q1 2025', title: 'EU/DE Regulatory Enforcement', description: 'Mandatory synthesis of eBPF telemetry for DORA/BSI compliance.', status: 'Completed' },
  { quarter: 'Q2 2025', title: 'Automated PQC Migration Pushes', description: 'One-click migration to ML-KEM/DSA via Mesh Terminal.', status: 'In Progress' },
  { quarter: 'Q3 2025', title: 'Global Attestation Ledger', description: 'Immutable evidence packs for regulatory audits.', status: 'Planned' },
  { quarter: '2026-2030', title: 'Full PQC Hardening', description: 'Total decommissioning of RSA/ECC across all critical infrastructure.', status: 'Planned' }
];

export const TEAM_DATA: TeamMember[] = [
  { name: 'Dr. Elena Vance', role: 'Head of Research', expertise: 'Post-Quantum Theory', avatar: 'EV' },
  { name: 'Marcus Chen', role: 'Chief Architect', expertise: 'Cloud-Native eBPF', avatar: 'MC' },
  { name: 'Sophie Müller', role: 'Compliance Lead', expertise: 'EU/DE Regulatory Frameworks', avatar: 'SM' }
];

export const ADVISORY_DATA: TeamMember[] = [
  { name: 'Prof. Julian Couzens', role: 'Senior Advisor', expertise: 'Cryptographic Methodology', avatar: 'JC' },
  { name: 'Linda Watson', role: 'Strategic Advisor', expertise: 'Enterprise Security', avatar: 'LW' }
];

export const TIMELINE_DATA = [
  { phase: 'Schema', manual: 14, automated: 2 },
  { phase: 'Discovery', manual: 28, automated: 3 },
  { phase: 'Remediation', manual: 28, automated: 7 },
  { phase: 'Governance', manual: 21, automated: 2 },
  { phase: 'BAU Handoff', manual: 21, automated: 2 },
];
