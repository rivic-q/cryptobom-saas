"use client"

import { motion } from "framer-motion"
import { Scan, Cpu, Shield, Database, Lock, FileCode, ArrowRight, CheckCircle2 } from "lucide-react"

const layers = [
  {
    id: "layer-1",
    title: "Layer 1: CBOM Discovery Engine",
    subtitle: "Build-Time Cryptographic Asset Inventory",
    icon: Scan,
    color: "emerald",
    description: "Comprehensive cryptographic inventory generation following QSSP specifications",
    features: [
      "Source code AST analysis for crypto calls",
      "Binary inspection with symbol table parsing",
      "Container image layer scanning",
      "CycloneDX 1.6 CBOM output format",
      "Git integration for change tracking",
    ],
    integrations: ["CNCF", "CycloneDX", "Sigstore"],
    metrics: { "Scan Speed": "< 30s", Languages: "12+", Accuracy: "99.2%" },
  },
  {
    id: "layer-2",
    title: "Layer 2: QSSP Runtime",
    subtitle: "Quantum-Safe Protocol Enforcement",
    icon: Cpu,
    color: "cyan",
    description: "Runtime protocol enforcement implementing QSSP framework for transparent PQC upgrade",
    features: [
      "LD_PRELOAD injection for OpenSSL/BoringSSL",
      "Transparent RSA → ML-KEM upgrade",
      "ECDSA → ML-DSA signature migration",
      "Hybrid mode: X25519 + Kyber-1024",
      "Zero application code changes",
    ],
    integrations: ["IBM Quantum", "NIST FIPS", "OpenSSL"],
    metrics: { Latency: "+2ms", Uptime: "99.95%", Throughput: "10K TPS" },
  },
  {
    id: "layer-3",
    title: "Layer 3: QMCF Governance Plane",
    subtitle: "Enterprise Policy & Compliance Engine",
    icon: Shield,
    color: "purple",
    description: "QMCF-compliant enterprise governance for QSSP deployment and regulatory compliance",
    features: [
      "Kubernetes Operator for PQC policies",
      "Prometheus metrics & Grafana dashboards",
      "OPA Gatekeeper policy enforcement",
      "Audit logging with chain-of-custody",
      "SIEM integration (Splunk, ELK)",
    ],
    integrations: ["Kubernetes", "Prometheus", "OPA"],
    metrics: { Policies: "50+", Alerts: "Real-time", Compliance: "100%" },
  },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium">CNCF + IBM Quantum Certified</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Three-Layer Architecture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quantum-safe migration with full CNCF stack integration and IBM attestation support
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/50 to-purple-500/50" />

          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              className={`relative mb-12 ${index % 2 === 0 ? "lg:pr-[52%]" : "lg:pl-[52%]"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div
                className={`hidden lg:flex absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-${layer.color}-500/20 border-2 border-${layer.color}-500 items-center justify-center z-10`}
              >
                <layer.icon className={`w-6 h-6 text-${layer.color}-400`} />
              </div>

              <div
                className={`bg-gradient-to-br from-${layer.color}-500/5 to-${layer.color}-500/10 border border-${layer.color}-500/20 rounded-2xl p-8 hover:border-${layer.color}-500/40 transition-all`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`lg:hidden w-12 h-12 rounded-xl bg-${layer.color}-500/20 flex items-center justify-center flex-shrink-0`}
                  >
                    <layer.icon className={`w-6 h-6 text-${layer.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{layer.title}</h3>
                    <p className={`text-${layer.color}-400 font-medium`}>{layer.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/70 mb-6">{layer.description}</p>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                      <FileCode className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {layer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                          <CheckCircle2 className={`w-4 h-4 text-${layer.color}-400 flex-shrink-0 mt-0.5`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(layer.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                          <div className={`text-lg font-bold text-${layer.color}-400`}>{value}</div>
                          <div className="text-xs text-white/50">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Integrations */}
                <div className="flex flex-wrap gap-2">
                  {layer.integrations.map((integration) => (
                    <span
                      key={integration}
                      className={`px-3 py-1 bg-${layer.color}-500/10 border border-${layer.color}-500/20 rounded-full text-xs text-${layer.color}-400 font-medium`}
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IBM Attestation Banner */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">IBM Quantum Attestation</h3>
                <p className="text-white/60">Cryptographic proof of PQC migration compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-6 py-3 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400">ML-KEM</div>
                <div className="text-xs text-white/50">Key Encapsulation</div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/30" />
              <div className="text-center px-6 py-3 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">ML-DSA</div>
                <div className="text-xs text-white/50">Digital Signatures</div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/30" />
              <div className="text-center px-6 py-3 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">SLH-DSA</div>
                <div className="text-xs text-white/50">Stateless Hash</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
