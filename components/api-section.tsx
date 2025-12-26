import { Button } from "./ui/button"
import { ArrowRight, Code, Database, Webhook, Shield, Zap, Globe, Lock, Monitor, Bell, BarChart3, GitBranch } from "lucide-react"

export function ApiSection() {
  return (
    <section id="enterprise" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Globe className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">Enterprise SaaS APIs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Quantum-Safe Security as a Service
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Integrate quantum-safe cryptography into your applications with our enterprise APIs. 
            No infrastructure management, instant scalability, enterprise-grade security.
          </p>
        </div>

        {/* API Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* CBOM Analysis API */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">CBOM Analysis API</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Real-time cryptographic bill of materials scanning for containers, applications, and infrastructure.
            </p>
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <code className="text-xs text-cyan-400">
                POST /api/v1/cbom/scan<br/>
                GET /api/v1/cbom/reports/:id<br/>
                GET /api/v1/cbom/compliance
              </code>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Multi-format container scanning</li>
              <li>• Risk assessment and scoring</li>
              <li>• Compliance framework mapping</li>
            </ul>
          </div>

          {/* Quantum Attestation API */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Attestation API</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              IBM Quantum hardware integration for cryptographic key attestation and verification.
            </p>
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <code className="text-xs text-purple-400">
                POST /api/v1/quantum/attest<br/>
                GET /api/v1/quantum/jobs/:id<br/>
                POST /api/v1/quantum/verify
              </code>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Hardware quantum verification</li>
              <li>• Quantum entropy generation</li>
              <li>• Circuit-based attestation</li>
            </ul>
          </div>

          {/* Policy Enforcement API */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Policy Enforcement API</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Real-time policy evaluation and enforcement for quantum-safe cryptographic compliance.
            </p>
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <code className="text-xs text-emerald-400">
                POST /api/v1/policy/evaluate<br/>
                GET /api/v1/policy/violations<br/>
                POST /api/v1/policy/remediate
              </code>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Real-time policy evaluation</li>
              <li>• Automatic violation detection</li>
              <li>• Compliance remediation</li>
            </ul>
          </div>

          {/* Cryptographic Operations API */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Crypto Operations API</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              NIST-standardized post-quantum cryptographic operations as API services.
            </p>
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <code className="text-xs text-amber-400">
                POST /api/v1/crypto/keygen<br/>
                POST /api/v1/crypto/kem/encap<br/>
                POST /api/v1/crypto/sign
              </code>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• ML-KEM key encapsulation</li>
              <li>• ML-DSA digital signatures</li>
              <li>• SLH-DSA hash signatures</li>
            </ul>
          </div>

          {/* Monitoring & Analytics API */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Monitor className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Monitoring API</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Real-time security monitoring and analytics for quantum-safe infrastructure.
            </p>
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <code className="text-xs text-blue-400">
                GET /api/v1/metrics<br/>
                GET /api/v1/alerts<br/>
                POST /api/v1/dashboard/create
              </code>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Real-time metrics and KPIs</li>
              <li>• Security event streaming</li>
              <li>• Custom dashboard creation</li>
            </ul>
          </div>

          {/* Integration & Webhooks API */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
              <Webhook className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Integration API</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Webhook integrations and third-party system connectivity for seamless workflows.
            </p>
            <div className="bg-black/30 rounded-lg p-3 mb-4">
              <code className="text-xs text-pink-400">
                POST /api/v1/webhooks<br/>
                GET /api/v1/integrations<br/>
                POST /api/v1/sync/:system
              </code>
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Real-time event webhooks</li>
              <li>• SIEM/SOAR integrations</li>
              <li>• CI/CD pipeline integration</li>
            </ul>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code className="h-6 w-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Quick Integration Example</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Scan Container for Quantum Vulnerabilities</h4>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-cyan-400">
{`curl -X POST https://api.rivic.io/v1/cbom/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "nginx:latest",
    "type": "container_image",
    "compliance_frameworks": ["eidas2", "nist_pqc"]
  }'`}
                  </code>
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Response: Quantum Risk Assessment</h4>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-emerald-400">
{`{
  "scan_id": "cbom_12345",
  "status": "completed",
  "risk_score": 85,
  "quantum_vulnerabilities": 12,
  "deprecated_algorithms": ["RSA-2048", "ECDSA-P256"],
  "compliance": {
    "eidas2": { "status": "non_compliant", "score": 65 },
    "nist_pqc": { "status": "partial", "score": 78 }
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Enterprise-Grade Platform</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Built for mission-critical applications with enterprise security, compliance, and support requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">99.99% Uptime SLA</h4>
              <p className="text-sm text-gray-400">Enterprise-grade reliability and availability</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">SOC 2 Type II</h4>
              <p className="text-sm text-gray-400">Certified security controls and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <GitBranch className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="font-semibred text-white mb-2">Multi-Region</h4>
              <p className="text-sm text-gray-400">Global deployment with data residency</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Bell className="h-6 w-6 text-amber-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-400">Dedicated support with guaranteed SLA</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
            >
              Start Enterprise Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
            >
              View API Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
