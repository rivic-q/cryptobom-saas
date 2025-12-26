"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

export function HolidayGreeting() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative w-full bg-gradient-to-r from-emerald-900/30 via-red-900/20 to-emerald-900/30 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4">
        <motion.div
          className="flex items-center gap-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-2xl">🎄</span>
          <div className="text-center">
            <p className="text-white font-medium text-sm md:text-base">
              <span className="text-yellow-400">Merry Christmas</span> &{" "}
              <span className="text-cyan-400">Happy New Year 2026!</span>
            </p>
            <p className="text-white/70 text-xs md:text-sm">Building Quantum-Safe Security for Tomorrow</p>
          </div>
          <span className="text-2xl">🎁</span>
        </motion.div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close greeting"
        >
          <X className="w-4 h-4 text-white/50" />
        </button>
      </div>
    </motion.div>
  )
}
