"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, DollarSign, Clock, Users, AlertTriangle } from "lucide-react"

export function ROICalculatorSection() {
  const [bankSize, setBankSize] = useState<"small" | "medium" | "large">("medium")
  const [assets, setAssets] = useState(10) // in billions
  const [employees, setEmployees] = useState(5000)
  const [currentSecurity, setCurrentSecurity] = useState(2) // in millions
  const [results, setResults] = useState({
    manualMigrationCost: 0,
    rivicCost: 0,
    savings: 0,
    timeToMarket: 0,
    riskReduction: 0,
    complianceCost: 0
  })

  useEffect(() => {
    // Calculate ROI based on inputs
    const baseComplianceCost = assets * 0.05 // 0.05% of assets for compliance violations
    const manualMigrationCost = employees * 1.2 + (assets * 0.3) // Manual migration cost
    const rivicCost = Math.min(manualMigrationCost * 0.15, 500000) // Rivic is 15% of manual cost, capped at 500k
    const savings = manualMigrationCost - rivicCost
    const timeToMarket = bankSize === "small" ? 6 : bankSize === "medium" ? 12 : 18 // months saved
    const riskReduction = assets * 0.02 // Risk reduction value
    
    setResults({
      manualMigrationCost,
      rivicCost,
      savings,
      timeToMarket,
      riskReduction,
      complianceCost: baseComplianceCost
    })
  }, [bankSize, assets, employees, currentSecurity])

  const bankSizePresets = {
    small: { assets: 2, employees: 1000, description: "Regional Bank" },
    medium: { assets: 10, employees: 5000, description: "National Bank" },
    large: { assets: 50, employees: 20000, description: "International Bank" }
  }

  const handleBankSizeChange = (size: "small" | "medium" | "large") => {
    setBankSize(size)
    setAssets(bankSizePresets[size].assets)
    setEmployees(bankSizePresets[size].employees)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Calculate Your Savings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much time and money Rivic can save your institution compared to manual quantum-safe migration.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Your Institution</h3>
              
              {/* Bank Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Institution Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(bankSizePresets).map(([size, preset]) => (
                    <button
                      key={size}
                      onClick={() => handleBankSizeChange(size as "small" | "medium" | "large")}
                      className={`p-3 rounded-lg text-center transition-colors ${
                        bankSize === size
                          ? "bg-cyan-500/20 border border-cyan-500/50 text-cyan-400"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-medium">{preset.description}</div>
                      <div className="text-xs opacity-70">€{preset.assets}B assets</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Assets Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Total Assets (€ billions)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={assets}
                  onChange={(e) => setAssets(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              {/* Employees Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  min="100"
                  step="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              {/* Current Security Spend */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Annual Security Budget (€ millions)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={currentSecurity}
                  onChange={(e) => setCurrentSecurity(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Savings Summary */}
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Potential Savings</h3>
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {formatCurrency(results.savings)}
              </div>
              <div className="text-sm text-gray-300">vs. manual migration approach</div>
            </div>

            {/* Cost Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-300">Manual Migration</span>
                </div>
                <div className="text-xl font-bold text-white">{formatCurrency(results.manualMigrationCost)}</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Rivic Platform</span>
                </div>
                <div className="text-xl font-bold text-white">{formatCurrency(results.rivicCost)}</div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="space-y-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Time Saved</span>
                </div>
                <div className="text-xl font-bold text-white">{results.timeToMarket} months</div>
                <div className="text-xs text-gray-400">Faster time to compliance</div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Risk Reduction Value</span>
                </div>
                <div className="text-xl font-bold text-white">{formatCurrency(results.riskReduction)}</div>
                <div className="text-xs text-gray-400">Annual risk mitigation</div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Schedule a personalized demo to see exactly how Rivic fits your infrastructure.
              </p>
              <a
                href="mailto:sales@rivic.io?subject=ROI%20Calculator%20Demo%20Request"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
