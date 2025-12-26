"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Mail, 
  Lock, 
  User, 
  Building, 
  Eye, 
  EyeOff, 
  Shield, 
  CheckCircle,
  Github,
  Chrome,
  ArrowLeft
} from "lucide-react"

interface AuthFormProps {
  mode: "signin" | "register"
}

export function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isSignIn = mode === "signin"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    
    // Redirect to dashboard (simulated)
    console.log(isSignIn ? "Signing in..." : "Registering...", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">CryptoBOM SaaS</span>
            </Link>
            
            <h1 className="text-4xl font-bold mb-6">
              {isSignIn ? "Welcome Back!" : "Start Your Quantum-Safe Journey"}
            </h1>
            
            <p className="text-xl mb-8 opacity-90">
              {isSignIn 
                ? "Access your cryptographic asset inventory and compliance monitoring dashboard."
                : "Join thousands of organizations securing their cryptographic infrastructure with quantum-safe CBOM technology."
              }
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Enterprise-grade CBOM scanning</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>IBM Quantum attestation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Real-time compliance monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>BSI, NIST, DORA, eIDAS ready</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Back to Home Link */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isSignIn ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-gray-400">
              {isSignIn 
                ? "Enter your credentials to access your dashboard"
                : "Get started with your free CryptoBOM SaaS account"
              }
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isSignIn && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                      placeholder="Deutsche Bank"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-white font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                  placeholder="john.doe@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isSignIn && (
              <div>
                <label className="block text-white font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            {isSignIn && (
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-500/50"
                  />
                  <span className="text-gray-300 text-sm">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm">
                  Forgot password?
                </Link>
              </div>
            )}

            {!isSignIn && (
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-500/50"
                />
                <label htmlFor="terms" className="text-gray-300 text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isLoading 
                ? "Loading..." 
                : isSignIn 
                  ? "Sign In" 
                  : "Create Account"
              }
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link 
                href={isSignIn ? "/register" : "/signin"} 
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                {isSignIn ? "Sign up" : "Sign in"}
              </Link>
            </p>
          </div>

          {!isSignIn && (
            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-200 text-sm text-center">
                🚀 Start with our free tier: 10 container scans per month, 
                basic CBOM generation, and community support included.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
