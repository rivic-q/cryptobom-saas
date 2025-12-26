import { Button } from "./ui/button"
import { ArrowRight, Cpu, Database, Shield, Zap, Globe, Code, Terminal, GitBranch, Layers, Network, Lock, Monitor, Brain, Rocket } from "lucide-react"

export function CoreEngineSection() {
  return (
    <section id="core-engine" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 via-gray-950 to-black/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">Rivic Core Neuron</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Complete Quantum-Safe Security Engine
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            A comprehensive multi-language security platform delivering quantum-safe cryptography, 
            real-time compliance, IBM Quantum integration, and enterprise-grade APIs.
          </p>
          
          {/* Architecture Overview */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Multi-Language Security Architecture</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">C Engine</h4>
                <p className="text-gray-400 text-xs">High-performance PQC with liboqs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Terminal className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">Go Operator</h4>
                <p className="text-gray-400 text-xs">Kubernetes native integration</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Database className="h-6 w-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">Python CBOM</h4>
                <p className="text-gray-400 text-xs">Orchestration & scanning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">Qiskit Engine</h4>
                <p className="text-gray-400 text-xs">IBM Quantum attestation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Components Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* C-based PQC Engine */}
          <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20 rounded-xl p-6 sm:p-8 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Cpu className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">C PQC Engine</h3>
                <p className="text-blue-400 text-sm">High-Performance Core</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Native C implementation with liboqs integration for maximum performance and security.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-blue-400" />
                  NIST Algorithms
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• ML-KEM (512/768/1024)</li>
                  <li>• ML-DSA (44/65/87)</li>
                  <li>• SLH-DSA SPHINCS+</li>
                  <li>• Hybrid cryptography support</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  Runtime Integration
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Container runtime hooks</li>
                  <li>• Real-time crypto monitoring</li>
                  <li>• Policy enforcement</li>
                  <li>• IBM Quantum attestation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
              <code className="text-xs text-blue-400">
                rivic_generate_keypair(ML_KEM_768, &keypair);<br/>
                rivic_kem_encap(&keypair, &result);<br/>
                rivic_request_quantum_attestation(...);
              </code>
            </div>
          </div>

          {/* Python CBOM Scanner */}
          <div className="bg-gradient-to-br from-yellow-500/5 to-amber-500/5 border border-yellow-500/20 rounded-xl p-6 sm:p-8 hover:border-yellow-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <Database className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Python CBOM Engine</h3>
                <p className="text-yellow-400 text-sm">Orchestration Layer</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Comprehensive cryptographic bill of materials scanning with risk assessment and compliance mapping.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-yellow-400" />
                  Multi-Format Scanning
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Container images (Docker/OCI)</li>
                  <li>• Kubernetes manifests</li>
                  <li>• Binary applications</li>
                  <li>• Source code repositories</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-yellow-400" />
                  Risk Assessment
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Quantum vulnerability scoring</li>
                  <li>• CycloneDX CBOM export</li>
                  <li>• Compliance framework mapping</li>
                  <li>• Automated remediation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
              <code className="text-xs text-yellow-400">
                async with CBOMScanner() as scanner:<br/>
                &nbsp;&nbsp;result = await scanner.scan_container(image)<br/>
                &nbsp;&nbsp;report = scanner.generate_compliance_report()
              </code>
            </div>
          </div>

          {/* Go Kubernetes Operator */}
          <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-xl p-6 sm:p-8 hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Go K8s Operator</h3>
                <p className="text-green-400 text-sm">Cloud Native</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kubernetes-native operator for policy enforcement and quantum-safe compliance automation.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Network className="h-4 w-4 text-green-400" />
                  Custom Resources
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• QuantumSafePolicy CRD</li>
                  <li>• CBOMScan CRD</li>
                  <li>• ComplianceReport CRD</li>
                  <li>• PolicyViolation CRD</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  Policy Enforcement
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Admission controllers</li>
                  <li>• Runtime policy validation</li>
                  <li>• Automatic CBOM scanning</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
              <code className="text-xs text-green-400">
                kubectl apply -f quantum-safe-policy.yaml<br/>
                kubectl get cbomscans -A<br/>
                kubectl describe compliance-report
              </code>
            </div>
          </div>
        </div>

        {/* Additional Components Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* C++ Binary Analyzer */}
          <div className="bg-gradient-to-br from-red-500/5 to-pink-500/5 border border-red-500/20 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
              <Cpu className="h-5 w-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">C++ Binary Analyzer</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              High-performance binary analysis with ELF/PE parsing and crypto asset discovery.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Capstone disassembly engine</li>
              <li>• OpenSSL detection</li>
              <li>• PQC algorithm recognition</li>
              <li>• Memory-efficient processing</li>
            </ul>
          </div>

          {/* Ruby Compliance */}
          <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ruby Compliance</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Automated compliance assessment for eIDAS 2.0, DORA, and NIST frameworks.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Real-time policy enforcement</li>
              <li>• Multi-framework support</li>
              <li>• Executive reporting</li>
              <li>• Automated remediation</li>
            </ul>
          </div>

          {/* Swift Mobile */}
          <div className="bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Swift Mobile</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              iOS/macOS quantum-safe framework with enhanced keychain protection.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Secure Enclave integration</li>
              <li>• SwiftUI components</li>
              <li>• Network security monitoring</li>
              <li>• Compliance dashboards</li>
            </ul>
          </div>

          {/* Qiskit Quantum */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Qiskit Attestation</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              IBM Quantum hardware integration for cryptographic attestation and verification.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Quantum circuit generation</li>
              <li>• Hardware job submission</li>
              <li>• Quantum entropy sources</li>
              <li>• Signature verification</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/10 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Enterprise-Ready Architecture</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Built for mission-critical deployments with enterprise scalability, security, and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Scalable Architecture</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Microservices-based design with horizontal scaling, load balancing, and multi-region deployment support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Zero-Trust Security</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                End-to-end encryption, mutual TLS, role-based access control, and quantum-safe communication channels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Real-Time Analytics</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Comprehensive monitoring, alerting, and analytics with custom dashboards and compliance reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Complete Integration Ecosystem
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            The Rivic Core Engine integrates seamlessly with your existing infrastructure, 
            providing quantum-safe security without disrupting your workflow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Container Runtimes</h4>
              <p className="text-gray-400 text-sm">Docker, containerd, CRI-O</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Orchestrators</h4>
              <p className="text-gray-400 text-sm">Kubernetes, OpenShift, Rancher</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">CI/CD Platforms</h4>
              <p className="text-gray-400 text-sm">Jenkins, GitLab, GitHub Actions</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Cloud Platforms</h4>
              <p className="text-gray-400 text-sm">AWS, Azure, GCP, IBM Cloud</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
            >
              Deploy Core Engine
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
            >
              Technical Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
