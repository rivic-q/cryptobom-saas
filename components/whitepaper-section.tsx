"use client"

import { motion } from "framer-motion"
import { Download, FileText, Shield, Cpu, Lock, Database, ArrowRight, ExternalLink } from "lucide-react"

const whitepaperTopics = [
  {
    title: "QSSP Framework Architecture",
    description: "Quantum-Safe Security Protocol implementation for financial institutions",
    icon: Shield,
    sections: ["Multi-layer Security", "Protocol Design", "Implementation Guidelines"]
  },
  {
    title: "Post-Quantum Cryptography",
    description: "NIST-approved algorithms: ML-KEM, ML-DSA, and SLH-DSA integration",
    icon: Lock,
    sections: ["Algorithm Analysis", "Migration Strategies", "Performance Benchmarks"]
  },
  {
    title: "Enterprise Integration",
    description: "Zero-code deployment strategy for existing banking infrastructure",
    icon: Database,
    sections: ["API Integration", "Legacy System Support", "Compliance Automation"]
  },
  {
    title: "Quantum Computing Impact",
    description: "Technical analysis of quantum threat timeline and mitigation strategies",
    icon: Cpu,
    sections: ["Threat Assessment", "Timeline Analysis", "Risk Mitigation"]
  }
]

const technicalSpecs = [
  {
    category: "Cryptographic Algorithms",
    specs: [
      "ML-KEM (FIPS 203) - Key Encapsulation",
      "ML-DSA (FIPS 204) - Digital Signatures", 
      "SLH-DSA (FIPS 205) - Hash-based Signatures",
      "Hybrid RSA+PQC Mode for transition"
    ]
  },
  {
    category: "Performance Metrics",
    specs: [
      "Sub-millisecond cryptographic operations",
      "99.9% uptime SLA guarantee",
      "Linear scaling to 10M+ transactions/day",
      "< 5% performance overhead"
    ]
  },
  {
    category: "Compliance Standards",
    specs: [
      "BSI TR-02102 cryptographic guidelines",
      "eIDAS 2.0 quantum-safe requirements",
      "DORA operational resilience",
      "CRA Cyber Resilience Act"
    ]
  },
  {
    category: "Integration Capabilities",
    specs: [
      "REST/GraphQL APIs",
      "Kubernetes-native operators",
      "eBPF runtime instrumentation",
      "CBOM automated generation"
    ]
  }
]

export function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Technical Documentation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Mesh Cryptographic Foundation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive technical documentation of the QSSP (Quantum-Safe Security Protocol) framework, 
            post-quantum cryptography implementation strategies, and enterprise migration guidelines for 
            EU financial institutions seeking quantum resistance.
          </p>
          
          {/* Download CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/V1_Rivic-QSSP-WhitePaper.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download QSSP Whitepaper v1.0
            </motion.a>
            <motion.a
              href="/V0_Rivic-Open-Source-Enterprise-Strategy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Open Source Strategy v0
            </motion.a>
          </div>
        </motion.div>

        {/* Technical Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whitepaperTopics.map((topic, index) => {
            const IconComponent = topic.icon
            return (
              <motion.div
                key={topic.title}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{topic.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{topic.description}</p>
                <div className="space-y-2">
                  {topic.sections.map((section, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-400 text-xs">{section}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Technical Specifications */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((category, index) => (
              <div key={category.category} className="space-y-4">
                <h4 className="font-bold text-cyan-400 text-sm uppercase tracking-wider">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research & Development */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Developed in Partnership</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-bold text-blue-400">IBM</span>
                </div>
                <span className="text-gray-400 text-sm">Quantum Network</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-bold text-green-400">NIST</span>
                </div>
                <span className="text-gray-400 text-sm">Standards</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-bold text-red-400">BSI</span>
                </div>
                <span className="text-gray-400 text-sm">Germany</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-bold text-purple-400">CNCF</span>
                </div>
                <span className="text-gray-400 text-sm">Cloud Native</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our research is based on extensive collaboration with leading institutions in quantum computing, 
              cryptography, and financial regulation. The QMCF framework represents the synthesis of 
              academic research and practical enterprise requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
