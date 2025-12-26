"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, Zap, Lock, Server, FileCode } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Problem Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              The Problem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Harvest Now, Decrypt Later (HNDL)</h3>
              <p className="text-white/70">
                Adversaries are harvesting encrypted financial data today, waiting for quantum computers to decrypt it.
                Your 2024 transactions could be exposed by 2030.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Regulatory Deadline: Sept 2026</h3>
              <p className="text-white/70">
                eIDAS 2.0 mandates quantum-safe cryptography for EU financial services. Non-compliance means €20M+ fines
                and loss of banking license.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Manual Migration is Impossible</h3>
              <p className="text-white/70">
                Average bank has 500+ crypto touchpoints. Manual audit takes 18+ months. Most banks don't even know
                where their cryptography lives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Zero-Code Migration</h3>
              </div>
              <p className="text-white/70">
                Rivic's transparent proxy architecture upgrades RSA/ECDSA to ML-KEM/ML-DSA without touching your source
                code. Deploy in hours, not years.
              </p>
            </div>
            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">NIST FIPS Compliant</h3>
              </div>
              <p className="text-white/70">
                Built on NIST-standardized algorithms (FIPS 203, 204, 205). Hybrid mode ensures backward compatibility
                while providing quantum resistance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product Section - CBOM with CNCF & IBM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Server className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              The Product
            </h2>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* CBOM Scanner */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FileCode className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">CBOM Scanner</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Cryptographic Bill of Materials generator with full CNCF stack integration.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    CycloneDX 1.6 compliant output
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Kubernetes-native deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Prometheus/Grafana dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    OPA policy enforcement
                  </li>
                </ul>
              </div>

              {/* IBM & CNCF Integration */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">PQC Migration Framework</h3>
                </div>
                <p className="text-white/70 mb-4">Quantum-safe migration with IBM attestation support.</p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    IBM Quantum attestation integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    CNCF-certified components
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    ML-KEM/ML-DSA algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Hybrid X25519+Kyber-1024 mode
                  </li>
                </ul>
              </div>
            </div>

            {/* Partner logos */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4 text-center">Technology Partners & Certifications</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <span className="text-white/60 font-semibold">IBM Quantum</span>
                <span className="text-white/60 font-semibold">CNCF</span>
                <span className="text-white/60 font-semibold">NIST</span>
                <span className="text-white/60 font-semibold">CycloneDX</span>
                <span className="text-white/60 font-semibold">eIDAS 2.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
