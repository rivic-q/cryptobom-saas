import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhitepaperSection } from "@/components/whitepaper-section"

export const metadata: Metadata = {
  title: "Technical Whitepaper - QMCF Architecture & Post-Quantum Security | Quantum Mesh Cryptographic Foundation",
  description: "Comprehensive technical documentation for Quantum Mesh Cryptographic Foundation (QMCF). Architecture, post-quantum cryptography, enterprise integration, and quantum computing impact analysis for EU financial institutions.",
  keywords: [
    "quantum mesh cryptographic foundation",
    "qmcf whitepaper", 
    "post-quantum cryptography",
    "quantum-safe security protocol",
    "enterprise integration",
    "ml-kem implementation",
    "ml-dsa integration",
    "quantum threat analysis",
    "financial cryptography",
    "eidas 2.0 compliance",
    "technical documentation",
    "cbom specification"
  ]
}

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <WhitepaperSection />
      </main>
      <Footer />
    </div>
  )
}
