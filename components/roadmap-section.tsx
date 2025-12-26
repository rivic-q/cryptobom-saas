"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, Clock, ArrowRight, Rocket, Target, Award, Globe } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Core Platform",
    timeline: "Q1-Q2 2026",
    status: "in-progress",
    deliverables: [
      "Python/C++ quantum bridge",
      "Kubernetes operators",
      "Hybrid RSA + ML-KEM crypto",
      "BB84 QKE protocol",
    ],
    icon: Rocket,
  },
  {
    phase: "Phase 2",
    title: "IBM Integration",
    timeline: "Q3 2026",
    status: "planned",
    deliverables: ["Attestation API", "TEE integration", "Hardware security module", "Compliance certification"],
    icon: Target,
  },
  {
    phase: "Phase 3",
    title: "eIDAS Compliance",
    timeline: "Q4 2026",
    status: "planned",
    deliverables: ["Digital signature framework", "Legal validation", "QWAC/QSealC support", "TSA integration"],
    icon: Award,
  },
  {
    phase: "Phase 4",
    title: "Enterprise Release",
    timeline: "Q1 2027",
    status: "planned",
    deliverables: ["Production support", "Consulting services", "Multi-cloud deployment", "Customer success"],
    icon: Globe,
  },
]

const milestones = [
  { date: "Dec 2025", event: "Documentation & advisors complete", done: true },
  { date: "Sep 2026", event: "eIDAS 2.0 deadline compliance", done: false },
  { date: "Q1 2027", event: "GA launch & first enterprise customers", done: false },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Product Roadmap</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Development Timeline</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From core platform to production release - our path to quantum-safe infrastructure
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className={`relative rounded-2xl p-6 ${
                phase.status === "in-progress"
                  ? "bg-gradient-to-b from-cyan-500/20 to-transparent border-2 border-cyan-500/50"
                  : "bg-white/5 border border-white/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {phase.status === "in-progress" && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
                  In Progress
                </div>
              )}

              <phase.icon
                className={`w-10 h-10 mb-4 ${phase.status === "in-progress" ? "text-cyan-400" : "text-white/40"}`}
              />

              <div className="text-sm text-purple-400 font-medium mb-1">{phase.phase}</div>
              <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-white/50 text-sm mb-4">{phase.timeline}</p>

              <ul className="space-y-2">
                {phase.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key Milestones */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Milestones</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {milestones.map((milestone, index) => (
              <div key={milestone.date} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.done
                      ? "bg-emerald-500/20 border border-emerald-500/50"
                      : "bg-white/10 border border-white/20"
                  }`}
                >
                  {milestone.done ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Clock className="w-5 h-5 text-white/50" />
                  )}
                </div>
                <div>
                  <div className="text-sm text-purple-400 font-medium">{milestone.date}</div>
                  <div className="text-white text-sm">{milestone.event}</div>
                </div>
                {index < milestones.length - 1 && <div className="hidden md:block w-12 h-px bg-white/20 ml-4" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
