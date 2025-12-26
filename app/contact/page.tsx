import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Users, Shield, Zap, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Sales - Rivic Quantum-Safe Banking Security | Enterprise Demo & Consultation",
  description: "Get in touch with Rivic's quantum security experts. Schedule enterprise demo, request ROI analysis, or speak with our PQC migration specialists. Berlin-based team serving EU banks.",
  keywords: ["contact rivic", "quantum security consultation", "enterprise demo", "PQC migration expert", "banking security sales"],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Secure Your Bank Together
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Speak with our quantum security experts. Get a personalized demo, ROI analysis, 
              and migration roadmap tailored to your institution.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                Average response time: 2 hours
              </span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Sales & Enterprise</div>
                      <a href="mailto:sales@rivic.io" className="text-cyan-400 hover:underline">
                        sales@rivic.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Technical Support</div>
                      <a href="mailto:support@rivic.io" className="text-green-400 hover:underline">
                        support@rivic.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Direct Line</div>
                      <a href="tel:+4915510480340" className="text-purple-400 hover:underline">
                        +49 155 10480340
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Headquarters</div>
                      <div className="text-gray-300">Berlin, Germany</div>
                      <div className="text-sm text-gray-400">EU Privacy & Data Protection</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend Support</span>
                    <span>Emergency Only</span>
                  </div>
                  <div className="text-sm text-cyan-400 mt-4">
                    🌍 Serving EU banks in all timezones
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/demo"
                  className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl text-center hover:bg-cyan-500/10 transition-colors"
                >
                  <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">Interactive Demo</div>
                  <div className="text-sm text-gray-400">Try now, no signup</div>
                </a>
                
                <a
                  href="mailto:sales@rivic.io?subject=Migration%20Consultation%20Request"
                  className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl text-center hover:bg-green-500/10 transition-colors"
                >
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">Expert Consultation</div>
                  <div className="text-sm text-gray-400">Free 30-min session</div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Request Enterprise Demo</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                    placeholder="john.doe@yourbank.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Institution Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                      placeholder="Your Bank"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Role *</label>
                    <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50">
                      <option value="">Select Role</option>
                      <option value="cto">Chief Technology Officer</option>
                      <option value="ciso">Chief Information Security Officer</option>
                      <option value="cro">Chief Risk Officer</option>
                      <option value="security">Security Manager</option>
                      <option value="compliance">Compliance Officer</option>
                      <option value="it">IT Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Institution Size</label>
                    <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50">
                      <option value="">Select Size</option>
                      <option value="small">Regional (&lt;€5B assets)</option>
                      <option value="medium">National (€5-50B assets)</option>
                      <option value="large">International (&gt;€50B assets)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                    <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50">
                      <option value="">Select Timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="soon">Soon (3-6 months)</option>
                      <option value="planning">Planning (6+ months)</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                    placeholder="Tell us about your quantum security challenges and goals..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500/50"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300">
                    I agree to receive communications about Rivic's quantum-safe security solutions. 
                    <a href="/privacy" className="text-cyan-400 hover:underline ml-1">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Request Enterprise Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
