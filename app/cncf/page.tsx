import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CNCFPage } from "@/components/cncf-page"

export const metadata: Metadata = {
  title: "CNCF Integration - Cloud Native CBOM with IBM Quantum Attestation | Pay-as-You-Go",
  description: "Cloud Native Computing Foundation integrated CBOM platform with IBM Cloud quantum attestation. Enterprise-grade pay-as-you-go cryptographic asset management for cloud-native applications.",
  keywords: [
    "cncf integration",
    "cloud native cbom",
    "ibm quantum cloud",
    "quantum attestation",
    "pay as you go",
    "kubernetes cryptography",
    "cloud native security",
    "container cbom scanning",
    "quantum safe containers",
    "enterprise cloud security"
  ]
}

export default function CNCFIntegrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <CNCFPage />
      </main>
      <Footer />
    </div>
  )
}
