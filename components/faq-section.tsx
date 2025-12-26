"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Rivic Q-Runtime and how does it work?",
    answer:
      "Rivic Q-Runtime is a transparent, observable, and quantum-safe cryptographic layer for EU banking infrastructure. It uses a three-layer architecture: Build-Time Inspector (CBOM scanner), Runtime Interceptor (LD_PRELOAD injection), and Governance Plane (Kubernetes Operator). This enables compliance with eIDAS 2.0 and DORA without requiring any application code changes.",
  },
  {
    question: "What is the 'Harvest-Now-Decrypt-Later' (HNDL) threat?",
    answer:
      "HNDL is a quantum computing threat where attackers harvest encrypted data today (banking records, KYC documents, transaction history) with the intent to decrypt it once cryptographically relevant quantum computers (CRQC) arrive around 2030-2035. Since banking data must be retained for 50+ years, today's RSA-2048 encrypted data is at risk.",
  },
  {
    question: "How does Rivic achieve zero code changes?",
    answer:
      "Rivic uses LD_PRELOAD injection via a Kubernetes Mutating Webhook. Our librivic.so shared library intercepts OpenSSL/BoringSSL crypto calls at runtime and transparently upgrades them to quantum-safe algorithms (ML-KEM-1024, ML-DSA-65). Your application code remains unchanged while crypto operations are automatically upgraded.",
  },
  {
    question: "What algorithms does Rivic support?",
    answer:
      "Rivic supports NIST-approved post-quantum algorithms: ML-KEM (FIPS 203) for key encapsulation, ML-DSA (FIPS 204) for digital signatures, and SLH-DSA (FIPS 205) for stateless hash-based signatures. We also support hybrid mode (X25519 + Kyber-1024) for backward compatibility with non-PQC systems.",
  },
  {
    question: "What is CBOM and why is it important?",
    answer:
      "CBOM (Cryptographic Bill of Materials) is a standardized inventory of all cryptographic assets in your infrastructure, following CycloneDX 1.6 specification. It provides real-time visibility into algorithms, key sizes, and risk levels. Under DORA, banks must prove their cryptographic compliance to auditors - CBOM provides this audit-ready evidence.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Deployment timeline varies by organization size and complexity. We typically start with a 2-3 week evaluation phase, followed by a structured pilot program. Our team provides comprehensive support throughout the implementation process to ensure successful adoption.",
  },
  {
    question: "What is the eIDAS 2.0 deadline?",
    answer:
      "The eIDAS 2.0 wallet mandate deadline is September 2026. All EU financial services must support quantum-safe digital wallets by this date. DORA (Digital Operational Resilience Act) enforcement began January 17, 2025, requiring ICT risk management and resilience testing.",
  },
  {
    question: "How does Rivic integrate with existing infrastructure?",
    answer:
      "Rivic is Kubernetes-native and integrates with the full CNCF stack: containerd/CRI-O runtime, OPA Gatekeeper for policy enforcement, Prometheus for metrics, Grafana for visualization, and OCI Registry for CBOM artifact storage. We also integrate with IBM Cloud SSDC for security scanning.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about quantum-safe banking migration. Contact our team for technical deep-dives.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  )
}
