import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { CompetitiveComparisonSection } from "@/components/competitive-comparison-section"
import { SecurityCertificationsSection } from "@/components/security-certifications-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Pricing - Rivic Quantum-Safe Banking Security | Enterprise PQC Migration Plans",
  description: "Transparent pricing for quantum-safe banking migration. Open source CBOM scanner, Premium Q-Hook runtime, Enterprise IBM attestation. ROI calculator included. Save millions vs manual migration.",
  keywords: ["quantum-safe pricing", "PQC migration cost", "enterprise security pricing", "banking security budget", "eIDAS 2.0 cost"],
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the right plan for your quantum-safe migration journey. Start with open source, scale to enterprise.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="text-green-400 text-sm font-medium">
                💰 Save up to 85% vs manual migration
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <PricingSection />
        
        {/* ROI Calculator */}
        <ROICalculatorSection />
        
        {/* Competitive Comparison */}
        <CompetitiveComparisonSection />
        
        {/* Customer Testimonials */}
        <TestimonialsSection />
        
        {/* Security & Compliance */}
        <SecurityCertificationsSection />
        
        {/* Enterprise CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Bank's Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 50+ EU banks already protected by Rivic's quantum-safe platform. 
              Schedule a demo to see your personalized migration plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@rivic.io?subject=Enterprise%20Demo%20Request"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Schedule Enterprise Demo
              </a>
              <a
                href="/demo"
                className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Try Interactive Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
