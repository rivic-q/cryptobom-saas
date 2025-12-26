import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Mail, Phone, MapPin, Clock, FileText, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - CryptoBOM SaaS | GDPR Compliance & Data Protection",
  description: "CryptoBOM SaaS Privacy Policy. GDPR compliant data processing, user rights, and comprehensive privacy protection for quantum-safe cryptographic services.",
  keywords: [
    "privacy policy",
    "gdpr compliance", 
    "data protection",
    "user privacy",
    "cryptobom privacy",
    "quantum security privacy",
    "eu data protection",
    "berlin privacy",
    "banking privacy"
  ]
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">GDPR Compliant</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is fundamental to our quantum-safe security mission. 
              This policy explains how we collect, use, and protect your data.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: December 26, 2025
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                GDPR Article 13 & 14
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none">
            
            {/* 1. Controller Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                Data Controller Information
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Controller Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/80 mb-4">
                      <strong>Company:</strong> CryptoBOM SaaS (Rivic)<br/>
                      <strong>Legal Form:</strong> Individual Entrepreneur<br/>
                      <strong>Registration:</strong> Berlin, Germany
                    </p>
                  </div>
                  <div className="space-y-3 text-white/70">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Berlin, Germany</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <a href="mailto:Rivic.revan.ande@gmail.com" className="hover:text-white transition-colors">
                        Rivic.revan.ande@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <a href="tel:+4915510480340" className="hover:text-white transition-colors">
                        +49 155 1048 0340
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Data We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">2</span>
                </div>
                Data Collection & Processing
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Email address (for authentication and communication)</li>
                    <li>• Name and company details (for service personalization)</li>
                    <li>• Password (encrypted with industry-standard methods)</li>
                    <li>• Account preferences and settings</li>
                  </ul>
                  <p className="text-sm text-cyan-400 mt-3">
                    <strong>Legal Basis:</strong> Contract performance (Art. 6(1)(b) GDPR)
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Technical Data</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• CBOM scan results and cryptographic inventory</li>
                    <li>• Usage analytics and performance metrics</li>
                    <li>• Error logs and diagnostic information</li>
                    <li>• API access logs for security monitoring</li>
                  </ul>
                  <p className="text-sm text-cyan-400 mt-3">
                    <strong>Legal Basis:</strong> Legitimate interests (Art. 6(1)(f) GDPR)
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Website Analytics</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• IP address (anonymized after 30 days)</li>
                    <li>• Browser type and device information</li>
                    <li>• Page views and user interaction patterns</li>
                    <li>• Referrer URLs and navigation paths</li>
                  </ul>
                  <p className="text-sm text-cyan-400 mt-3">
                    <strong>Legal Basis:</strong> Consent (Art. 6(1)(a) GDPR)
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Data */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">3</span>
                </div>
                Data Usage & Purposes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Service Delivery</h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Provide CBOM scanning services</li>
                    <li>• Generate cryptographic reports</li>
                    <li>• IBM Quantum attestation processing</li>
                    <li>• Compliance monitoring and alerts</li>
                    <li>• Customer support and assistance</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Platform Improvement</h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Performance optimization</li>
                    <li>• Security threat detection</li>
                    <li>• Product feature development</li>
                    <li>• Quality assurance testing</li>
                    <li>• Research and analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Data Sharing & Third Parties */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">4</span>
                </div>
                Data Sharing & Third Parties
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">We Do NOT Sell Your Data</h3>
                  </div>
                  <p className="text-white/80">
                    CryptoBOM SaaS never sells, rents, or trades personal data. Your cryptographic 
                    inventory and security information remains strictly confidential.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Authorized Third Parties</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">IBM Quantum Network</h4>
                      <p className="text-white/70 text-sm">
                        Quantum attestation services. Data processed under IBM's enterprise 
                        privacy framework and EU data residency requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Cloud Infrastructure</h4>
                      <p className="text-white/70 text-sm">
                        EU-based cloud providers for hosting and data processing. 
                        All providers are GDPR compliant with appropriate safeguards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">5</span>
                </div>
                Your GDPR Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Right to Access</h4>
                    <p className="text-white/70 text-sm">Request a copy of your personal data</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Right to Rectification</h4>
                    <p className="text-white/70 text-sm">Correct inaccurate or incomplete data</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Right to Erasure</h4>
                    <p className="text-white/70 text-sm">Request deletion of your data</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Right to Portability</h4>
                    <p className="text-white/70 text-sm">Export your data in structured format</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Right to Object</h4>
                    <p className="text-white/70 text-sm">Object to processing based on legitimate interests</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Right to Restriction</h4>
                    <p className="text-white/70 text-sm">Limit how we process your data</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Contact & DPO */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">6</span>
                </div>
                Data Protection Contact
              </h2>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Our DPO</h3>
                <p className="text-white/80 mb-4">
                  For any privacy concerns, data requests, or GDPR-related inquiries:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <Link href="/dpo" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Data Protection Officer Contact
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:privacy@rivic.xyz" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      privacy@rivic.xyz
                    </a>
                  </div>
                  <p className="text-sm text-white/60">
                    We respond to all GDPR requests within 30 days as required by law.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
