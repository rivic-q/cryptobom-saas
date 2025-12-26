import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "CryptoBOM SaaS - Quantum-Safe CBOM Scanner | Open Source Cryptographic Asset Discovery",
  description:
    "Leading open source Cryptographic Bill of Materials platform for EU banking. Complete crypto asset discovery, quantum-safe analysis, eIDAS 2.0 & DORA compliance. Deploy CBOM scanning in minutes, get full visibility into cryptographic risks.",
  keywords: [
    "cryptographic bill of materials",
    "CBOM scanner", 
    "quantum-safe cryptography",
    "post-quantum cryptography",
    "crypto asset discovery",
    "EU banking security",
    "eIDAS 2.0 compliance",
    "DORA compliance",
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
    siteName: "Rivic - Quantum-Safe Banking Security",
    title: "Rivic - Leading Quantum-Safe Security for EU Banking",
    description: "Zero-code quantum-safe cryptographic migration for EU financial institutions. eIDAS 2.0 & DORA compliant. Deploy in weeks, not years.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rivic Quantum-Safe Banking Security Platform",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivic - Quantum-Safe Banking Security",
    description: "Zero-code PQC migration for EU banks. eIDAS 2.0 ready, DORA compliant. Deploy quantum-safe crypto in weeks.",
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
