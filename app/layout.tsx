import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "QMCF - Quantum Mesh Cryptographic Foundation | EU Banking Quantum-Safe Security Platform",
  description:
    "Quantum Mesh Cryptographic Foundation (QMCF) - Leading quantum-safe security platform for EU banking. Zero-code post-quantum cryptography migration, CBOM scanning, eIDAS 2.0 & DORA compliance. Enterprise-ready quantum protection.",
  keywords: [
    "quantum mesh cryptographic foundation",
    "qmcf platform",
    "quantum-safe banking",
    "post-quantum cryptography",
    "eu banking security",
    "zero-code migration", 
    "cbom scanner",
    "cryptographic bill of materials",
    "regulatory compliance",
    "BSI TR-02102",
    "NIST FIPS 203",
    "NIST FIPS 204", 
    "NIST FIPS 205",
    "DORA compliance",
    "CRA cyber resilience act",
    "eIDAS 2.0",
    "quantum-safe cryptography",
    "post-quantum cryptography",
    "crypto asset discovery",
    "EU banking security",
    "open source CBOM",
    "cryptographic inventory", 
    "NIST FIPS 203",
    "NIST FIPS 204",
    "NIST FIPS 205",
    "quantum threat",
    "HNDL attacks",
    "cryptographic migration",
    "financial services security",
    "Kubernetes PQC",
    "IBM Quantum attestation",
    "CycloneDX CBOM",
    "zero-code deployment",
    "hybrid cryptography",
    "quantum-resistant algorithms"
  ],
  authors: [{ name: "Rivic Security Team" }],
  creator: "Rivic",
  publisher: "Rivic GmbH",
  robots: "index, follow",
  metadataBase: new URL("https://rivic.io"),
  alternates: {
    canonical: "https://rivic.io",
    languages: {
      "en-US": "https://rivic.io",
      "de-DE": "https://rivic.io/de"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rivic.io",
    siteName: "QMCF - Quantum Mesh Cryptographic Foundation",
    title: "QMCF - Quantum-Safe Banking Security for EU Financial Institutions",
    description: "Quantum Mesh Cryptographic Foundation (QMCF) provides zero-code quantum-safe cryptographic migration for EU banking. eIDAS 2.0 & DORA compliant. Deploy quantum protection in weeks, not years.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QMCF Quantum Mesh Cryptographic Foundation Platform",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "QMCF - Quantum Mesh Cryptographic Foundation",
    description: "Zero-code quantum-safe migration for EU banks. eIDAS 2.0 ready, DORA compliant. Deploy quantum-safe crypto in weeks with QMCF.",
    creator: "@RivicSecurity",
    site: "@RivicSecurity",
    images: [
      {
        url: "/og-image.png", 
        alt: "Rivic Quantum-Safe Banking Security"
      }
    ]
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  category: "Technology",
  classification: "B2B SaaS Security Platform",
  other: {
    "price": "Enterprise",
    "availability": "EU",
    "industry": "Financial Services"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <StructuredData />
      <ClientLayout>{children}</ClientLayout>
    </>
  )
}
