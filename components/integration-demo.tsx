"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play,
  Pause, 
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Shield,
  Container,
  Cloud,
  Cpu,
  Terminal,
  Download,
  Copy,
  ExternalLink
} from "lucide-react"

const demoSteps = [
  {
    id: 1,
    title: "Deploy CBOM Scanner",
    description: "Install CryptoBOM scanner via Helm chart",
    command: "helm install cryptobom-scanner cryptobom/scanner --namespace cbom-system --create-namespace",
    duration: 3000,
    status: "pending"
  },
  {
    id: 2,
    title: "Scan Container Images",
    description: "Discover cryptographic assets in running containers",
    command: "kubectl apply -f https://cryptobom.io/examples/scan-policy.yaml",
    duration: 5000,
    status: "pending"
  },
  {
    id: 3,
    title: "Generate CBOM Reports",
    description: "Create comprehensive cryptographic bill of materials",
    command: "cryptobom generate --namespace production --format cyclonedx",
    duration: 4000,
    status: "pending"
  },
  {
    id: 4,
    title: "IBM Quantum Attestation",
    description: "Validate cryptographic implementations with quantum verification",
    command: "cryptobom attest --provider ibm-quantum --algorithms ml-kem,ml-dsa",
    duration: 6000,
    status: "pending"
  },
  {
    id: 5,
    title: "Compliance Verification",
    description: "Check BSI, NIST, and DORA compliance status",
    command: "cryptobom compliance --frameworks bsi,nist,dora --report",
    duration: 3000,
    status: "pending"
  }
]

const scanResults = {
  containers: 12,
  algorithms: 47,
  vulnerabilities: 3,
  compliance: 94,
  quantumSafe: 87
}

const kubectlOutput = `
NAME                              READY   STATUS    RESTARTS   AGE
cryptobom-scanner-7b8c9d4f5-2x9h   1/1     Running   0          45s
cryptobom-collector-5f6g8h9j2-k3l   1/1     Running   0          45s
cbom-dashboard-8h5k2m7n9-p4q       1/1     Running   0          45s

CBOM Scanner Status: ✅ Active
Quantum Attestation: ✅ Connected to IBM Cloud
Compliance Monitoring: ✅ Real-time updates enabled
`

export function IntegrationDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState("")

  const runDemo = async () => {
    setIsRunning(true)
    setShowResults(false)
    setCompletedSteps([])
    setTerminalOutput("")
    
    for (let i = 0; i < demoSteps.length; i++) {
      setCurrentStep(i)
      setTerminalOutput(prev => prev + `\n$ ${demoSteps[i].command}\n`)
      
      // Simulate command execution
      await new Promise(resolve => setTimeout(resolve, demoSteps[i].duration))
      
      setCompletedSteps(prev => [...prev, i])
      setTerminalOutput(prev => prev + `✅ ${demoSteps[i].title} completed\n`)
    }
    
    setTerminalOutput(prev => prev + kubectlOutput)
    setShowResults(true)
    setIsRunning(false)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setIsRunning(false)
    setCompletedSteps([])
    setShowResults(false)
    setTerminalOutput("")
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Live Integration Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See CryptoBOM SaaS in action with real Kubernetes deployment, 
            container scanning, and IBM Quantum attestation.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={runDemo}
              disabled={isRunning}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isRunning ? "Running Demo..." : "Start Live Demo"}
            </button>
            
            <button
              onClick={resetDemo}
              className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Demo Steps */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps Panel */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Integration Steps</h2>
              
              {demoSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-4 rounded-lg border transition-all ${
                    currentStep === index && isRunning
                      ? "bg-blue-500/20 border-blue-500/50"
                      : completedSteps.includes(index)
                      ? "bg-green-500/20 border-green-500/50"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      completedSteps.includes(index)
                        ? "bg-green-500"
                        : currentStep === index && isRunning
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}>
                      {completedSteps.includes(index) ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-white font-bold text-sm">{step.id}</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                      <code className="text-xs bg-black/30 text-cyan-400 px-2 py-1 rounded font-mono">
                        {step.command}
                      </code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Panel */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-black border border-gray-600 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">cryptobom-demo</span>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4 h-96 overflow-y-auto font-mono text-sm">
                  <div className="text-green-400 mb-2">
                    CryptoBOM Integration Demo Terminal
                  </div>
                  <div className="text-gray-400 mb-4">
                    Run the demo to see real-time Kubernetes integration
                  </div>
                  
                  <pre className="text-gray-200 whitespace-pre-wrap">
                    {terminalOutput}
                  </pre>
                  
                  {isRunning && (
                    <div className="flex items-center gap-2 text-blue-400 mt-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Executing step {currentStep + 1}...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <AnimatePresence>
        {showResults && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="px-4"
          >
            <div className="max-w-6xl mx-auto">
              <div className="p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  ✅ Integration Complete - Live Results Dashboard
                </h2>
                
                <div className="grid md:grid-cols-5 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Container className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{scanResults.containers}</div>
                    <div className="text-gray-300 text-sm">Containers Scanned</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{scanResults.algorithms}</div>
                    <div className="text-gray-300 text-sm">Crypto Algorithms</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{scanResults.vulnerabilities}</div>
                    <div className="text-gray-300 text-sm">Vulnerabilities</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{scanResults.compliance}%</div>
                    <div className="text-gray-300 text-sm">Compliance Score</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Cpu className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{scanResults.quantumSafe}%</div>
                    <div className="text-gray-300 text-sm">Quantum Safe</div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
                    <Download className="w-4 h-4" />
                    Download CBOM Report
                  </button>
                  
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                    <ExternalLink className="w-4 h-4" />
                    View Full Dashboard
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Integration Code Examples */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Easy Integration Examples
            </h2>
            <p className="text-gray-300">
              Get started with these simple integration examples for your cloud-native stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Helm Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Helm Deployment</h3>
              <div className="bg-black rounded-lg p-4">
                <code className="text-sm text-gray-300">
{`# Add CryptoBOM Helm repository
helm repo add cryptobom https://charts.cryptobom.io
helm repo update

# Install with IBM Quantum integration
helm install cryptobom-scanner cryptobom/scanner \\
  --set quantum.provider=ibm \\
  --set quantum.apiKey=$IBM_QUANTUM_TOKEN \\
  --set compliance.frameworks="bsi,nist,dora" \\
  --namespace cbom-system \\
  --create-namespace`}
                </code>
              </div>
            </motion.div>

            {/* Kubernetes Manifest */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Kubernetes CRD</h3>
              <div className="bg-black rounded-lg p-4">
                <code className="text-sm text-gray-300">
{`apiVersion: cbom.io/v1
kind: ScanPolicy
metadata:
  name: production-scan
spec:
  namespaces: ["production", "staging"]
  schedule: "0 2 * * *"
  quantum:
    attestation: true
    provider: "ibm-quantum"
  compliance:
    frameworks: ["bsi", "nist", "dora"]
    alerts: true`}
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Integrate CryptoBOM?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with our free tier and deploy quantum-safe CBOM scanning 
              in your Kubernetes clusters in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Integration
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
