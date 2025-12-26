"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"
import { motion } from "framer-motion"
import { Shield, Globe, Users, Award, ArrowRight, Heart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every decision prioritizes the security and protection of our clients' critical financial data against quantum threats."
  },
  {
    icon: Globe,
    title: "European Excellence", 
    description: "Built for Europe, by Europeans. We understand the regulatory landscape and cultural nuances of EU financial markets."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Open source at heart, we believe in collaborative development and transparent security practices."
  },
  {
    icon: Award,
    title: "Innovation Leadership",
    description: "Pioneering the future of cryptography with cutting-edge research and practical implementations."
  }
]

const timeline = [
  {
    year: "2024",
    title: "Foundation Established",
    description: "QMCF was founded in Berlin to address the urgent need for quantum-safe banking infrastructure."
  },
  {
    year: "2025",
    title: "First Deployments",
    description: "Successfully deployed quantum-safe solutions for leading EU financial institutions."
  },
  {
    year: "2026",
    title: "eIDAS 2.0 Ready",
    description: "Full compliance platform ready ahead of the September 2026 regulatory deadline."
  },
  {
    year: "2027+",
    title: "Global Expansion",
    description: "Expanding quantum-safe infrastructure across international markets."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About QMCF
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The Quantum Mesh Cryptographic Foundation (QMCF) is Europe's leading 
                quantum-safe security platform, protecting financial institutions from 
                the emerging quantum computing threat.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-full">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">Made with Love in Berlin, Germany</span>
                <Heart className="w-5 h-5 text-red-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To secure Europe's financial future by providing zero-code quantum-safe 
                cryptographic migration solutions that enable banks to protect their customers' 
                data against both current and future threats, ensuring compliance with 
                eIDAS 2.0 and DORA regulations.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-cyan-500/20 rounded-xl">
                        <IconComponent className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-gray-300">
                From inception to becoming Europe's trusted quantum-safe security partner
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the growing community of financial institutions trusting QMCF 
                to protect their quantum future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Team
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
