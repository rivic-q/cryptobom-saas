import type { Metadata } from "next"
import { AuthForm } from "@/components/auth-form"

export const metadata: Metadata = {
  title: "Register - CryptoBOM SaaS | Start Your Quantum-Safe Journey",
  description: "Create your CryptoBOM SaaS account. Get started with free CBOM scanning, compliance monitoring, and quantum-safe cryptographic asset management.",
  keywords: [
    "cryptobom register",
    "sign up",
    "cbom account creation",
    "quantum safe registration",
    "compliance monitoring signup"
  ]
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950">
      <AuthForm mode="register" />
    </div>
  )
}
