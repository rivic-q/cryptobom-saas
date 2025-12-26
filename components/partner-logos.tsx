"use client"

import { motion } from "framer-motion"

const partners = [
  {
    name: "IBM",
    logo: "IBM",
    description: "Quantum Partner",
  },
  {
    name: "Startup Incubator Berlin",
    logo: "SIB",
    description: "Incubator Partner",
  },
  {
    name: "HWR Berlin",
    logo: "HWR",
    description: "Academic Partner",
  },
  {
    name: "Berlin Quantum Alliance",
    logo: "BQ",
    description: "Quantum Ecosystem",
  },
  {
    name: "TU Berlin",
    logo: "TUB",
    description: "Research Partner",
  },
  {
    name: "CNCF",
    logo: "CNCF",
    description: "Cloud Native",
  },
]

export function PartnerLogos() {
  return (
    <section className="py-16 px-4 bg-black/50 border-y border-white/5">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/50 uppercase tracking-widest mb-2">Trusted Partners & Ecosystem</p>
          <h3 className="text-xl font-semibold text-white">Backed by Leading Institutions</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                <span className="text-2xl font-bold text-white/70 group-hover:text-cyan-400 transition-colors">
                  {partner.logo}
                </span>
              </div>
              <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* IBM Quantum Partner Badge */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-400">IBM</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">IBM Quantum Network Partner</p>
              <p className="text-xs text-white/50">Quantum-Safe Cryptography Initiative</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
