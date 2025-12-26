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
                Current RSA-2048 and ECDSA-P256 will be broken by Shor's algorithm by 2030-2035.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">QSSP Migration Urgency</h3>
              <p className="text-white/70">
                eIDAS 2.0 mandates quantum-safe cryptography by September 2026. Financial institutions must implement
                QSSP-compliant algorithms or face €20M+ fines and banking license suspension.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure Complexity</h3>
              <p className="text-white/70">
                Legacy banking systems use cryptography at hundreds of integration points. Traditional migration 
                requires 18+ months of code rewrites across applications, databases, and APIs.
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
              QSSP Framework Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Zero-Code Migration</h3>
              </div>
              <p className="text-white/70">
                QSSP Framework uses transparent cryptographic interception via Q-Hook runtime. RSA/ECDSA operations
                are automatically upgraded to ML-KEM/ML-DSA without application code changes.
              </p>
            </div>
            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">QSSP Protocol Standard</h3>
              </div>
              <p className="text-white/70">
                Implements NIST-approved post-quantum algorithms (FIPS 203/204/205) within the QSSP framework.
                Multi-layer security architecture ensures compliance with eIDAS 2.0 and DORA regulations.
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
