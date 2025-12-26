import { Button } from "./ui/button"
import { ArrowRight, Shield, Clock, CheckCircle, Github, Cloud, Zap, Users, Lock, Globe, Code, Cpu } from "lucide-react"

export function OfferingsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Two Paths to Quantum-Safe Security
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-emerald-400">Open source tools available immediately</strong> with streamlined setup, or <strong className="text-yellow-400">enterprise SaaS APIs launching February 2026</strong>
          </p>
        </div>

        {/* Detailed Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Open Source Column */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Github className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Open Source</h3>
                <span className="text-sm bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                  FREE FOREVER
                </span>
              </div>
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-emerald-400 font-semibold text-sm">AVAILABLE NOW</span>
                </div>
                <p className="text-emerald-300 text-sm">
                  Streamlined setup process - Get started in minutes with GitHub, npm, or pip install.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Perfect for developers, startups, and organizations beginning their quantum-safe transformation.
              </p>
            </div>

            {/* Open Source Features */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-emerald-400" />
                  Core Components
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">Basic CBOM Scanner</span>
                      <p className="text-gray-400 text-sm">Scan containers and applications for cryptographic assets</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">ML-KEM/ML-DSA Libraries</span>
                      <p className="text-gray-400 text-sm">NIST-standardized post-quantum cryptographic implementations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">Compliance Reports</span>
                      <p className="text-gray-400 text-sm">Basic eIDAS 2.0 and NIST compliance assessment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">Documentation & Examples</span>
                      <p className="text-gray-400 text-sm">Comprehensive guides and implementation examples</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-400" />
                  Community Support
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• GitHub issues and discussions</li>
                  <li>• Community-driven documentation</li>
                  <li>• Open source contribution guidelines</li>
                  <li>• Developer forums and Discord</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>

          {/* Enterprise SaaS Column */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Cloud className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Rivic Core SaaS</h3>
                <span className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-3 py-1 rounded-full font-semibold">
                  ENTERPRISE
                </span>
              </div>
              <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  <span className="text-yellow-400 font-semibold text-sm">FEBRUARY 2026 LAUNCH</span>
                </div>
                <p className="text-yellow-300 text-sm">
                  Join the waitlist for early access to enterprise SaaS APIs and quantum attestation services.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Production-ready quantum-safe platform with APIs, enterprise features, and dedicated support.
              </p>
            </div>

            {/* Enterprise Features */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-cyan-400" />
                  Rivic Core Neuron (Full Platform)
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">Complete Multi-Language Security Stack</span>
                      <p className="text-gray-400 text-sm">Python, C++, Go, Swift, Ruby, C implementations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">IBM Quantum Attestation</span>
                      <p className="text-gray-400 text-sm">Hardware quantum verification and key generation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">Real-time Policy Enforcement</span>
                      <p className="text-gray-400 text-sm">Kubernetes operators and container runtime hooks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-200 font-medium">Mobile Security Extensions</span>
                      <p className="text-gray-400 text-sm">iOS/macOS Swift framework for mobile applications</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  Enterprise APIs & Integration
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• RESTful APIs for all platform features</li>
                  <li>• GraphQL endpoint for complex queries</li>
                  <li>• Webhook integrations for real-time events</li>
                  <li>• SDKs for major programming languages</li>
                  <li>• SAML/SSO integration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  Enterprise Support & SLA
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 24/7 enterprise support with SLA</li>
                  <li>• Dedicated customer success manager</li>
                  <li>• Priority feature requests</li>
                  <li>• Custom compliance frameworks</li>
                  <li>• On-premise deployment options</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Join Waitlist (Feb 2026)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                >
                  View Enterprise Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Path */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">Seamless Migration Path</h3>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Start with our open source tools to explore quantum-safe cryptography, then seamlessly upgrade to Rivic Core SaaS 
            when you need enterprise features, APIs, and support. No vendor lock-in, complete compatibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg font-semibold">
              Open Source
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 sm:rotate-0" />
            <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg font-semibold">
              Enterprise SaaS
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 sm:rotate-0" />
            <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg font-semibold">
              On-Premise
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
