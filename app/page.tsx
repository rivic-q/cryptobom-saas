import { Header } from "@/components/header"
import { HolidayGreeting } from "@/components/holiday-greeting"
import { HeroSection } from "@/components/hero-section"
import { PartnerLogos } from "@/components/partner-logos"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { CompetitiveComparisonSection } from "@/components/competitive-comparison-section"
import { OpenSourceSection } from "@/components/open-source-section"
import { ComplianceDashboard } from "@/components/compliance-dashboard"
import { SecurityCertificationsSection } from "@/components/security-certifications-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { TeamSection } from "@/components/team-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HolidayGreeting />
      <Header />
      <main className="pt-20">
        {/* Core Value Proposition */}
        <HeroSection />
        <PartnerLogos />
        
        {/* Problem & Solution */}
        <ProblemSolutionSection />
        <ArchitectureSection />
        
        {/* Competitive Advantage */}
        <CompetitiveComparisonSection />
        <SecurityCertificationsSection />
        
        {/* Social Proof & Trust */}
        <TestimonialsSection />
        <ComplianceDashboard />
        
        {/* Business Value */}
        <ROICalculatorSection />
        
        {/* Product Details */}
        <OpenSourceSection />
        <RoadmapSection />
        
        {/* Company & Pricing */}
        <TeamSection />
        <PricingSection />
        
        {/* Support & Conversion */}
        <FAQSection />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
