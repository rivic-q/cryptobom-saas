"use client"

import { motion } from "framer-motion"
import { Check, X, Star, Zap, Shield, Code, Clock, Users } from "lucide-react"

interface Feature {
  category: string
  features: {
    name: string
    rivic: boolean | string
    competitor1: boolean | string
    competitor2: boolean | string
    description: string
  }[]
}

const comparisonData: Feature[] = [
  {
    category: "Implementation",
    features: [
      {
        name: "Zero Code Changes Required",
        rivic: true,
        competitor1: false,
        competitor2: false,
        description: "Deploy without modifying application code"
      },
      {
        name: "Deployment Time",
        rivic: "2-3 weeks",
        competitor1: "6-12 months",
        competitor2: "12-18 months", 
        description: "Time from purchase to production deployment"
      },
      {
        name: "Downtime Required",
        rivic: "Zero",
        competitor1: "Planned maintenance",
        competitor2: "Full migration window",
        description: "Service interruption during migration"
      },
      {
        name: "Staff Training Required",
        rivic: "Minimal",
        competitor1: "Extensive",
        competitor2: "Complete retraining",
        description: "Learning curve for existing team"
      }
    ]
  },
  {
    category: "Compliance & Standards",
    features: [
      {
        name: "eIDAS 2.0 Ready",
        rivic: true,
        competitor1: false,
        competitor2: "Planned",
        description: "Built specifically for EU digital identity requirements"
      },
      {
        name: "DORA Compliance",
        rivic: true,
        competitor1: "Partial",
        competitor2: false,
        description: "Digital Operational Resilience Act compliance"
      },
      {
        name: "NIST FIPS 203/204/205",
        rivic: true,
        competitor1: true,
        competitor2: "Planned",
        description: "Certified post-quantum algorithms"
      },
      {
        name: "Real-time Audit Reports",
        rivic: true,
        competitor1: false,
        competitor2: false,
        description: "Continuous compliance monitoring and reporting"
      }
    ]
  },
  {
    category: "Technology & Architecture",
    features: [
      {
        name: "Hybrid Crypto Mode",
        rivic: true,
        competitor1: false,
        competitor2: false,
        description: "Parallel classical + PQC for backward compatibility"
      },
      {
        name: "CBOM Generation",
        rivic: true,
        competitor1: false,
        competitor2: false,
        description: "Cryptographic Bill of Materials (CycloneDX 1.6)"
      },
      {
        name: "Kubernetes Native",
        rivic: true,
        competitor1: "Plugin",
        competitor2: false,
        description: "Built for cloud-native environments"
      },
      {
        name: "IBM Quantum Attestation",
        rivic: true,
        competitor1: false,
        competitor2: false,
        description: "Cryptographic proof of PQC compliance"
      }
    ]
  }
]

const competitors = [
  {
    name: "Rivic",
    description: "Quantum-Safe Banking Platform",
    logo: "🔒",
    color: "cyan",
    highlight: true
  },
  {
    name: "Traditional PQC",
    description: "Manual Implementation",
    logo: "⚙️", 
    color: "gray",
    highlight: false
  },
  {
    name: "Legacy Vendors",
    description: "Proprietary Solutions",
    logo: "🏢",
    color: "gray",
    highlight: false
  }
]

export function CompetitiveComparisonSection() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-400" />
      ) : (
        <X className="w-5 h-5 text-red-400" />
      )
    }
    return <span className="text-sm text-white font-medium">{value}</span>
  }

  return (
    <section id="comparison" className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Why Choose Rivic</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            How We Compare
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See why leading EU banks choose Rivic over traditional quantum-safe migration approaches.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="p-4">
                <div className="text-lg font-semibold text-white mb-2">Features</div>
                <div className="text-sm text-gray-400">Comparison Categories</div>
              </div>
              {competitors.map((competitor, index) => (
                <div
                  key={competitor.name}
                  className={`p-4 rounded-xl text-center ${
                    competitor.highlight
                      ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className="text-3xl mb-2">{competitor.logo}</div>
                  <div className={`text-lg font-semibold mb-1 ${
                    competitor.highlight ? "text-cyan-400" : "text-white"
                  }`}>
                    {competitor.name}
                  </div>
                  <div className="text-sm text-gray-400">{competitor.description}</div>
                  {competitor.highlight && (
                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      <Star className="w-3 h-3" />
                      Recommended
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Categories */}
            <div className="space-y-8">
              {comparisonData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      {category.category === "Implementation" && <Zap className="w-4 h-4 text-cyan-400" />}
                      {category.category === "Compliance & Standards" && <Shield className="w-4 h-4 text-cyan-400" />}
                      {category.category === "Technology & Architecture" && <Code className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  </div>

                  {/* Feature Rows */}
                  <div className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={feature.name}
                        className="grid grid-cols-4 gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div>
                          <div className="font-medium text-white mb-1">{feature.name}</div>
                          <div className="text-xs text-gray-400">{feature.description}</div>
                        </div>
                        <div className="flex items-center justify-center">
                          {renderValue(feature.rivic)}
                        </div>
                        <div className="flex items-center justify-center">
                          {renderValue(feature.competitor1)}
                        </div>
                        <div className="flex items-center justify-center">
                          {renderValue(feature.competitor2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to See the Difference?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a side-by-side comparison demo and see why Rivic is the fastest path to quantum-safe banking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@rivic.io?subject=Comparison%20Demo%20Request"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Schedule Comparison Demo
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Try Interactive Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
