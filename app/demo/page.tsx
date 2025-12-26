"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Play, Square, Terminal, Shield, AlertTriangle, CheckCircle, Loader2, Download, FileJson } from "lucide-react"
import { Button } from "@/components/ui/button"

// Terminal line types
type TerminalLine = {
  type: "command" | "output" | "success" | "warning" | "error" | "info" | "json"
  content: string
  delay?: number
}

// CBOM Scanner demo script
const cbomScannerScript: TerminalLine[] = [
  { type: "info", content: "RIVIC CBOM Scanner v1.0.0 - Cryptographic Bill of Materials Generator" },
  { type: "info", content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "command", content: "$ rivic-cbom scan --target ./banking-app --format cyclonedx" },
  { type: "output", content: "" },
  { type: "info", content: "[1/5] Initializing binary analyzer..." },
  { type: "output", content: "  ├─ Loading ELF parser..." },
  { type: "output", content: "  ├─ Loading PE parser..." },
  { type: "success", content: "  └─ Binary analyzers ready ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[2/5] Scanning cryptographic libraries..." },
  { type: "output", content: "  ├─ Detected: OpenSSL 1.1.1" },
  { type: "output", content: "  ├─ Detected: libsodium 1.0.18" },
  { type: "output", content: "  ├─ Detected: BouncyCastle 1.70" },
  { type: "success", content: "  └─ Found 3 cryptographic libraries ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[3/5] Extracting cryptographic algorithms..." },
  { type: "output", content: "  ├─ RSA-2048 (key exchange) - 12 occurrences" },
  { type: "warning", content: "  │   └─ ⚠️  QUANTUM VULNERABLE - Migration required" },
  { type: "output", content: "  ├─ RSA-3072 (signatures) - 8 occurrences" },
  { type: "warning", content: "  │   └─ ⚠️  QUANTUM VULNERABLE - Migration required" },
  { type: "output", content: "  ├─ ECDSA P-256 (authentication) - 15 occurrences" },
  { type: "warning", content: "  │   └─ ⚠️  QUANTUM VULNERABLE - Migration required" },
  { type: "output", content: "  ├─ AES-256-GCM (symmetric) - 23 occurrences" },
  { type: "success", content: "  │   └─ ✓ Quantum-safe (symmetric)" },
  { type: "output", content: "  ├─ SHA-256 (hashing) - 45 occurrences" },
  { type: "success", content: "  │   └─ ✓ Quantum-safe (hash)" },
  { type: "output", content: "  ├─ SHA-384 (hashing) - 12 occurrences" },
  { type: "success", content: "  │   └─ ✓ Quantum-safe (hash)" },
  { type: "success", content: "  └─ Algorithm extraction complete ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[4/5] Analyzing X.509 certificates..." },
  { type: "output", content: "  ├─ TLS server certificate (RSA-2048, expires: 2026-03-15)" },
  { type: "warning", content: "  │   └─ ⚠️  Requires PQC migration before eIDAS 2.0 deadline" },
  { type: "output", content: "  ├─ Client auth certificate (ECDSA P-384, expires: 2025-12-01)" },
  { type: "warning", content: "  │   └─ ⚠️  Requires PQC migration" },
  { type: "output", content: "  ├─ Code signing certificate (RSA-4096, expires: 2027-06-30)" },
  { type: "output", content: "  │   └─ ℹ️  Plan migration to ML-DSA" },
  { type: "success", content: "  └─ Certificate analysis complete ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[5/5] Generating CBOM report..." },
  { type: "output", content: "  ├─ Format: CycloneDX 1.6" },
  { type: "output", content: "  ├─ Compliance: NIST SP 800-131A Rev 2" },
  { type: "output", content: "  ├─ Output: ./cbom-report.json" },
  { type: "success", content: "  └─ CBOM generation complete ✓" },
  { type: "output", content: "" },
  { type: "info", content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "info", content: "SCAN SUMMARY" },
  { type: "info", content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "error", content: "  CRITICAL RISK:    3 algorithms (RSA-2048, ECDSA P-256/384)" },
  { type: "warning", content: "  HIGH RISK:        2 algorithms (RSA-3072, RSA-4096)" },
  { type: "success", content: "  LOW RISK:         3 algorithms (AES-256, SHA-256, SHA-384)" },
  { type: "output", content: "" },
  { type: "info", content: "MIGRATION RECOMMENDATIONS:" },
  { type: "output", content: "  RSA-2048      → ML-KEM-768   (FIPS 203)" },
  { type: "output", content: "  RSA-3072      → ML-KEM-1024  (FIPS 203)" },
  { type: "output", content: "  RSA-4096      → ML-KEM-1024  (FIPS 203)" },
  { type: "output", content: "  ECDSA P-256   → ML-DSA-44    (FIPS 204)" },
  { type: "output", content: "  ECDSA P-384   → ML-DSA-65    (FIPS 204)" },
  { type: "output", content: "" },
  { type: "success", content: "CBOM report saved to ./cbom-report.json" },
  { type: "info", content: "Run 'rivic-cbom migrate --plan' to generate migration roadmap" },
]

// PQC Migration demo script
const pqcMigrationScript: TerminalLine[] = [
  { type: "info", content: "RIVIC PQC Migration Framework v1.0.0" },
  { type: "info", content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "command", content: "$ rivic-pqc migrate --mode hybrid --input cbom-report.json" },
  { type: "output", content: "" },
  { type: "info", content: "[PHASE 1] Loading CBOM inventory..." },
  { type: "output", content: "  ├─ Crypto assets: 115 total" },
  { type: "output", content: "  ├─ Vulnerable: 35 (quantum-unsafe)" },
  { type: "output", content: "  ├─ Safe: 80 (quantum-resistant)" },
  { type: "success", content: "  └─ CBOM loaded ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[PHASE 2] Initializing Q-Hook Runtime..." },
  { type: "output", content: "  ├─ Loading liboqs (IBM Open Quantum Safe)..." },
  { type: "output", content: "  ├─ ML-KEM-768 initialized" },
  { type: "output", content: "  ├─ ML-KEM-1024 initialized" },
  { type: "output", content: "  ├─ ML-DSA-44 initialized" },
  { type: "output", content: "  ├─ ML-DSA-65 initialized" },
  { type: "output", content: "  ├─ ML-DSA-87 initialized" },
  { type: "success", content: "  └─ Q-Hook Runtime ready ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[PHASE 3] Deploying hybrid cryptography..." },
  { type: "output", content: "  ├─ Mode: HYBRID (Classical + PQC parallel)" },
  { type: "output", content: "  ├─ Hooking RSA key exchange operations..." },
  { type: "success", content: "  │   └─ RSA-2048 → RSA-2048 + ML-KEM-768 ✓" },
  { type: "output", content: "  ├─ Hooking signature operations..." },
  { type: "success", content: "  │   └─ ECDSA-P256 → ECDSA-P256 + ML-DSA-44 ✓" },
  { type: "success", content: "  │   └─ RSA-3072 → RSA-3072 + ML-DSA-65 ✓" },
  { type: "output", content: "  ├─ Updating certificate chains..." },
  { type: "success", content: "  │   └─ Hybrid certificates deployed ✓" },
  { type: "success", content: "  └─ Hybrid cryptography active ✓" },
  { type: "output", content: "" },
  { type: "info", content: "[PHASE 4] Validating compliance..." },
  { type: "output", content: "  ├─ NIST FIPS 203 (ML-KEM): COMPLIANT ✓" },
  { type: "output", content: "  ├─ NIST FIPS 204 (ML-DSA): COMPLIANT ✓" },
  { type: "output", content: "  ├─ eIDAS 2.0 readiness: COMPLIANT ✓" },
  { type: "output", content: "  ├─ DORA requirements: COMPLIANT ✓" },
  { type: "success", content: "  └─ All compliance checks passed ✓" },
  { type: "output", content: "" },
  { type: "info", content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "info", content: "MIGRATION STATUS" },
  { type: "info", content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "success", content: "  ✓ Zero downtime maintained" },
  { type: "success", content: "  ✓ Zero code changes required" },
  { type: "success", content: "  ✓ Backward compatibility preserved" },
  { type: "success", content: "  ✓ Hybrid mode active (Classical + PQC)" },
  { type: "output", content: "" },
  { type: "info", content: "CRYPTOGRAPHIC COVERAGE:" },
  { type: "output", content: "  Classical only:  0%  (deprecated)" },
  { type: "output", content: "  Hybrid mode:     100% (active)" },
  { type: "output", content: "  PQC only:        0%  (future)" },
  { type: "output", content: "" },
  { type: "success", content: "Migration complete. System is now quantum-safe." },
  { type: "info", content: "Monitor status: rivic-pqc status --dashboard" },
]

// Sample CBOM JSON output
const sampleCBOM = {
  bomFormat: "CycloneDX",
  specVersion: "1.6",
  serialNumber: "urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79",
  version: 1,
  metadata: {
    timestamp: "2025-01-15T10:30:00Z",
    tools: [{ vendor: "RIVIC", name: "CBOM Scanner", version: "1.0.0" }],
    component: { "bom-ref": "banking-app-001", type: "application", name: "Banking Application", version: "3.2.1" },
  },
  components: [
    {
      "bom-ref": "crypto-rsa-001",
      type: "crypto-asset",
      name: "RSA-2048",
      properties: [
        { name: "algorithm", value: "RSA" },
        { name: "key-size", value: "2048" },
        { name: "risk-level", value: "CRITICAL" },
        { name: "migration-target", value: "ML-KEM-768" },
      ],
    },
    {
      "bom-ref": "crypto-ecdsa-001",
      type: "crypto-asset",
      name: "ECDSA-P256",
      properties: [
        { name: "algorithm", value: "ECDSA" },
        { name: "curve", value: "P-256" },
        { name: "risk-level", value: "CRITICAL" },
        { name: "migration-target", value: "ML-DSA-44" },
      ],
    },
  ],
}

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<"cbom" | "pqc">("cbom")
  const [isRunning, setIsRunning] = useState(false)
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCBOM, setShowCBOM] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const currentScript = activeDemo === "cbom" ? cbomScannerScript : pqcMigrationScript

  useEffect(() => {
    if (isRunning && currentLineIndex < currentScript.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, currentScript[currentLineIndex]])
        setCurrentLineIndex((prev) => prev + 1)
      }, 80)
      return () => clearTimeout(timer)
    } else if (currentLineIndex >= currentScript.length) {
      setIsRunning(false)
      if (activeDemo === "cbom") {
        setTimeout(() => setShowCBOM(true), 500)
      }
    }
  }, [isRunning, currentLineIndex, currentScript, activeDemo])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLines])

  const startDemo = () => {
    setTerminalLines([])
    setCurrentLineIndex(0)
    setShowCBOM(false)
    setIsRunning(true)
  }

  const stopDemo = () => {
    setIsRunning(false)
  }

  const resetDemo = () => {
    setTerminalLines([])
    setCurrentLineIndex(0)
    setShowCBOM(false)
    setIsRunning(false)
  }

  const switchDemo = (demo: "cbom" | "pqc") => {
    setActiveDemo(demo)
    resetDemo()
  }

  const getLineStyle = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return "text-cyan-400 font-semibold"
      case "success":
        return "text-green-400"
      case "warning":
        return "text-yellow-400"
      case "error":
        return "text-red-400"
      case "info":
        return "text-blue-400"
      case "json":
        return "text-purple-400"
      default:
        return "text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Interactive Demo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See Rivic in Action</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Experience our CBOM Scanner and PQC Migration Framework with this interactive CLI demonstration.
            </p>
          </div>

          {/* Demo Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => switchDemo("cbom")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeDemo === "cbom"
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              <Shield className="w-5 h-5" />
              CBOM Scanner
            </button>
            <button
              onClick={() => switchDemo("pqc")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeDemo === "pqc"
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              <Terminal className="w-5 h-5" />
              PQC Migration
            </button>
          </div>

          {/* Terminal */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-sm font-mono">
                  {activeDemo === "cbom" ? "rivic-cbom" : "rivic-pqc"} — bash
                </span>
                <div className="flex items-center gap-2">
                  {!isRunning && terminalLines.length === 0 && (
                    <Button size="sm" onClick={startDemo} className="gap-2">
                      <Play className="w-4 h-4" />
                      Run Demo
                    </Button>
                  )}
                  {isRunning && (
                    <Button size="sm" variant="outline" onClick={stopDemo} className="gap-2 bg-transparent">
                      <Square className="w-4 h-4" />
                      Stop
                    </Button>
                  )}
                  {!isRunning && terminalLines.length > 0 && (
                    <Button size="sm" variant="outline" onClick={startDemo} className="gap-2 bg-transparent">
                      <Play className="w-4 h-4" />
                      Replay
                    </Button>
                  )}
                </div>
              </div>

              {/* Terminal content */}
              <div ref={terminalRef} className="h-[500px] overflow-y-auto p-4 font-mono text-sm">
                {terminalLines.length === 0 && !isRunning && (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <Terminal className="w-16 h-16 mb-4 opacity-50" />
                    <p>
                      Click "Run Demo" to start the {activeDemo === "cbom" ? "CBOM Scanner" : "PQC Migration"}{" "}
                      demonstration
                    </p>
                  </div>
                )}
                {terminalLines.map((line, index) => (
                  <div key={index} className={`${getLineStyle(line.type)} leading-relaxed`}>
                    {line.content || "\u00A0"}
                  </div>
                ))}
                {isRunning && (
                  <div className="flex items-center gap-2 text-gray-400 mt-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </div>
                )}
              </div>
            </div>

            {/* CBOM Output Preview */}
            {showCBOM && activeDemo === "cbom" && (
              <div className="mt-8 bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <FileJson className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 font-mono text-sm">cbom-report.json</span>
                  </div>
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
                <pre className="p-4 text-sm text-purple-300 overflow-x-auto">{JSON.stringify(sampleCBOM, null, 2)}</pre>
              </div>
            )}
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Vulnerability Detection</h3>
              <p className="text-foreground/60 text-sm">
                Identifies quantum-vulnerable algorithms like RSA-2048 and ECDSA across your entire infrastructure.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CycloneDX 1.6 Output</h3>
              <p className="text-foreground/60 text-sm">
                Generates industry-standard CBOM reports compatible with CNCF tooling and compliance frameworks.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Migration Roadmap</h3>
              <p className="text-foreground/60 text-sm">
                Provides specific recommendations for each algorithm with NIST FIPS-approved replacements.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Scan Your Infrastructure?</h2>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Schedule a demo with our team to run the CBOM Scanner on your actual systems and get a comprehensive
              quantum risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Request Full Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="mailto:demo@rivic.io">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
