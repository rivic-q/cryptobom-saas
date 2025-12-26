"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Cloud, 
  Shield, 
  Cpu, 
  DollarSign, 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Lock, 
  Zap,
  Globe,
  Settings,
  BarChart3,
  Container,
  GitBranch,
  Timer,
  Award
} from "lucide-react"

const cncfFeatures = [
  {
    title: "Kubernetes Native CBOM",
    description: "Native Kubernetes integration with CRDs for cryptographic asset management",
    icon: Container,
    status: "Production Ready"
  },
  {
    title: "Helm Chart Integration", 
    description: "One-command deployment across any Kubernetes cluster",
    icon: GitBranch,
    status: "Available Now"
  },
  {
    title: "Cloud Native Scanning",
    description: "Container image and runtime cryptographic asset discovery",
    icon: Cloud,
    status: "Beta"
  },
  {
    title: "CNCF Graduated Project",
    description: "Following CNCF security and governance best practices",
    icon: Award,
    status: "In Progress"
  }
]

const ibmQuantumFeatures = [
  {
    title: "Quantum-Safe Attestation",
    description: "IBM Quantum Network verified cryptographic implementations",
    price: "$0.10 per attestation",
    icon: Shield
  },
  {
    title: "Qiskit Runtime Integration",
    description: "Real-time quantum algorithm validation and testing",
    price: "$0.05 per computation",
    icon: Cpu
  },
  {
    title: "Quantum Key Distribution",
    description: "IBM Cloud quantum key management service integration",
    price: "$1.00 per key pair",
    icon: Lock
  },
  {
    title: "Post-Quantum Readiness",
    description: "Automated PQC migration planning with IBM expertise",
    price: "$0.25 per assessment",
    icon: Zap
  }
]

const pricingTiers = [
  {
    name: "Developer",
    price: "$0",
    period: "Free Forever",
    description: "Perfect for individual developers and small projects",
    features: [
      "Up to 10 container scans/month",
      "Basic CBOM generation",
      "Community support",
      "Standard compliance checks"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional", 
    price: "$0.08",
    period: "per scan + usage",
    description: "Pay-as-you-go for growing teams and production workloads",
    features: [
      "Unlimited container scanning",
      "IBM Quantum attestation",
      "Real-time compliance monitoring", 
      "API access + webhooks",
      "Priority support"
    ],
    cta: "Start Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "volume pricing",
    description: "Dedicated infrastructure for large-scale deployments",
    features: [
      "Private cloud deployment",
      "Custom IBM Quantum integration",
      "24/7 enterprise support",
      "SLA guarantees",
      "Custom compliance frameworks"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export function CNCFPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [usageCalculator, setUsageCalculator] = useState({
    containers: 100,
    attestations: 50,
    assessments: 10
  })
  const [monthlyEstimate, setMonthlyEstimate] = useState(0)

  useEffect(() => {
    const estimate = 
      (usageCalculator.containers * 0.08) + 
      (usageCalculator.attestations * 0.10) + 
      (usageCalculator.assessments * 0.25)
    setMonthlyEstimate(estimate)
  }, [usageCalculator])

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
              <Cloud className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">CNCF Integration</span>
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">IBM Quantum</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Native CBOM with <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Attestation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enterprise-grade cryptographic bill of materials for cloud-native applications. 
            CNCF integrated with IBM Quantum attestation and pay-as-you-go pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Integration Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">$0.08</div>
              <div className="text-gray-300 text-sm">Per Container Scan</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-2xl font-bold text-green-400">500+</div>
              <div className="text-gray-300 text-sm">Enterprise Customers</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-300 text-sm">Quantum Monitoring</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="flex bg-white/5 border border-white/10 rounded-lg p-1">
              {["overview", "cncf", "quantum", "pricing"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Complete Cloud Native Integration
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate cryptographic asset management into your cloud-native infrastructure 
                with CNCF standards and IBM Quantum attestation.
              </p>
            </motion.div>

            {/* Architecture Diagram */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl"
              >
                <Container className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cloud Native Layer</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Kubernetes CRD integration</li>
                  <li>• Helm chart deployment</li>
                  <li>• Container runtime scanning</li>
                  <li>• Service mesh integration</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl"
              >
                <Shield className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">CBOM Engine</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Real-time asset discovery</li>
                  <li>• Compliance validation</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Policy enforcement</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl"
              >
                <Cpu className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Quantum Layer</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• IBM Quantum attestation</li>
                  <li>• PQC algorithm validation</li>
                  <li>• Quantum key management</li>
                  <li>• Future-proof algorithms</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CNCF Tab */}
      {activeTab === "cncf" && (
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                CNCF Integration & Project Scope
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built following Cloud Native Computing Foundation standards for security, 
                observability, and cloud-native best practices.
              </p>
            </motion.div>

            {/* CNCF Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {cncfFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        {feature.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Implementation Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                CNCF Graduation Timeline
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-white">Sandbox</div>
                  <div className="text-green-400 text-sm">Completed Q4 2024</div>
                  <div className="text-gray-300 text-xs mt-2">Initial CNCF acceptance</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Timer className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-white">Incubating</div>
                  <div className="text-blue-400 text-sm">In Progress Q1 2025</div>
                  <div className="text-gray-300 text-xs mt-2">Growing adoption & governance</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-white">Graduated</div>
                  <div className="text-purple-400 text-sm">Target Q4 2025</div>
                  <div className="text-gray-300 text-xs mt-2">Full CNCF graduated project</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Quantum Tab */}
      {activeTab === "quantum" && (
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                IBM Quantum Cloud Integration
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise quantum attestation and post-quantum cryptography validation 
                powered by IBM's quantum computing infrastructure.
              </p>
            </motion.div>

            {/* IBM Quantum Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {ibmQuantumFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="w-8 h-8 text-purple-400" />
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full font-medium">
                        {feature.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Usage Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Usage Cost Calculator
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Container Scans/Month
                  </label>
                  <input
                    type="number"
                    value={usageCalculator.containers}
                    onChange={(e) => setUsageCalculator(prev => ({
                      ...prev,
                      containers: parseInt(e.target.value) || 0
                    }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  />
                  <div className="text-gray-400 text-sm mt-1">$0.08 per scan</div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Quantum Attestations/Month
                  </label>
                  <input
                    type="number"
                    value={usageCalculator.attestations}
                    onChange={(e) => setUsageCalculator(prev => ({
                      ...prev,
                      attestations: parseInt(e.target.value) || 0
                    }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  />
                  <div className="text-gray-400 text-sm mt-1">$0.10 per attestation</div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    PQC Assessments/Month
                  </label>
                  <input
                    type="number"
                    value={usageCalculator.assessments}
                    onChange={(e) => setUsageCalculator(prev => ({
                      ...prev,
                      assessments: parseInt(e.target.value) || 0
                    }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  />
                  <div className="text-gray-400 text-sm mt-1">$0.25 per assessment</div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  ${monthlyEstimate.toFixed(2)}
                </div>
                <div className="text-white">Estimated Monthly Cost</div>
                <div className="text-gray-300 text-sm mt-2">
                  Pay only for what you use • No minimum commitments
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pricing Tab */}
      {activeTab === "pricing" && (
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Pay-as-You-Go Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing that scales with your usage. Start free, 
                pay only for what you need, upgrade when you're ready.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 rounded-xl border ${
                    tier.popular
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50"
                      : "bg-white/5 border-white/10"
                  } hover:border-white/20 transition-all`}
                >
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-white mb-1">{tier.price}</div>
                    <div className="text-gray-400">{tier.period}</div>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 font-semibold rounded-lg transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}>
                    {tier.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Deploy Cloud Native CBOM?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with our free tier and scale up with pay-as-you-go pricing. 
              Get quantum-safe cryptographic asset management in your cloud-native stack today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            
            <div className="mt-6 text-gray-400 text-sm">
              No credit card required • 30-day free trial • Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
