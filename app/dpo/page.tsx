import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Mail, Phone, MapPin, Clock, User, AlertTriangle, CheckCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Protection Officer - CryptoBOM SaaS | GDPR Compliance Contact",
  description: "Contact our Data Protection Officer for GDPR requests, privacy concerns, and data protection inquiries. EU-compliant quantum-safe cryptographic services.",
  keywords: [
    "data protection officer",
    "dpo contact", 
    "gdpr requests",
    "privacy officer",
    "data protection contact",
    "berlin dpo",
    "eu privacy",
    "cryptobom privacy"
  ]
}

export default function DPOContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">GDPR Article 37-39</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data Protection Officer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your dedicated contact for all data protection matters, GDPR requests, 
              and privacy concerns regarding CryptoBOM SaaS services.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Response within 72 hours
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                GDPR Certified
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* DPO Information */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Revan Sai Ande</h2>
                  <p className="text-cyan-400 font-medium">Data Protection Officer</p>
                  <p className="text-white/60 text-sm">CryptoBOM SaaS (Rivic)</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">dpo@rivic.xyz</p>
                    <p className="text-white/60 text-sm">Primary DPO contact</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Rivic.revan.ande@gmail.com</p>
                    <p className="text-white/60 text-sm">Alternative contact</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">+49 155 1048 0340</p>
                    <p className="text-white/60 text-sm">Privacy hotline</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Berlin, Germany</p>
                    <p className="text-white/60 text-sm">EU jurisdiction</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  DPO Qualifications
                </h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• GDPR/DSGVO compliance certification</li>
                  <li>• Data protection in financial services</li>
                  <li>• Quantum cryptography security expertise</li>
                  <li>• EU privacy law specialization</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Submit GDPR Request</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Request Type</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Select request type</option>
                    <option value="access">Data Access Request (Art. 15)</option>
                    <option value="rectification">Data Correction (Art. 16)</option>
                    <option value="erasure">Data Deletion (Art. 17)</option>
                    <option value="portability">Data Portability (Art. 20)</option>
                    <option value="objection">Object to Processing (Art. 21)</option>
                    <option value="restriction">Restrict Processing (Art. 18)</option>
                    <option value="complaint">Privacy Complaint</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="Your full legal name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Request Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="Please describe your data protection request in detail..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <label className="text-white/80 text-sm">
                    I confirm my identity and authorize this GDPR request. I understand that 
                    identity verification may be required for data protection requests.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* GDPR Information Boxes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold text-white">Response Time</h3>
              </div>
              <p className="text-white/80 text-sm">
                We respond to all GDPR requests within 30 days as mandated by Article 12. 
                Urgent privacy matters within 72 hours.
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h3 className="font-semibold text-white">Free of Charge</h3>
              </div>
              <p className="text-white/80 text-sm">
                All GDPR requests are processed free of charge. 
                No fees for exercising your fundamental privacy rights.
              </p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h3 className="font-semibold text-white">Secure Process</h3>
              </div>
              <p className="text-white/80 text-sm">
                Identity verification required for sensitive requests. 
                All communications encrypted and logged.
              </p>
            </div>
          </div>

          {/* Supervisory Authority */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Right to Lodge a Complaint</h3>
                <p className="text-white/80 mb-4">
                  If you believe your data protection rights have been violated, 
                  you have the right to lodge a complaint with the supervisory authority:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">
                    Berlin Commissioner for Data Protection and Freedom of Information
                  </h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p>Friedrichstr. 219, 10969 Berlin, Germany</p>
                    <p>Phone: +49 30 13889-0</p>
                    <p>Email: mailbox@datenschutz-berlin.de</p>
                    <p>Website: datenschutz-berlin.de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
