import { Button } from "./ui/button"
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["RIVIC", "QUANTUM", "SECURE", "BANKING"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-balance">
            Quantum-Safe Banking Infrastructure.{" "}
            <span className="text-gray-300">Zero Code Changes. Full Compliance.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">eIDAS 2.0 Deadline: Sept 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">NIST ML-KEM/ML-DSA Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">DORA Compliant</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Read Whitepaper
            </Button>
          </div>

          <div className="mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-sm text-gray-400">Partners & Ecosystem</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={80}>
                    {/* IBM */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-white font-bold text-lg">IBM</span>
                      <span className="text-gray-500 text-xs">Quantum</span>
                    </div>
                    {/* SIB - Startup Incubator Berlin */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-cyan-400 font-bold text-lg">SIB</span>
                      <span className="text-gray-500 text-xs">Berlin</span>
                    </div>
                    {/* HWR Berlin */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-emerald-400 font-bold text-lg">HWR</span>
                      <span className="text-gray-500 text-xs">Berlin</span>
                    </div>
                    {/* Berlin Quantum */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-purple-400 font-bold text-lg">BQ</span>
                      <span className="text-gray-500 text-xs">Alliance</span>
                    </div>
                    {/* CNCF */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-blue-400 font-bold text-lg">CNCF</span>
                      <span className="text-gray-500 text-xs">Cloud Native</span>
                    </div>
                    {/* TU Berlin */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-red-400 font-bold text-lg">TUB</span>
                      <span className="text-gray-500 text-xs">Security</span>
                    </div>
                    {/* NIST */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                      <span className="text-amber-400 font-bold text-lg">NIST</span>
                      <span className="text-gray-500 text-xs">Certified</span>
                    </div>
                  </InfiniteSlider>

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
