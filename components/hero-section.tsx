import { Button } from "./ui/button"
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Particle Animation - Responsive sizing */}
      <div className="flex-1 flex items-start justify-center pt-16 sm:pt-20 lg:pt-24">
        <div className="w-full max-w-7xl">
          <ParticleTextEffect words={["RIVIC", "QSSP", "QUANTUM", "SECURE", "PROTOCOL", "ML-KEM", "ML-DSA", "QMCF", "eIDAS", "DORA"]} />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto text-center relative z-10 pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline - Responsive typography */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight">
            Quantum-Safe Security Protocol Framework.{" "}
            <span className="text-gray-300 block sm:inline mt-2 sm:mt-0">Open Source Foundation. Enterprise SaaS Platform.</span>
          </h2>

          {/* Subtitle - Clear differentiation */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose your quantum-safe journey: <strong className="text-emerald-400">Open source tools available now</strong> with streamlined setup, or <strong className="text-yellow-400">join the waitlist for enterprise SaaS APIs</strong> launching February 2026.
          </p>

          {/* Offering Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-5xl mx-auto">
            {/* Open Source Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 sm:p-8 text-left hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Open Source</h3>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">FREE</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                Community-driven quantum-safe cryptography tools for developers and small teams. <strong className="text-emerald-400">Available immediately</strong> through streamlined setup.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                  Basic CBOM scanning
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                  ML-KEM/ML-DSA implementations
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                  Community support
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                  Basic compliance reports
                </li>
              </ul>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded px-3 py-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  Streamlined setup - Ready in minutes
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              >
                Get Started Free
              </Button>
            </div>

            {/* SaaS/Enterprise Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 text-left relative overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-cyan-500 text-black px-3 py-1 rounded-full font-semibold">ENTERPRISE</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-cyan-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Rivic Core SaaS</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                Full-featured quantum-safe platform with APIs, IBM Quantum integration, and enterprise support. <strong className="text-yellow-400">Early access available February 2026.</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                  Complete Rivic Core Neuron
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                  IBM Quantum attestation
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                  Real-time compliance APIs
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                  24/7 enterprise support
                </li>
              </ul>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded px-3 py-1">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                  Join waitlist - February 2026 launch
                </div>
              </div>
              <Button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feature badges - Responsive grid */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 mx-auto sm:mx-0">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">eIDAS 2.0 Deadline: Sept 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 mx-auto sm:mx-0">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">NIST ML-KEM/ML-DSA Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 mx-auto sm:mx-0">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">DORA Compliant</span>
            </div>
          </div>

          {/* CTA Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-200 text-black group w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8"
            >
              Explore Open Source
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8"
              asChild
            >
              <a href="/#enterprise">Enterprise SaaS Demo</a>
            </Button>
          </div>

          {/* Partners Section - Enhanced responsive design */}
          <div className="mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8">
            <div className="group relative m-auto max-w-7xl">
              <div className="flex flex-col items-center">
                {/* Partners Label - Responsive */}
                <div className="mb-4 sm:mb-6 lg:hidden">
                  <p className="text-center text-xs sm:text-sm text-gray-400">Partners & Ecosystem</p>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center w-full">
                  <div className="lg:max-w-44 lg:border-r lg:border-gray-600 lg:pr-6 mb-0">
                    <p className="text-end text-sm text-gray-400">Partners & Ecosystem</p>
                  </div>
                  <div className="relative py-6 lg:w-[calc(100%-11rem)]">
                    <InfiniteSlider durationOnHover={20} duration={40} gap={80}>
                      {/* Partner logos - Desktop */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-white font-bold text-lg">IBM</span>
                        <span className="text-gray-500 text-xs">Quantum</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-cyan-400 font-bold text-lg">SIB</span>
                        <span className="text-gray-500 text-xs">Berlin</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-emerald-400 font-bold text-lg">HWR</span>
                        <span className="text-gray-500 text-xs">Berlin</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-purple-400 font-bold text-lg">BQ</span>
                        <span className="text-gray-500 text-xs">Alliance</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-blue-400 font-bold text-lg">CNCF</span>
                        <span className="text-gray-500 text-xs">Cloud Native</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-red-400 font-bold text-lg">TUB</span>
                        <span className="text-gray-500 text-xs">Security</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                        <span className="text-amber-400 font-bold text-lg">NIST</span>
                        <span className="text-gray-500 text-xs">Certified</span>
                      </div>
                    </InfiniteSlider>
                  </div>
                </div>

                {/* Mobile & Tablet Layout - Grid */}
                <div className="lg:hidden w-full px-4 sm:px-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-white font-bold text-sm sm:text-base">IBM</span>
                      <span className="text-gray-500 text-xs">Quantum</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-cyan-400 font-bold text-sm sm:text-base">SIB</span>
                      <span className="text-gray-500 text-xs">Berlin</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-emerald-400 font-bold text-sm sm:text-base">HWR</span>
                      <span className="text-gray-500 text-xs">Berlin</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-purple-400 font-bold text-sm sm:text-base">BQ</span>
                      <span className="text-gray-500 text-xs">Alliance</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-blue-400 font-bold text-sm sm:text-base">CNCF</span>
                      <span className="text-gray-500 text-xs">Cloud Native</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-red-400 font-bold text-sm sm:text-base">TUB</span>
                      <span className="text-gray-500 text-xs">Security</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-amber-400 font-bold text-sm sm:text-base">NIST</span>
                      <span className="text-gray-500 text-xs">Certified</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 bg-white/5 rounded-lg">
                      <span className="text-indigo-400 font-bold text-sm sm:text-base">BSI</span>
                      <span className="text-gray-500 text-xs">Germany</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Blur Effects */}
                <div className="hidden lg:block relative w-full">
                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
