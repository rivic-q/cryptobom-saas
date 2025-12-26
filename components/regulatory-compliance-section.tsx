"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, FileCheck, Award, Globe, Building } from "lucide-react"

const regulations = [
  {
    name: "BSI Germany",
    standards: ["TR-02102", "TR-03116", "CBOM Guidelines"],
    icon: Shield,
    status: "Compliant",
    description: "Federal Office for Information Security cryptographic requirements",
    color: "from-red-500/20 to-yellow-500/20",
    textColor: "text-red-400"
  },
  {
    name: "NIST PQC",
    standards: ["FIPS 203", "FIPS 204", "FIPS 205"],
    icon: Award,
    status: "Certified",
    description: "Post-quantum cryptography standards compliance",
    color: "from-blue-500/20 to-purple-500/20",
    textColor: "text-blue-400"
  },
  {
    name: "DORA",
    standards: ["Article 8", "Article 17", "Article 25"],
    icon: Building,
    status: "Ready",
    description: "Digital Operational Resilience Act for financial services",
    color: "from-green-500/20 to-emerald-500/20", 
    textColor: "text-green-400"
  },
  {
    name: "CRA",
    standards: ["Annex I", "Article 24", "Essential Requirements"],
    icon: FileCheck,
    status: "Compliant",
    description: "Cyber Resilience Act secure by design requirements",
    color: "from-cyan-500/20 to-teal-500/20",
    textColor: "text-cyan-400"
  },
  {
    name: "eIDAS 2.0",
    standards: ["Quantum-Safe Timeline", "Trust Services", "QES"],
    icon: Globe,
    status: "Ready",
    description: "Electronic identification and trust services regulation",
    color: "from-purple-500/20 to-pink-500/20",
    textColor: "text-purple-400"
  }
]

const complianceFeatures = [
  {
    title: "Real-Time Regulatory Mapping",
    description: "Automatic alignment with BSI, NIST, DORA, CRA requirements",
    icon: CheckCircle
  },
  {
    title: "Deadline Tracking", 
    description: "eIDAS 2.0 January 2027 timeline monitoring and alerts",
    icon: FileCheck
  },
  {
    title: "Audit Preparation",
    description: "Pre-configured reports for regulatory assessments",
    icon: Award
  },
  {
    title: "Continuous Monitoring",
    description: "24/7 compliance status updates and drift detection",
    icon: Shield
  }
]

export function RegulatoryComplianceSection() {
  return (
    <section id="regulatory-compliance" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🏛️ Regulatory Compliance Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet the most stringent EU and international regulatory requirements for cryptographic asset management 
            and quantum security preparedness with automated compliance monitoring.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              100% Regulatory Ready - All Major Frameworks Supported
            </span>
          </div>
        </motion.div>

        {/* Regulatory Standards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regulations.map((regulation, index) => {
            const IconComponent = regulation.icon
            return (
              <motion.div
                key={regulation.name}
                className={`p-6 bg-gradient-to-br ${regulation.color} border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-white/5 rounded-lg border border-white/10`}>
                    <IconComponent className={`w-6 h-6 ${regulation.textColor}`} />
                  </div>
                  <span className={`px-2 py-1 ${regulation.textColor} bg-white/5 rounded-full text-xs font-medium`}>
                    {regulation.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{regulation.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{regulation.description}</p>
                
                <div className="space-y-1">
                  {regulation.standards.map((standard) => (
                    <div key={standard} className="flex items-center gap-2">
                      <CheckCircle className={`w-3 h-3 ${regulation.textColor}`} />
                      <span className="text-gray-300 text-xs">{standard}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Compliance Features */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Automated Compliance Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex p-3 bg-white/5 rounded-lg border border-white/10 mb-4">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Compliance Timeline */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🗓️ Critical Regulatory Deadlines
            </h3>
            <p className="text-gray-300">
              Stay ahead of mandatory compliance timelines with automated tracking and alerts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-yellow-400 mb-2">Jan 2027</div>
              <div className="text-white font-semibold mb-1">eIDAS 2.0</div>
              <div className="text-gray-300 text-sm">Quantum-safe mandatory for new deployments</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-orange-400 mb-2">Oct 2027</div>
              <div className="text-white font-semibold mb-1">CRA</div>
              <div className="text-gray-300 text-sm">Cyber Resilience Act full enforcement</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-red-400 mb-2">Sep 2030</div>
              <div className="text-white font-semibold mb-1">eIDAS 2.0</div>
              <div className="text-gray-300 text-sm">Full quantum-safe migration deadline</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Achieve Regulatory Compliance?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free CBOM scan and get a comprehensive regulatory compliance assessment 
            across all major EU and international frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Start Compliance Scan
            </button>
            <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Compliance Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
