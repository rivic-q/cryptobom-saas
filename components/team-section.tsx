"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Building2, GraduationCap, Globe, Users, Award, Briefcase } from "lucide-react"
import { AnimatedPencilImage } from "@/components/ui/animated-pencil-image"

const founder = {
  name: "Revan Ande",
  role: "Founder & CEO", 
  description: "Computer Science Student | Security Researcher | Berlin, Germany",
  linkedin: "https://www.linkedin.com/in/revan-sai-ande-988504127",
  focus: ["Post-quantum cryptography", "Cloud architecture", "Enterprise security"],
}

const supervisor = {
  name: "Prof. Dr. Jean-Pierre Seifert",
  role: "Academic Supervisor",
  organization: "TU Berlin - Security in Telecommunications",
  description: "Leading expert in hardware security and cryptographic implementations",
  email: "jean-pierre.seifert@tu-berlin.de",
}

const advisors = [
  {
    name: "Sebastian E. Grodzietzki",
    role: "Technology Advisor",
    organization: "IBM Technology",
    email: "sebastian.grodzietzki@ibm.com",
    type: "industry",
    color: "blue",
  },
  {
    name: "Miłosz Lindner",
    role: "Ecosystem Advisor", 
    organization: "Venture Café Berlin",
    email: "milosz@venturecafeberlin.org",
    type: "ecosystem",
    color: "emerald",
  },
  {
    name: "Norbert Herrmann",
    role: "Government Relations",
    organization: "Senate Department Berlin",
    email: "Norbert.Herrmann@senweb.berlin.de",
    type: "government",
    color: "amber",
  },
]

const institutions = [
  { name: "IBM Quantum", logo: "IBM", color: "blue", type: "Technology Partner" },
  { name: "Startup Incubator Berlin", logo: "SIB", color: "cyan", type: "Incubator" },
  { name: "HWR Berlin", logo: "HWR", color: "emerald", type: "Academic Partner" },
  { name: "Berlin Quantum Alliance", logo: "BQ", color: "purple", type: "Ecosystem" },
  { name: "TU Berlin", logo: "TUB", color: "red", type: "Research Partner" },
  { name: "Venture Café Berlin", logo: "VCB", color: "amber", type: "Community" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Team & Advisors</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Leadership & Advisory Board</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Backed by world-class advisors from academia, industry, and government
          </p>
        </motion.div>

        {/* Leadership */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <AnimatedPencilImage
                  src="/placeholder-user.jpg"
                  alt={founder.name}
                  width={80}
                  height={80}
                  className="rounded-xl flex-shrink-0"
                  delay={100}
                />
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-1">{founder.name}</h4>
                  <p className="text-cyan-400 font-medium mb-3">{founder.role}</p>
                  <p className="text-white/70 text-sm mb-4">{founder.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {founder.focus.map((item) => (
                      <span key={item} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Supervisor Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <AnimatedPencilImage
                  src="/placeholder-user.jpg"
                  alt={supervisor.name}
                  width={80}
                  height={80}
                  className="rounded-xl flex-shrink-0"
                  delay={200}
                />
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-1">{supervisor.name}</h4>
                  <p className="text-purple-400 font-medium mb-1">{supervisor.role}</p>
                  <p className="text-white/60 text-sm mb-2">{supervisor.organization}</p>
                  <p className="text-white/70 text-sm mb-4">{supervisor.description}</p>

                  <a
                    href={`mailto:${supervisor.email}`}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Institutions */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Partner Institutions</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {institutions.map((inst, index) => (
              <motion.div
                key={inst.name}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-20 h-20 rounded-xl bg-${inst.color}-500/10 border border-${inst.color}-500/20 flex items-center justify-center hover:bg-${inst.color}-500/20 transition-colors`}
                >
                  <span className={`text-2xl font-bold text-${inst.color}-400`}>{inst.logo}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-white/70 block">{inst.name}</span>
                  <span className="text-xs text-white/40">{inst.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Advisory Board</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${advisor.color}-500/20 flex items-center justify-center`}>
                    {advisor.type === "industry" ? (
                      <Building2 className={`w-6 h-6 text-${advisor.color}-400`} />
                    ) : advisor.type === "ecosystem" ? (
                      <Users className={`w-6 h-6 text-${advisor.color}-400`} />
                    ) : advisor.type === "government" ? (
                      <Award className={`w-6 h-6 text-${advisor.color}-400`} />
                    ) : (
                      <Briefcase className={`w-6 h-6 text-${advisor.color}-400`} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{advisor.name}</h4>
                    <p className="text-cyan-400 text-sm font-medium">{advisor.role}</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm mb-3">{advisor.organization}</p>

                <div className="pt-3 border-t border-white/10">
                  <a
                    href={`mailto:${advisor.email}`}
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hiring CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We are hiring for CTO, VP Engineering, Crypto Engineers, and Backend Engineers post-Series A funding. Target
            team size: 15-20 by end of 2026, 40-50 by end of 2027.
          </p>
          <a
            href="mailto:careers@rivic.io"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-xl transition-colors"
          >
            <Mail className="w-5 h-5" />
            careers@rivic.io
          </a>
        </motion.div>
      </div>
    </section>
  )
}
