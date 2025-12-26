import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Calendar, Scale, Shield, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - CryptoBOM SaaS | Legal Agreement",
  description: "Terms of Service for CryptoBOM SaaS quantum-safe cryptographic services. German law compliance, user rights, and service conditions.",
  keywords: [
    "terms of service",
    "legal agreement",
    "service terms",
    "user agreement",
    "cryptobom terms",
    "saas terms",
    "german law",
    "quantum cryptography terms"
  ]
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Scale className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Legal terms and conditions governing the use of CryptoBOM SaaS 
              quantum-safe cryptographic services and platform access.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last Updated: January 1, 2025
              </span>
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                German Law
              </span>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Important Legal Notice</h3>
                <p className="text-white/80">
                  By accessing or using CryptoBOM SaaS services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services. 
                  These terms are governed by German law and EU regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                1. Service Description
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  CryptoBOM SaaS ("Service") is a quantum-safe cryptographic platform providing:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Quantum-resistant cryptographic algorithm implementation</li>
                  <li>Cryptographic Bill of Materials (CBOM) generation and management</li>
                  <li>Post-quantum cryptography transition tools</li>
                  <li>Compliance monitoring and reporting features</li>
                  <li>API access for enterprise integration</li>
                </ul>
                <p>
                  Our services are designed to help organizations prepare for and implement 
                  quantum-safe cryptographic solutions in accordance with NIST, BSI, and international standards.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                2. Acceptable Use
              </h2>
              <div className="space-y-4 text-white/80">
                <p><strong className="text-white">Permitted Uses:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Commercial and enterprise cryptographic implementations</li>
                  <li>Research and development in quantum-safe cryptography</li>
                  <li>Compliance testing and certification processes</li>
                  <li>Educational and academic research purposes</li>
                </ul>
                
                <p className="mt-6"><strong className="text-white">Prohibited Uses:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Illegal activities or circumventing security measures</li>
                  <li>Reverse engineering or attempting to extract proprietary algorithms</li>
                  <li>Sharing account credentials or unauthorized access</li>
                  <li>Overloading systems or attempting denial-of-service attacks</li>
                  <li>Using services for competing cryptographic platform development</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-400" />
                3. Data Protection & Privacy
              </h2>
              <div className="space-y-4 text-white/80">
                <p>
                  We are committed to protecting your data in accordance with GDPR and German BDSG:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>All data processing complies with GDPR Articles 5-6</li>
                  <li>Cryptographic data is processed only for service delivery</li>
                  <li>No personal data is used for algorithm training without consent</li>
                  <li>Data retention periods comply with legal requirements</li>
                  <li>Users maintain full control over their cryptographic configurations</li>
                </ul>
                <p>
                  For detailed information, please refer to our 
                  <a href="/privacy" className="text-cyan-400 hover:underline"> Privacy Policy</a>.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">4. Service Availability & Support</h2>
              <div className="space-y-4 text-white/80">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Service Level Agreement</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>99.9% uptime guarantee for Enterprise plans</li>
                      <li>24/7 monitoring and incident response</li>
                      <li>Scheduled maintenance with 48h notice</li>
                      <li>Automatic failover and data backup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Support Channels</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Email support: support@rivic.xyz</li>
                      <li>Technical documentation and guides</li>
                      <li>Enterprise phone support (paid plans)</li>
                      <li>Community forum and knowledge base</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">5. Intellectual Property</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong className="text-white">Our Intellectual Property:</strong> 
                  CryptoBOM SaaS platform, algorithms, documentation, and related materials 
                  are proprietary and protected by German and international intellectual property laws.
                </p>
                <p>
                  <strong className="text-white">Your Content:</strong> 
                  You retain ownership of your cryptographic configurations, keys, and data. 
                  We do not claim ownership of your content or cryptographic implementations.
                </p>
                <p>
                  <strong className="text-white">Limited License:</strong> 
                  We grant you a limited, non-exclusive, non-transferable license to use 
                  our services in accordance with these terms and your subscription plan.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">6. Limitation of Liability</h2>
              <div className="space-y-4 text-white/80">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
                  <p className="text-yellow-200 font-medium">
                    Important: Cryptographic implementations require careful testing and validation. 
                    Users are responsible for security testing in their specific environments.
                  </p>
                </div>
                <p>
                  To the maximum extent permitted by German law:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Services are provided "as is" without warranties beyond statutory requirements</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Liability is limited to the amount paid for services in the preceding 12 months</li>
                  <li>Users must validate cryptographic implementations for their use cases</li>
                  <li>We do not guarantee protection against all quantum computing attacks</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">7. Termination</h2>
              <div className="space-y-4 text-white/80">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">By You</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Cancel anytime with 30 days notice</li>
                      <li>Data export available for 90 days</li>
                      <li>Pro-rated refunds for annual plans</li>
                      <li>Account deletion upon request</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">By Us</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Violation of terms with 14 days notice</li>
                      <li>Non-payment after 30 days grace period</li>
                      <li>Immediate suspension for security violations</li>
                      <li>Service discontinuation with 90 days notice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">8. Governing Law</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  These Terms of Service are governed by German law. 
                  Any disputes will be resolved in the courts of Berlin, Germany. 
                  EU consumer protection laws apply where applicable.
                </p>
                <p>
                  <strong className="text-white">EU Citizens:</strong> 
                  Nothing in these terms limits your statutory rights under EU consumer protection directives.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
            <p className="text-white/80 mb-6">
              Contact our legal team for clarifications or questions about these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:legal@rivic.xyz" 
                className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                legal@rivic.xyz
              </a>
              <a 
                href="/dpo" 
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                Data Protection Officer
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
