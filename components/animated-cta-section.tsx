"use client"

import { useRef } from "react"
import { Button } from "./ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { BackgroundPaths } from "./ui/floating-paths"

export function AnimatedCTASection() {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <BackgroundPaths />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div
        className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto">
        <div
          className="rounded-2xl p-12 text-center animate-fade-in-up"
          ref={contentRef}
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Calendar className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">eIDAS 2.0 Deadline: September 2026</span>
          </div>

          <h2
            className="text-4xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up"
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.5s" }}
          >
            Ready to Go Quantum-Safe?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            Join leading EU banks migrating to post-quantum cryptography. Deploy in 3 weeks. Go live in 8 weeks. Zero
            code changes.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 group">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
