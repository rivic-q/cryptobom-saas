"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Check, ArrowRight, Github, Mail } from "lucide-react"

const pricingPlans = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "Community edition for developers and startups",
    features: [
      "CBOM Scanner CLI",
      "Basic crypto detection",
      "CycloneDX output",
      "Community support",
      "GitHub issues",
      "Apache 2.0 license",
    ],
    cta: "Star on GitHub",
    ctaIcon: Github,
    popular: false,
    href: "https://github.com/rivic-security",
  },
  {
    name: "Premium",
    price: "Contact",
    period: "for pricing",
    description: "For fintechs and growing banks",
    features: [
      "Everything in Open Source",
      "Q-Hook runtime interceptor",
      "Kubernetes integration",
      "Prometheus metrics",
      "Email support (48h SLA)",
      "DORA compliance reports",
      "eIDAS 2.0 readiness check",
    ],
    cta: "Request Demo",
    ctaIcon: ArrowRight,
    popular: true,
    href: "mailto:sales@rivic.io?subject=Premium%20Demo%20Request",
  },
  {
    name: "Enterprise Custom",
    price: "Contact",
    period: "for pricing",
    description: "For Tier-1 banks and large institutions",
    features: [
      "Everything in Premium",
      "Unlimited clusters",
      "Custom SLAs (99.95%+)",
      "24/7 dedicated support",
      "IBM Quantum attestation",
      "On-premise deployment",
      "Custom migration consulting",
      "Dedicated success engineer",
    ],
    cta: "Contact Sales",
    ctaIcon: Mail,
    popular: false,
    href: "mailto:enterprise@rivic.io?subject=Enterprise%20Inquiry",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Go-To-Market Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start free with open source. Scale with enterprise support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card border rounded-lg p-8 ${
                plan.popular ? "border-cyan-500/50 bg-cyan-500/5" : "border-border/20 bg-background/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-medium">Recommended</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-cyan-500 text-black hover:bg-cyan-400"
                    : "bg-transparent border border-white/20 text-white hover:bg-white/10"
                } group`}
                size="lg"
                asChild
              >
                <a
                  href={plan.href}
                  target={plan.name === "Open Source" ? "_blank" : undefined}
                  rel={plan.name === "Open Source" ? "noopener noreferrer" : undefined}
                >
                  <plan.ctaIcon className="mr-2 h-4 w-4" />
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">8-week POC available for Premium & Enterprise tiers</p>
          <p className="text-sm text-gray-500">
            Need migration consulting?{" "}
            <a href="mailto:consulting@rivic.io" className="text-cyan-400 hover:underline">
              Professional services available
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
