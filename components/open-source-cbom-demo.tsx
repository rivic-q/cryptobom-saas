"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Shield, 
  Search,
  FileText,
  CheckCircle,
  AlertTriangle,
  Download,
  Upload,
  Cpu,
  Lock
} from "lucide-react"
import { Button } from "./ui/button"

interface CBOMResult {
  algorithms: string[]
  vulnerabilities: string[]
  compliance: {
    eidas: boolean
    dora: boolean
    nist: boolean
  }
  confidence: number
}

export function OpenSourceCBOMDemo() {
  const [scanning, setScanning] = useState(false)
  const [results, setResults] = useState<CBOMResult | null>(null)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const mockScan = () => {
    setScanning(true)
    setResults(null)
    
    // Simulate scanning process
    setTimeout(() => {
      setResults({
        algorithms: [
          "RSA-2048 (Legacy)",
          "ECDSA-P256 (Vulnerable)", 
          "AES-256-GCM (Secure)",
          "SHA-256 (Secure)"
        ],
        vulnerabilities: [
          "RSA-2048: Quantum vulnerable by 2030",
          "ECDSA-P256: Not quantum-safe"
        ],
        compliance: {
          eidas: false,
          dora: true,
          nist: true
        },
        confidence: 94
      })
      setScanning(false)
    }, 3000)
  }

  const demoFiles = [
    "banking-api.jar",
    "payment-service.war", 
    "crypto-lib.so",
    "mobile-app.apk"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">🔍 Open Source CBOM Scanner</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover cryptographic assets and assess quantum-safe readiness in your applications. 
          Free, open source, and built for the EU banking community.
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 text-sm">MIT Licensed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
            <Cpu className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm">Open Source</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
            <Lock className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm">EU Compliant</span>
          </div>
        </div>
      </motion.div>

      {/* Demo Interface */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Scanner Interface */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Search className="h-6 w-6 text-cyan-400" />
              CBOM Scanner
            </h2>
            
            {/* File Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Demo Application
              </label>
              <div className="grid grid-cols-2 gap-3">
                {demoFiles.map((file) => (
                  <button
                    key={file}
                    onClick={() => setSelectedFile(file)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedFile === file
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                        : "border-white/20 bg-white/5 text-gray-300 hover:border-cyan-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm font-medium">{file}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center mb-6">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-2">Drop your application files here</p>
              <p className="text-sm text-gray-400">
                Supports: .jar, .war, .apk, .ipa, .exe, .dll, .so
              </p>
              <Button variant="outline" className="mt-4" disabled>
                Browse Files (Demo Mode)
              </Button>
            </div>

            {/* Scan Button */}
            <Button
              onClick={mockScan}
              disabled={scanning || !selectedFile}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold py-3"
            >
              {scanning ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                  Scanning {selectedFile}...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Start CBOM Scan
                </div>
              )}
            </Button>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-green-400" />
              Scan Results
            </h2>

            {!results && !scanning && (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Select a file and run a scan to see results</p>
              </div>
            )}

            {scanning && (
              <div className="text-center py-12">
                <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-cyan-400 font-medium">Analyzing cryptographic assets...</p>
                <p className="text-sm text-gray-400 mt-2">This may take a few moments</p>
              </div>
            )}

            {results && (
              <div className="space-y-6">
                {/* Confidence Score */}
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Scan Confidence</span>
                    <span className="text-2xl font-bold text-green-400">{results.confidence}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500"
                      style={{ width: `${results.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Algorithms Found */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-blue-400" />
                    Cryptographic Algorithms
                  </h3>
                  <div className="space-y-2">
                    {results.algorithms.map((algo, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${
                          algo.includes("Legacy") || algo.includes("Vulnerable")
                            ? "border-red-500/30 bg-red-500/10"
                            : "border-green-500/30 bg-green-500/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{algo}</span>
                          {algo.includes("Legacy") || algo.includes("Vulnerable") ? (
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Status */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-purple-400" />
                    Compliance Status
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className={`p-3 rounded-lg text-center ${
                      results.compliance.eidas ? "bg-green-500/20 border border-green-500/30" : "bg-red-500/20 border border-red-500/30"
                    }`}>
                      <div className="text-sm font-medium">eIDAS 2.0</div>
                      <div className={`text-xs mt-1 ${results.compliance.eidas ? "text-green-400" : "text-red-400"}`}>
                        {results.compliance.eidas ? "Compliant" : "Non-compliant"}
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${
                      results.compliance.dora ? "bg-green-500/20 border border-green-500/30" : "bg-red-500/20 border border-red-500/30"
                    }`}>
                      <div className="text-sm font-medium">DORA</div>
                      <div className={`text-xs mt-1 ${results.compliance.dora ? "text-green-400" : "text-red-400"}`}>
                        {results.compliance.dora ? "Compliant" : "Non-compliant"}
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${
                      results.compliance.nist ? "bg-green-500/20 border border-green-500/30" : "bg-red-500/20 border border-red-500/30"
                    }`}>
                      <div className="text-sm font-medium">NIST PQC</div>
                      <div className={`text-xs mt-1 ${results.compliance.nist ? "text-green-400" : "text-red-400"}`}>
                        {results.compliance.nist ? "Compliant" : "Non-compliant"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="flex-1" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download CBOM
                  </Button>
                  <Button className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Getting Started */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">🚀 Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This is a demo of our open source CBOM scanner. The actual tool provides command-line interface, 
            CI/CD integration, and comprehensive cryptographic asset discovery for your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
              Download Scanner
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
            <Button size="lg" variant="outline">
              GitHub Repository
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
