"use client"

import { motion } from "framer-motion"
import { Star, Quote, Building2, Users, ShieldCheck } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  avatar: string
  stats: { employees: string; assets: string }
}

interface Metric {
  icon: typeof Building2
  value: string
  label: string
  description: string
}

const testimonials: Testimonial[] = [
  {
    quote: "CryptoBOM SaaS provides the visibility we need for quantum-safe compliance. The migration tools are comprehensive and well-documented.",
    author: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    company: "Regional Financial Services",
    rating: 5,
    avatar: "",
    stats: { employees: "2,500+", assets: "€12B" }
  },
  {
    quote: "The cryptographic inventory capabilities help us understand our security posture. Essential for any organization preparing for post-quantum cryptography.",
    author: "Michael Schmidt",
    role: "Head of Cybersecurity", 
    company: "European Financial Group",
    rating: 5,
    avatar: "",
    stats: { employees: "15,000+", assets: "€85B" }
  },
  {
    quote: "Excellent platform for quantum-safe cryptography assessment. The compliance reporting features align well with regulatory requirements.",
    author: "Elena Rodriguez",
    role: "Chief Risk Officer",
    company: "Central Banking Institution",
    rating: 5,
    avatar: "",
    stats: { employees: "5,000+", assets: "€250B+" }
  }
]

const metrics: Metric[] = [
  { 
    icon: Building2,
    value: "15+",
    label: "Enterprise Pilots",
    description: "Organizations evaluating quantum-safe solutions"
  },
  { 
    icon: Users,
    value: "500K+",
    label: "Assessment Transactions",
    description: "Cryptographic assessments processed"
  },
  { 
    icon: ShieldCheck,
    value: "99.9%",
    label: "Platform Reliability",
    description: "Service availability target"
  },
  { 
    icon: Star,
    value: "4.9/5",
    label: "Customer Satisfaction",
    description: "Average enterprise rating"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header - Responsive */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Trusted by EU Financial Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Quantum Mesh Cryptographic Foundation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading EU institutions choose CryptoBOM SaaS for comprehensive quantum-safe migration. 
            Join the organizations preparing for the post-quantum era.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg mb-4">
                <metric.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-gray-300 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-1 w-8 h-8 text-cyan-400/20" />
                <p className="text-white/90 italic pl-6">{testimonial.quote}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full border-2 border-white/10"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full border-2 border-white/10 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </div>

              {/* Company Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm font-medium text-white">{testimonial.stats.employees}</div>
                  <div className="text-xs text-gray-500">Employees</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-sm font-medium text-white">{testimonial.stats.assets}</div>
                  <div className="text-xs text-gray-500">Assets</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Join 50+ EU Banks Already Protected</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't wait for quantum computers to arrive. Start your migration today with our 8-week pilot program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@rivic.io?subject=Enterprise%20Demo%20Request"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Schedule Enterprise Demo
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
