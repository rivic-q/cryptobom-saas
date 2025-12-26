import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, User, Mail, Phone, MapPin, Scale, Globe, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Legal Imprint (Impressum) - CryptoBOM SaaS | Company Information",
  description: "Legal imprint and company information for CryptoBOM SaaS. German Impressum requirements, contact details, and business registration information.",
  keywords: [
    "impressum",
    "legal imprint",
    "company information",
    "business details",
    "german impressum",
    "rivic imprint",
    "cryptobom company",
    "berlin business"
  ]
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Building className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">TMG § 5 Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Legal Imprint
              <span className="block text-2xl text-gray-300 mt-2">(Impressum)</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Legal information and company details as required by German 
              Telemediengesetz (TMG) and EU e-Commerce Directive.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                German Law Compliance
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                EU Jurisdiction
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Company Information */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Building className="w-6 h-6 text-cyan-400" />
                Company Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Service Provider</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                    <p className="text-white font-medium text-lg">CryptoBOM SaaS</p>
                    <p className="text-white/80">Trading as: Rivic</p>
                    <p className="text-white/60 text-sm">Quantum-Safe Cryptographic Services</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3">Legal Form</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/80">
                      Individual Business Enterprise<br />
                      <span className="text-white/60 text-sm">
                        (Einzelunternehmen nach deutschem Recht)
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3">Business Registration</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                    <p className="text-white/80">Registration: Berlin Trade Office</p>
                    <p className="text-white/80">VAT ID: DE [Pending Registration]</p>
                    <p className="text-white/60 text-sm">
                      Business registration in process with Berlin authorities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-green-400" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Responsible Person</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white font-medium text-lg">Revan Sai Ande</p>
                    <p className="text-white/80">Founder & CEO</p>
                    <p className="text-white/60 text-sm">
                      Responsible for content according to TMG § 55 Abs. 2 RStV
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Business Address</p>
                      <p className="text-white/80">Berlin, Germany</p>
                      <p className="text-white/60 text-sm">
                        Full address available upon request for legal matters
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/80">Rivic.revan.ande@gmail.com</p>
                      <p className="text-white/60 text-sm">Primary business contact</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-white/80">+49 155 1048 0340</p>
                      <p className="text-white/60 text-sm">Business hours: 9-17 CET</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Website</p>
                      <p className="text-white/80">rivic.xyz</p>
                      <p className="text-white/60 text-sm">CryptoBOM SaaS Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-400" />
              Professional Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">Professional Qualifications</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Computer Science & Cryptography</li>
                  <li>• Quantum-Safe Algorithm Implementation</li>
                  <li>• GDPR/DSGVO Data Protection Certification</li>
                  <li>• Information Security Management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Professional Bodies</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• BSI (German Federal Office for Information Security)</li>
                  <li>• NIST Post-Quantum Cryptography Program</li>
                  <li>• CNCF (Cloud Native Computing Foundation)</li>
                  <li>• German Data Protection Association</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regulatory Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="w-5 h-5 text-blue-400" />
                Regulatory Compliance
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• German Telemediengesetz (TMG)</li>
                <li>• EU General Data Protection Regulation (GDPR)</li>
                <li>• German Federal Data Protection Act (BDSG)</li>
                <li>• eIDAS Regulation (Electronic Identification)</li>
                <li>• German Digital Services Act (DSA) implementation</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe className="w-5 h-5 text-green-400" />
                Jurisdiction & Disputes
              </h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p><strong className="text-white">Applicable Law:</strong> German Law</p>
                <p><strong className="text-white">Jurisdiction:</strong> Courts of Berlin, Germany</p>
                <p><strong className="text-white">EU Mediation:</strong> Available for consumer disputes</p>
                <p><strong className="text-white">Language:</strong> German (primary), English (business)</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-yellow-400" />
              Disclaimer
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p>
                <strong className="text-white">Content Accuracy:</strong> Despite careful content control, we assume no liability for the accuracy, completeness, or currentness of external links.
              </p>
              <p>
                <strong className="text-white">Copyright:</strong> All content is protected by German and international copyright law. Reproduction requires written permission.
              </p>
              <p>
                <strong className="text-white">Technical Information:</strong> Cryptographic implementations require professional evaluation for specific use cases. We recommend consulting security experts for critical applications.
              </p>
            </div>
          </div>

          {/* Alternative Dispute Resolution */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-400" />
              Alternative Dispute Resolution
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p>
                In accordance with EU Regulation 524/2013, we inform consumers about the 
                European Commission's online dispute resolution platform:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white font-medium">EC Online Dispute Resolution</p>
                <p className="text-cyan-400">https://ec.europa.eu/consumers/odr</p>
              </div>
              <p>
                We are committed to participating in dispute resolution proceedings 
                before consumer arbitration boards where required by law.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
