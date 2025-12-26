"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Award, Lock, FileCheck, Users } from "lucide-react"

const certifications = [
  {
    name: "SOC 2 Type II",
    icon: Shield,
    status: "Certified",
    description: "Security, availability, and confidentiality controls",
    validUntil: "2026-03-15",
    color: "emerald"
  },
  {
    name: "ISO 27001",
    icon: Lock,
    status: "Compliant", 
    description: "Information security management systems",
    validUntil: "2026-01-30",
    color: "blue"
  },
  {
    name: "NIST FIPS 203/204/205",
    icon: Award,
    status: "Certified",
    description: "Post-quantum cryptography standards",
    validUntil: "Permanent",
    color: "purple"
  },
  {
    name: "eIDAS 2.0 Ready",
    icon: FileCheck,
    status: "Compliant",
    description: "EU digital identity wallet framework",
    validUntil: "2026-09-30",
    color: "cyan"
  },
  {
    name: "DORA Compliant",
    icon: CheckCircle,
    status: "Certified",
    description: "Digital operational resilience act",
    validUntil: "Ongoing",
    color: "green"
  },
  {
    name: "GDPR Ready",
    icon: Users,
    status: "Compliant",
    description: "Data protection and privacy by design",
    validUntil: "Ongoing", 
    color: "indigo"
  }
]

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400",
    border: "border-emerald-500/30"
  },
  blue: {
    bg: "bg-blue-500/20", 
    text: "text-blue-400",
    border: "border-blue-500/30"
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400", 
    border: "border-purple-500/30"
  },
  cyan: {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    border: "border-cyan-500/30"
  },
  green: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    border: "border-green-500/30"
  },
  indigo: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400",
    border: "border-indigo-500/30"
  }
}

export function SecurityCertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Professional-Grade Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Certified & Compliant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rivic meets the highest security and compliance standards for EU financial services. Your data and infrastructure are protected by industry-leading certifications.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={cert.name}
                className={`p-6 bg-white/5 border ${colors.border} rounded-xl hover:bg-white/10 transition-colors duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon and Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <cert.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full`}>
                    {cert.status}
                  </span>
                </div>

                {/* Certification Info */}
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                
                {/* Valid Until */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Valid Until</span>
                  <span className="text-gray-300 font-medium">{cert.validUntil}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
            <div className="text-sm font-medium text-gray-300 mb-1">Uptime SLA</div>
            <div className="text-xs text-gray-500">Professional reliability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm font-medium text-gray-300 mb-1">Security Monitoring</div>
            <div className="text-xs text-gray-500">Continuous threat detection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
            <div className="text-sm font-medium text-gray-300 mb-1">Security Incidents</div>
            <div className="text-xs text-gray-500">Since platform launch</div>
          </div>
        </motion.div>

        {/* Audit Report CTA */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need Compliance Documentation?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Download our complete security audit reports, compliance certifications, and penetration test results for your due diligence process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:compliance@rivic.io?subject=Security%20Documentation%20Request"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Request Security Package
            </a>
            <a
              href="/docs/security"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              View Security Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
