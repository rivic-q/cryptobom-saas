import type { Metadata } from "next"
import { AuthForm } from "@/components/auth-form"

export const metadata: Metadata = {
  title: "Sign In - CryptoBOM SaaS | Access Your Quantum-Safe CBOM Dashboard",
  description: "Sign in to your CryptoBOM SaaS account. Access your cryptographic asset inventory, compliance monitoring, and IBM Quantum attestation dashboard.",
  keywords: [
    "cryptobom sign in",
    "login",
    "cbom dashboard access",
    "quantum safe login",
    "compliance dashboard login"
  ]
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950">
      <AuthForm mode="signin" />
    </div>
  )
}
