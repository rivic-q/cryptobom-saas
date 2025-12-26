"use client"

import { motion } from "framer-motion"
import { Building2, Shield, Clock, Users, HeadphonesIcon, Server, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const enterpriseTiers = [
  {
    name: "Starter",
    price: "€30K-50K",
    period: "/year",
    description: "Mid-market companies, single project pilots",
    operations: "100K/month",
    users: "Up to 10",
    support: "Email, 24hr response",
    sla: "99.5%",
    features: [
      "ML-KEM & RSA hybrid encryption",
      "API access",
      "Basic audit logging",
      "SDK libraries",
      "eIDAS 2.0 validated",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "€100K-200K",
    period: "/year",
    description: "Large enterprises, multiple projects",
    operations: "1M/month",
    users: "Up to 100",
    support: "Phone + email, 4hr response",
    sla: "99.9%",
    features: [
      "All Starter features",
      "Extended audit logging (7 years)",
      "Multi-region deployment",
      "Migration consulting (20 hours)",
      "eIDAS 2.0 certified",
      "Quarterly business reviews",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "€250K-1M+",
    period: "/year",
    description: "Mission-critical, government/defense",
    operations: "Unlimited",
    users: "Unlimited",
    support: "24/7 dedicated TAM, 1hr response",
    sla: "99.99%",
    features: [
      "All Professional features",
      "Custom integrations",
      "On-premises deployment",
      "FIPS 140-3 certified",
      "Hardware attestation (TPM 2.0)",
      "Custom training & certification",
    ],
    highlight: false,
  },
]

const targetMarkets = [
  { name: "Financial Services", icon: Building2, examples: "Banks, Insurance, Payments" },
  { name: "Government & Defense", icon: Shield, examples: "EU, NATO, Federal" },
  { name: "Healthcare", icon: Users, examples: "Hospitals, Pharma, Insurance" },
  { name: "Critical Infrastructure", icon: Server, examples: "Energy, Telecom, Water" },
]

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Enterprise Platform</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Enterprise Tiers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            99.99% SLA, 24/7 support, eIDAS 2.0 certified - designed for mission-critical deployments
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {enterpriseTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-gradient-to-b from-cyan-500/20 to-blue-500/10 border-2 border-cyan-500/50"
                  : "bg-white/5 border border-white/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-white/60 text-sm mb-4">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-white/50">{tier.period}</span>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/70">
                    Operations: <span className="text-white">{tier.operations}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/70">
                    Users: <span className="text-white">{tier.users}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <HeadphonesIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/70">
                    Support: <span className="text-white">{tier.support}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/70">
                    SLA: <span className="text-white">{tier.sla}</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${tier.highlight ? "bg-cyan-500 hover:bg-cyan-400 text-black" : "bg-white/10 hover:bg-white/20 text-white"}`}
                asChild
              >
                <a href="mailto:sales@rivic.io">
                  Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Target Markets */}
        <motion.div
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Target Markets</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {targetMarkets.map((market, index) => (
              <motion.div
                key={market.name}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <market.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{market.name}</h4>
                <p className="text-white/50 text-sm">{market.examples}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sales Process */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 mb-4">Average Sales Cycle: 6-9 months | Average Deal Size: €250K-€1M</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white" asChild>
              <a href="mailto:sales@rivic.io">Schedule Enterprise Demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <a href="#" download>
                Download Spec Sheet
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
