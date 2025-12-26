"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Cpu, 
  Container, 
  Cloud, 
  Activity, 
  Shield, 
  BarChart3,
  Settings,
  Globe,
  Lock,
  ArrowRight,
  Zap,
  Monitor,
  Database
} from "lucide-react"
import { Button } from "@/components/ui/button"

const dashboards = [
  {
    id: "core",
    title: "🧠 Rivic Core Neuron",
    description: "Complete system overview with real-time performance metrics, quantum integration status, and compliance monitoring",
    icon: Cpu,
    href: "/dashboard/core",
    color: "from-cyan-500 to-purple-500",
    features: [
      "Multi-language engine monitoring",
      "IBM Quantum Network integration",
      "Real-time performance metrics",
      "Infrastructure health tracking"
    ],
    metrics: {
      uptime: "99.97%",
      latency: "<50ms",
      throughput: "10K+/sec"
    }
  },
  {
    id: "compliance",
    title: "🏛️ Compliance Dashboard",
    description: "Real-time regulatory compliance monitoring across BSI, NIST, DORA, eIDAS 2.0, and CRA frameworks",
    icon: Shield,
    href: "/compliance",
    color: "from-green-500 to-emerald-500", 
    features: [
      "Multi-framework compliance",
      "CBOM verification engine",
      "Automated report generation",
      "Policy violation detection"
    ],
    metrics: {
      frameworks: "5",
      score: "87%",
      checks: "24/7"
    }
  },
  {
    id: "scanning",
    title: "📦 Container Scanning",
    description: "Comprehensive CBOM analysis for containers, Kubernetes clusters, and cloud-native applications",
    icon: Container,
    href: "/dashboard/scanning",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Real-time container scanning",
      "Vulnerability detection",
      "Algorithm inventory",
      "CycloneDX export"
    ],
    metrics: {
      scanned: "2.3K+",
      algorithms: "15K+",
      accuracy: "98.7%"
    }
  },
  {
    id: "cloud",
    title: "☁️ Cloud Integration",
    description: "Multi-cloud deployment management with IBM Cloud, AWS, Azure, and Google Cloud Platform integrations",
    icon: Cloud,
    href: "/dashboard/cloud",
    color: "from-purple-500 to-pink-500",
    features: [
      "Multi-cloud deployments",
      "Quantum service integration",
      "Cost analytics",
      "Auto-scaling management"
    ],
    metrics: {
      providers: "4",
      regions: "12",
      uptime: "99.99%"
    }
  },
  {
    id: "api",
    title: "📊 API Monitoring",
    description: "Advanced API performance analytics, security monitoring, and custom dashboard creation",
    icon: Activity,
    href: "/dashboard/api",
    color: "from-emerald-500 to-green-500",
    features: [
      "Real-time API metrics",
      "Security event tracking",
      "Custom dashboard builder",
      "Performance optimization"
    ],
    metrics: {
      endpoints: "50+",
      requests: "1M+/day",
      availability: "99.9%"
    }
  },
  {
    id: "quantum",
    title: "⚛️ Quantum Operations",
    description: "IBM Quantum Network integration with hardware attestation, entropy generation, and quantum job monitoring",
    icon: Zap,
    href: "/dashboard/quantum",
    color: "from-indigo-500 to-purple-500",
    features: [
      "IBM Quantum hardware access",
      "Quantum attestation service",
      "Hardware entropy generation", 
      "Job queue monitoring"
    ],
    metrics: {
      backends: "15",
      jobs: "500+/day",
      fidelity: "98.7%"
    },
    comingSoon: true
  }
]

export default function DashboardHub() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div
        className="pt-32 pb-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Monitor className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise Dashboards</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🎛️ Rivic Core Neuron
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete visibility and control over your quantum-safe cryptographic infrastructure. 
            Monitor performance, ensure compliance, and manage multi-cloud deployments from unified dashboards.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm">All Systems Operational</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm">IBM Quantum Connected</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {dashboards.map((dashboard, index) => {
            const IconComponent = dashboard.icon
            
            return (
              <motion.div
                key={dashboard.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${dashboard.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl`} />
                
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${dashboard.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{dashboard.title}</h3>
                        {dashboard.comingSoon && (
                          <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-400 text-xs font-medium">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {dashboard.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {dashboard.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(dashboard.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-white mb-1">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-4">
                    <Link href={dashboard.href} className="flex-1">
                      <Button 
                        className={`w-full bg-gradient-to-r ${dashboard.color} hover:opacity-90 text-white ${
                          dashboard.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={dashboard.comingSoon}
                      >
                        {dashboard.comingSoon ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Coming Soon
                          </>
                        ) : (
                          <>
                            <Monitor className="w-4 h-4 mr-2" />
                            Open Dashboard
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Platform Overview</h2>
            <p className="text-gray-300">
              Real-time system metrics across all Rivic Core Neuron components
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <Database className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">47.2K</div>
              <div className="text-gray-400">Algorithms Analyzed</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <Container className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">2,341</div>
              <div className="text-gray-400">Containers Scanned</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">99.97%</div>
              <div className="text-gray-400">Compliance Score</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">1,247</div>
              <div className="text-gray-400">Quantum Jobs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
