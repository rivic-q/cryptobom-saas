"use client"

import Script from "next/script"

export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rivic.io/#organization",
        "name": "Rivic",
        "legalName": "Rivic GmbH",
        "url": "https://rivic.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rivic.io/images/rivic.png",
          "width": 512,
          "height": 512
        },
        "description": "Leading quantum-safe cryptographic migration platform for EU banking and financial services",
        "foundingDate": "2023",
        "foundingLocation": {
          "@type": "Place",
          "name": "Berlin, Germany"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Berlin",
          "addressCountry": "DE"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+49-155-10480340",
            "email": "sales@rivic.io",
            "contactType": "sales",
            "areaServed": "EU",
            "availableLanguage": ["English", "German"]
          },
          {
            "@type": "ContactPoint", 
            "email": "support@rivic.io",
            "contactType": "customer support",
            "areaServed": "EU",
            "availableLanguage": ["English", "German"]
          }
        ],
        "sameAs": [
          "https://github.com/rivic-crypto",
          "https://linkedin.com/company/rivic-security",
          "https://twitter.com/RivicSecurity"
        ],
        "industry": "Computer Security",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 10,
          "maxValue": 25
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://rivic.io/#software",
        "name": "Rivic Quantum-Safe Platform",
        "description": "Zero-code quantum-safe cryptographic migration platform for EU banking",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Linux, Kubernetes",
        "offers": [
          {
            "@type": "Offer",
            "name": "Open Source",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "CBOM Scanner CLI with community support"
          },
          {
            "@type": "Offer", 
            "name": "Premium",
            "description": "Q-Hook Runtime with enterprise features",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "Contact for pricing",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "name": "Enterprise",
            "description": "Full platform with IBM Quantum attestation",
            "priceSpecification": {
              "@type": "PriceSpecification", 
              "price": "Contact for pricing",
              "priceCurrency": "EUR"
            }
          }
        ],
        "featureList": [
          "Zero-code deployment",
          "CBOM Scanner", 
          "Q-Hook Runtime Interceptor",
          "eIDAS 2.0 compliance",
          "DORA compliance",
          "ML-KEM/ML-DSA migration",
          "Kubernetes native",
          "IBM Quantum attestation"
        ],
        "screenshot": "https://rivic.io/demo-screenshot.png",
        "downloadUrl": "https://github.com/rivic-crypto"
      },
      {
        "@type": "WebSite",
        "@id": "https://rivic.io/#website",
        "url": "https://rivic.io",
        "name": "Rivic - Quantum-Safe Banking Security",
        "description": "Zero-code quantum-safe cryptographic migration for EU banking and financial services",
        "publisher": {
          "@id": "https://rivic.io/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rivic.io/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://rivic.io/#webpage", 
        "url": "https://rivic.io",
        "name": "Rivic - Leading Quantum-Safe Security for EU Banking",
        "isPartOf": {
          "@id": "https://rivic.io/#website"
        },
        "about": {
          "@id": "https://rivic.io/#organization"
        },
        "description": "Zero-code quantum-safe cryptographic migration for EU financial institutions. eIDAS 2.0 & DORA compliant. Deploy in weeks, not years.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://rivic.io"
            }
          ]
        }
      }
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData)
      }}
    />
  )
}
