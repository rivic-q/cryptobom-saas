import { Button } from "./ui/button"
import { ArrowRight, Database, Cpu, Globe, Shield, Zap, GitBranch, Code, Terminal, Lock, Monitor, Network, Layers } from "lucide-react"

export function TechnicalArchitectureSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-gray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Rivic Core Neuron Architecture
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive view of how our multi-language security components work together 
            to deliver quantum-safe protection across your entire infrastructure.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-3xl p-8 lg:p-12 mb-16">
          
          {/* Top Layer - User Interfaces */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">User Interfaces & APIs</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                <Globe className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-white font-medium text-sm">Web Dashboard</span>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                <Terminal className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <span className="text-white font-medium text-sm">REST APIs</span>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                <Code className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <span className="text-white font-medium text-sm">GraphQL</span>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                <Monitor className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <span className="text-white font-medium text-sm">CLI Tools</span>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-white/5"></div>
          </div>

          {/* Middle Layer - Core Processing */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Core Processing Layer</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Python Orchestration */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h4 className="text-white font-bold">Python Orchestrator</h4>
                    <p className="text-yellow-400 text-sm">CBOM & Risk Engine</p>
                  </div>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Async CBOM scanning</li>
                  <li>• Risk assessment algorithms</li>
                  <li>• Compliance framework mapping</li>
                  <li>• CycloneDX export</li>
                </ul>
              </div>

              {/* C Performance Core */}
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="h-8 w-8 text-blue-400" />
                  <div>
                    <h4 className="text-white font-bold">C PQC Engine</h4>
                    <p className="text-blue-400 text-sm">High-Performance Core</p>
                  </div>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• liboqs integration</li>
                  <li>• ML-KEM/ML-DSA/SLH-DSA</li>
                  <li>• Container runtime hooks</li>
                  <li>• Hybrid cryptography</li>
                </ul>
              </div>

              {/* Go Kubernetes */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="h-8 w-8 text-green-400" />
                  <div>
                    <h4 className="text-white font-bold">Go K8s Operator</h4>
                    <p className="text-green-400 text-sm">Cloud Native Controller</p>
                  </div>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Custom Resource Definitions</li>
                  <li>• Admission controllers</li>
                  <li>• Policy enforcement</li>
                  <li>• Lifecycle management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-white/5"></div>
          </div>

          {/* Supporting Services */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Supporting Services</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                <Layers className="h-6 w-6 text-red-400 mx-auto mb-2" />
                <h5 className="text-white font-medium text-sm mb-1">C++ Analyzer</h5>
                <p className="text-gray-400 text-xs">Binary Analysis</p>
              </div>
              
              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4 text-center">
                <Shield className="h-6 w-6 text-pink-400 mx-auto mb-2" />
                <h5 className="text-white font-medium text-sm mb-1">Ruby Compliance</h5>
                <p className="text-gray-400 text-xs">Policy Engine</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                <Globe className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <h5 className="text-white font-medium text-sm mb-1">Swift Mobile</h5>
                <p className="text-gray-400 text-xs">iOS/macOS SDK</p>
              </div>
              
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                <Zap className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <h5 className="text-white font-medium text-sm mb-1">Qiskit Quantum</h5>
                <p className="text-gray-400 text-xs">IBM Integration</p>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-white/5"></div>
          </div>

          {/* Infrastructure Layer */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Infrastructure & Runtime</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-6 text-center">
                <Network className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Container Runtimes</h4>
                <p className="text-gray-400 text-sm">Docker, containerd, CRI-O</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-6 text-center">
                <Cpu className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Kubernetes Clusters</h4>
                <p className="text-gray-400 text-sm">Any CNCF distribution</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-6 text-center">
                <Lock className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Cloud Platforms</h4>
                <p className="text-gray-400 text-sm">AWS, Azure, GCP, IBM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Explanation */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Security Pipeline */}
          <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-400" />
              Security Processing Pipeline
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Container Deployment</h4>
                  <p className="text-gray-300 text-sm">Go operator intercepts deployment via admission webhook</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">CBOM Scanning</h4>
                  <p className="text-gray-300 text-sm">Python engine scans for cryptographic assets and vulnerabilities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Policy Evaluation</h4>
                  <p className="text-gray-300 text-sm">Ruby compliance engine validates against quantum-safe policies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Runtime Enforcement</h4>
                  <p className="text-gray-300 text-sm">C engine provides runtime hooks for quantum-safe operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Integration */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-cyan-400" />
              Quantum Attestation Flow
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Key Generation Request</h4>
                  <p className="text-gray-300 text-sm">Application requests quantum-safe key generation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Quantum Circuit</h4>
                  <p className="text-gray-300 text-sm">Qiskit engine generates quantum circuit for attestation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">IBM Quantum Hardware</h4>
                  <p className="text-gray-300 text-sm">Circuit executed on real quantum hardware for attestation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Verified Keys</h4>
                  <p className="text-gray-300 text-sm">Quantum-verified keys delivered with attestation proof</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/10 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Enterprise Performance Metrics
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Built for high-throughput enterprise environments with industry-leading performance benchmarks.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-white font-semibold mb-1">Keys/Second</div>
              <div className="text-gray-400 text-sm">ML-KEM Generation</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-white font-semibold mb-1">Scans/Day</div>
              <div className="text-gray-400 text-sm">CBOM Analysis</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-white font-semibold mb-1">Uptime SLA</div>
              <div className="text-gray-400 text-sm">Enterprise Grade</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">&lt;50ms</div>
              <div className="text-white font-semibold mb-1">API Latency</div>
              <div className="text-gray-400 text-sm">P99 Response Time</div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
          >
            View Technical Specifications
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
