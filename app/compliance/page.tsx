import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComplianceDashboardPage } from "@/components/compliance-dashboard-page"

export const metadata: Metadata = {
  title: "Compliance Dashboard - CryptoBOM Verification & Regulatory Monitoring | BSI, NIST, DORA, eIDAS",
  description: "Interactive compliance dashboard for CBOM verification and regulatory monitoring. Real-time BSI TR-02102, NIST PQC, DORA, CRA, and eIDAS 2.0 compliance tracking with automated verification tools.",
  keywords: [
    "cbom verification",
    "compliance dashboard", 
    "cryptographic compliance",
    "bsi tr-02102 verification",
    "nist pqc compliance",
    "dora monitoring",
    "eidas verification",
    "regulatory dashboard",
    "crypto asset verification",
    "automated compliance checking"
  ]
}

export default function ComplianceDashboardPageRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <ComplianceDashboardPage />
      </main>
      <Footer />
    </div>
  )
}
