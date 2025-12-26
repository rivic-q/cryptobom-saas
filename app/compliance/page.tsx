import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, CheckCircle, Globe, Award, Lock, Eye, FileCheck, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance & Certifications - CryptoBOM SaaS | Security Standards",
  description: "Security compliance, certifications, and regulatory adherence for CryptoBOM SaaS quantum-safe cryptographic platform. GDPR, BSI, NIST compliance.",
  keywords: [
    "compliance",
    "security certifications",
    "gdpr compliance",
    "bsi standards",
    "nist compliance", 
    "quantum security",
    "cryptographic compliance",
    "data protection"
  ]
}

const ComplianceCard = ({ 
  icon: Icon, 
  title, 
  status, 
  description, 
  details,
  color = "blue" 
}: {
  icon: any
  title: string
  status: "Certified" | "In Progress" | "Planned"
  description: string
  details: string[]
  color?: "blue" | "green" | "yellow" | "purple"
}) => {
  const colorClasses = {
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    green: "bg-green-500/10 border-green-500/20 text-green-400", 
    yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  }

  const statusColors = {
    "Certified": "text-green-400 bg-green-500/10 border-green-500/20",
    "In Progress": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", 
    "Planned": "text-blue-400 bg-blue-500/10 border-blue-500/20"
  }

  return (
    <div className={`${colorClasses[color]} rounded-xl p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" />
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-white/80 mb-4">{description}</p>
      <ul className="space-y-1 text-white/70 text-sm">
        {details.map((detail, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Security & Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Certifications
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              CryptoBOM SaaS maintains the highest security and compliance standards to protect 
              your cryptographic data and ensure regulatory adherence across global jurisdictions.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                EU & German Compliance
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Industry Standards
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Quantum-Safe Security
              </span>
            </div>
          </div>

          {/* Compliance Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <ComplianceCard
              icon={Shield}
              title="GDPR Compliance"
              status="Certified"
              description="Full compliance with EU General Data Protection Regulation for cryptographic data processing."
              details={[
                "Data minimization principles",
                "User consent management",
                "Right to erasure implementation",
                "Data portability features",
                "Privacy by design architecture"
              ]}
              color="green"
            />

            <ComplianceCard
              icon={FileCheck}
              title="BSI TR-02102 Standards"
              status="In Progress"
              description="German Federal Office for Information Security cryptographic guidelines compliance."
              details={[
                "Quantum-safe algorithms",
                "Key management standards", 
                "Cryptographic lifecycle management",
                "Security evaluation criteria",
                "Hybrid transition protocols"
              ]}
              color="blue"
            />

            <ComplianceCard
              icon={Award}
              title="NIST Post-Quantum"
              status="Certified"
              description="Implementation of NIST-approved post-quantum cryptographic algorithms."
              details={[
                "Kyber key encapsulation",
                "Dilithium digital signatures",
                "Algorithm agility framework",
                "Migration path planning",
                "Interoperability testing"
              ]}
              color="purple"
            />
          </div>

          {/* Additional Standards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ComplianceCard
              icon={Lock}
              title="ISO 27001 Security"
              status="In Progress"
              description="Information security management system certification for comprehensive data protection."
              details={[
                "Risk assessment procedures",
                "Security incident management",
                "Access control frameworks",
                "Business continuity planning",
                "Regular security audits"
              ]}
              color="yellow"
            />

            <ComplianceCard
              icon={Eye}
              title="SOC 2 Type II"
              status="Planned"
              description="Service Organization Control audit for security, availability, and confidentiality."
              details={[
                "Security control testing",
                "System availability monitoring",
                "Confidentiality safeguards",
                "Processing integrity validation",
                "Privacy protection measures"
              ]}
              color="blue"
            />
          </div>

          {/* Regulatory Framework */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              Regulatory Framework
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-white">European Union</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• GDPR (General Data Protection Regulation)</li>
                  <li>• eIDAS (Electronic Identification Regulation)</li>
                  <li>• NIS2 Directive (Network Security)</li>
                  <li>• Digital Services Act (DSA)</li>
                  <li>• Cyber Resilience Act (planned)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white">Germany</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• BDSG (Federal Data Protection Act)</li>
                  <li>• BSI IT-Grundschutz standards</li>
                  <li>• TMG (Telemediengesetz)</li>
                  <li>• KRITIS regulations</li>
                  <li>• TKG (Telecommunications Act)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white">International</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• NIST Cybersecurity Framework</li>
                  <li>• ISO/IEC 27000 series</li>
                  <li>• Common Criteria (CC)</li>
                  <li>• FIPS 140-2/3 standards</li>
                  <li>• OWASP security guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-5 h-5 text-green-400" />
                Technical Security Measures
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Encryption & Cryptography</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• AES-256 data encryption at rest</li>
                    <li>• TLS 1.3 for data in transit</li>
                    <li>• Post-quantum key exchange</li>
                    <li>• Hardware security modules (HSM)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Access Control</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Multi-factor authentication (MFA)</li>
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Zero-trust architecture</li>
                    <li>• Regular access reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-5 h-5 text-blue-400" />
                Operational Security Measures
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Monitoring & Detection</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 24/7 security monitoring</li>
                    <li>• Intrusion detection systems</li>
                    <li>• Anomaly detection algorithms</li>
                    <li>• Security incident response team</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Protection</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Data loss prevention (DLP)</li>
                    <li>• Regular security backups</li>
                    <li>• Disaster recovery procedures</li>
                    <li>• Data retention policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Audit & Transparency */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-purple-400" />
              Audit & Transparency
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Regular Audits</h3>
                <p className="text-white/80 text-sm">
                  Annual third-party security audits and compliance assessments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Transparency Reports</h3>
                <p className="text-white/80 text-sm">
                  Quarterly transparency reports on security incidents and improvements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Compliance Dashboard</h3>
                <p className="text-white/80 text-sm">
                  Real-time compliance status monitoring for enterprise customers
                </p>
              </div>
            </div>
          </div>

          {/* Contact for Compliance */}
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Compliance?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our compliance team is available to discuss specific regulatory requirements, 
              provide compliance documentation, or assist with audit processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:compliance@rivic.xyz" 
                className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                compliance@rivic.xyz
              </a>
              <a 
                href="/dpo" 
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                Data Protection Officer
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
