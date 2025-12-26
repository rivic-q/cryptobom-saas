"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Building2, GraduationCap, Globe, Users, Award, Briefcase } from "lucide-react"

const founder = {
  name: "Revan Sai Ande",
  role: "Founder & CEO",
  description: "Computer Science Student | Security Researcher | 2hearts Community | Venture Cafe Berlin Ambassador",
  location: "Berlin, Germany",
  phone: "+49 15510480340",
  linkedin: "https://www.linkedin.com/in/revan-sai-ande-988504127",
  focus: ["Post-quantum cryptography", "Cloud architecture", "Enterprise security", "Startup operations"],
}

const supervisor = {
  name: "Prof. Dr. Jean-Pierre Seifert",
  role: "Academic Supervisor",
  organization: "TU Berlin - Security in Telecommunications",
  address: "Einsteinufer 19, Sekr E 5, 10587 Berlin",
  description: "Leading expert in hardware security and cryptographic implementations",
  email: "jean-pierre.seifert@tu-berlin.de",
  responsibilities: [
    "Cryptographic research validation",
    "Algorithm verification",
    "Academic partnerships",
    "Research collaboration",
  ],
}

const advisors = [
  {
    name: "Sebastian E. Grodzietzki",
    role: "Technology Advisor",
    title: "Principal Automation Developer DACH",
    organization: "IBM Technology",
    roles: ["IBM Quantum Ambassador DACH", "Strategy Lead IBM Club Berlin"],
    email: "sebastian.grodzietzki@ibm.com",
    phone: "+49-162-168 6343",
    type: "industry",
    color: "blue",
    responsibilities: ["IBM ecosystem gateway", "Quantum technology insights", "Enterprise introductions"],
  },
  {
    name: "Miłosz Lindner",
    role: "Ecosystem Advisor",
    title: "Program Manager",
    organization: "Venture Café Berlin",
    email: "milosz@venturecafeberlin.org",
    phone: "+49 176 62829114",
    type: "ecosystem",
    color: "emerald",
    responsibilities: ["Founder mentorship", "Investor introductions", "Networking events"],
  },
  {
    name: "Norbert Herrmann",
    role: "Government Relations",
    title: "Head of Startup Affairs",
    organization: "Senate Department Berlin",
    email: "Norbert.Herrmann@senweb.berlin.de",
    phone: "+49 30 9013-8392",
    type: "government",
    color: "amber",
    responsibilities: ["Government programs", "Grants & funding", "Regulatory guidance"],
  },
  {
    name: "Andrea Dannehl",
    role: "Incubator Coordinator",
    title: "Participation & Administration",
    organization: "Startup Incubator Berlin (HWR)",
    email: "andrea.dannehl@hwr-berlin.de",
    type: "incubator",
    color: "cyan",
    responsibilities: ["Incubator program", "Business mentorship", "Facility access"],
  },
  {
    name: "Alina Kerner",
    role: "Start-Up Coach",
    title: "Gründungsberaterin",
    organization: "Zukunft.Gründen (ZuG)",
    email: "alina.kerner@hfwu.de",
    phone: "+49 7022 201256",
    type: "coach",
    color: "purple",
    responsibilities: ["Business strategy", "Operational guidance", "Financial planning"],
  },
  {
    name: "Augustine Kangni",
    role: "Acceleration Manager",
    title: "Program Manager",
    organization: "Zukunft.Gründen Venture Studio",
    email: "augustine.kangni@zukunftgruenden.io",
    type: "acceleration",
    color: "rose",
    responsibilities: ["Venture acceleration", "Investor relations", "Investment readiness"],
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
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-1">{founder.name}</h4>
                  <p className="text-cyan-400 font-medium mb-3">{founder.role}</p>
                  <p className="text-white/70 text-sm mb-3">{founder.description}</p>
                  <p className="text-white/50 text-sm mb-4">
                    {founder.location} | {founder.phone}
                  </p>

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
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-1">{supervisor.name}</h4>
                  <p className="text-purple-400 font-medium mb-1">{supervisor.role}</p>
                  <p className="text-white/60 text-sm mb-2">{supervisor.organization}</p>
                  <p className="text-white/50 text-xs mb-3">{supervisor.address}</p>
                  <p className="text-white/70 text-sm mb-4">{supervisor.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {supervisor.responsibilities.map((item) => (
                      <span key={item} className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>

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
                    ) : advisor.type === "ecosystem" || advisor.type === "acceleration" ? (
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

                <p className="text-white/80 text-sm mb-1">{advisor.title}</p>
                <p className="text-white/60 text-sm mb-3">{advisor.organization}</p>

                {advisor.roles && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {advisor.roles.map((role) => (
                      <span key={role} className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={`mailto:${advisor.email}`}
                    className="inline-flex items-center gap-1 text-white/50 hover:text-white text-xs transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email</span>
                  </a>
                  {advisor.phone && <span className="text-white/30 text-xs">{advisor.phone}</span>}
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
