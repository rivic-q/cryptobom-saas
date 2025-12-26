import { Header } from "@/components/header"
import { HolidayGreeting } from "@/components/holiday-greeting"
import { HeroSection } from "@/components/hero-section"
import { OfferingsSection } from "@/components/offerings-section"
import { CoreEngineSection } from "@/components/core-engine-section"
import { TechnicalArchitectureSection } from "@/components/technical-architecture-section"
import { ApiSection } from "@/components/api-section"
import { PartnerLogos } from "@/components/partner-logos"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { CompetitiveComparisonSection } from "@/components/competitive-comparison-section"
import { RegulatoryComplianceSection } from "@/components/regulatory-compliance-section"
import { OpenSourceSection } from "@/components/open-source-section"
import { ComplianceDashboard } from "@/components/compliance-dashboard"
import { SecurityCertificationsSection } from "@/components/security-certifications-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { TeamSection } from "@/components/team-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { WhitepaperSection } from "@/components/whitepaper-section"
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
        {/* Hero & Core Value */}
        <HeroSection />
        <OfferingsSection />
        <CoreEngineSection />
        <TechnicalArchitectureSection />
        <ApiSection />
        <PartnerLogos />
        
        {/* Main Content Sections */}
        <ProblemSolutionSection />
        <ArchitectureSection />
        
        {/* Technical & Business Info */}
        <WhitepaperSection />
        <RegulatoryComplianceSection />
        <PricingSection />
        
        {/* Company Info */}
        <TeamSection />
        <FAQSection />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
