"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, CheckCircle2, AlertTriangle, Lock, Key, FileCheck, Activity, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const algorithms = [
  {
    name: "ML-KEM-768",
    standard: "FIPS 203",
    status: "verified",
    type: "Key Encapsulation",
    security: "128-bit",
    useCase: "TLS Key Exchange",
  },
  {
    name: "ML-KEM-1024",
    standard: "FIPS 203",
    status: "verified",
    type: "Key Encapsulation",
    security: "192-bit",
    useCase: "High-Security KEM",
  },
  {
    name: "ML-DSA-65",
    standard: "FIPS 204",
    status: "verified",
    type: "Digital Signature",
    security: "128-bit",
    useCase: "Document Signing",
  },
  {
    name: "ML-DSA-87",
    standard: "FIPS 204",
    status: "pending",
    type: "Digital Signature",
    security: "192-bit",
    useCase: "Code Signing",
  },
  {
    name: "SLH-DSA-128s",
    standard: "FIPS 205",
    status: "verified",
    type: "Stateless Hash Signature",
    security: "128-bit",
    useCase: "Firmware Signing",
  },
  {
    name: "X25519+Kyber",
    standard: "Hybrid",
    status: "verified",
    type: "Hybrid Key Exchange",
    security: "256-bit",
    useCase: "Backward Compatible",
  },
]

const identityChecks = [
  { name: "eIDAS 2.0 Wallet Integration", status: "passed", description: "EU Digital Identity Wallet support" },
  { name: "QWAC Certificate Validation", status: "passed", description: "Qualified Website Authentication" },
  { name: "QSealC Signature Verification", status: "passed", description: "Qualified Electronic Seal" },
  { name: "PSD2 Strong Auth", status: "passed", description: "Payment Services Directive compliance" },
  { name: "AML/KYC Identity Chain", status: "pending", description: "Anti-Money Laundering verification" },
  { name: "GDPR Data Residency", status: "passed", description: "EU data sovereignty compliance" },
]

const complianceFrameworks = [
  { name: "NIST FIPS 140-3", progress: 100, status: "certified" },
  { name: "eIDAS 2.0", progress: 95, status: "in-progress" },
  { name: "DORA", progress: 88, status: "in-progress" },
  { name: "ISO 27001", progress: 100, status: "certified" },
  { name: "SOC 2 Type II", progress: 100, status: "certified" },
  { name: "PCI DSS 4.0", progress: 75, status: "in-progress" },
]

export function ComplianceDashboard() {
  const [activeTab, setActiveTab] = useState<"algorithms" | "identity" | "frameworks">("algorithms")

  return (
    <section id="compliance" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Real-Time Compliance Monitoring</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Compliance Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Verify algorithms, validate identities, and track compliance across all regulatory frameworks
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: "algorithms", label: "Algorithm Verification", icon: Key },
            { id: "identity", label: "Identity Framework", icon: FileCheck },
            { id: "frameworks", label: "Compliance Status", icon: Activity },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={`gap-2 ${activeTab === tab.id ? "bg-cyan-500 text-black" : "text-white/70 hover:text-white"}`}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Algorithm Verification Tab */}
        {activeTab === "algorithms" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {algorithms.map((algo, index) => (
                <motion.div
                  key={algo.name}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          algo.status === "verified" ? "bg-emerald-500/20" : "bg-amber-500/20"
                        }`}
                      >
                        <Lock
                          className={`w-5 h-5 ${algo.status === "verified" ? "text-emerald-400" : "text-amber-400"}`}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{algo.name}</h4>
                        <p className="text-xs text-white/50">{algo.standard}</p>
                      </div>
                    </div>
                    {algo.status === "verified" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <RefreshCw className="w-5 h-5 text-amber-400 animate-spin" />
                    )}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Type</span>
                      <span className="text-white/80">{algo.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Security</span>
                      <span className="text-cyan-400">{algo.security}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Use Case</span>
                      <span className="text-white/80">{algo.useCase}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Identity Framework Tab */}
        {activeTab === "identity" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid md:grid-cols-2 gap-4">
              {identityChecks.map((check, index) => (
                <motion.div
                  key={check.name}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      check.status === "passed" ? "bg-emerald-500/20" : "bg-amber-500/20"
                    }`}
                  >
                    {check.status === "passed" ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 text-amber-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{check.name}</h4>
                    <p className="text-sm text-white/50">{check.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      check.status === "passed"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {check.status === "passed" ? "Passed" : "Pending"}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Compliance Frameworks Tab */}
        {activeTab === "frameworks" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {framework.status === "certified" ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <RefreshCw className="w-5 h-5 text-cyan-400" />
                      )}
                      <h4 className="text-lg font-semibold text-white">{framework.name}</h4>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        framework.status === "certified"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-cyan-500/20 text-cyan-400"
                      }`}
                    >
                      {framework.status === "certified" ? "Certified" : "In Progress"}
                    </span>
                  </div>
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute inset-y-0 left-0 ${
                        framework.status === "certified" ? "bg-emerald-500" : "bg-cyan-500"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${framework.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-white/50">Progress</span>
                    <span className="text-white/80">{framework.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
