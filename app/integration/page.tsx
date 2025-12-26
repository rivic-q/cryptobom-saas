import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IntegrationDemo } from "@/components/integration-demo"

export const metadata: Metadata = {
  title: "Live Integration Demo - CNCF CBOM with IBM Quantum | Interactive Kubernetes Demo",
  description: "Interactive live demo of CNCF CBOM integration with IBM Quantum attestation. See real-time Kubernetes deployment, container scanning, and quantum-safe cryptographic validation.",
  keywords: [
    "integration demo",
    "live demo",
    "kubernetes cbom",
    "ibm quantum demo", 
    "container scanning demo",
    "quantum attestation demo",
    "cloud native security",
    "interactive demo",
    "cbom integration",
    "quantum safe demo"
  ]
}

export default function IntegrationDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <IntegrationDemo />
      </main>
      <Footer />
    </div>
  )
}
