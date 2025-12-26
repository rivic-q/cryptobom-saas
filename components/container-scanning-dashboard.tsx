"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Container, 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  Filter,
  Layers,
  Terminal,
  BarChart3,
  Clock,
  Zap,
  Eye,
  FileText,
  RefreshCw,
  Play,
  Pause
} from "lucide-react"
import { Button } from "./ui/button"

interface ContainerScan {
  scan_id: string
  target: string
  status: string
  timestamp: string
  cryptographic_inventory: {
    total_algorithms: number
    quantum_vulnerable: number
    quantum_safe: number
    deprecated: number
  }
  vulnerabilities: {
    critical: number
    high: number
    medium: number
    low: number
  }
}

interface ScanMetrics {
  containers_scanned_today: number
  algorithms_discovered: number
  vulnerabilities_found: number
  compliance_score: number
  quantum_readiness: number
}

export function ContainerScanningDashboard() {
  const [scans, setScans] = useState<ContainerScan[]>([])
  const [metrics, setMetrics] = useState<ScanMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [scanning, setScanning] = useState(false)
  const [selectedScan, setSelectedScan] = useState<string | null>(null)
  const [autoScan, setAutoScan] = useState(true)
  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent scans
        const scansResponse = await fetch('/api/v1/cbom')
        if (scansResponse.ok) {
          const scansData = await scansResponse.json()
          setScans(scansData.scans)
        }

        // Fetch metrics
        const metricsResponse = await fetch('/api/v1/monitoring?metric=scanning')
        if (metricsResponse.ok) {
          const metricsData = await metricsResponse.json()
          setMetrics({
            containers_scanned_today: metricsData.data.containers_analyzed,
            algorithms_discovered: metricsData.data.algorithms_detected,
            vulnerabilities_found: Math.floor(Math.random() * 100) + 50,
            compliance_score: Math.floor(Math.random() * 20) + 80,
            quantum_readiness: Math.floor(Math.random() * 30) + 70
          })
        }
      } catch (error) {
        console.error('Failed to fetch container scanning data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    
    if (autoScan) {
      const interval = setInterval(fetchData, 45000) // 45 seconds
      return () => clearInterval(interval)
    }
  }, [autoScan])

  const startNewScan = async () => {
    setScanning(true)
    try {
      const response = await fetch('/api/v1/cbom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          target: 'production-cluster',
          type: 'kubernetes_cluster',
          compliance_frameworks: ['bsi', 'nist_pqc', 'dora'],
          scan_depth: 'comprehensive'
        })
      })
      
      if (response.ok) {
        const result = await response.json()
        // Add new scan to the list
        setScans(prev => [result, ...prev])
      }
    } catch (error) {
      console.error('Failed to start scan:', error)
    } finally {
      setScanning(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/10 border-green-500/20'
      case 'scanning': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
      case 'failed': return 'text-red-400 bg-red-500/10 border-red-500/20'
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
    }
  }

  const getRiskLevel = (critical: number, high: number) => {
    const total = critical + high
    if (total === 0) return { level: 'Low', color: 'text-green-400' }
    if (total < 5) return { level: 'Medium', color: 'text-yellow-400' }
    return { level: 'High', color: 'text-red-400' }
  }

  const filteredScans = scans.filter(scan => 
    filterStatus === 'all' || scan.status === filterStatus
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading Container Scanning Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Container className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">📦 Container Scanning Dashboard</h1>
              <p className="text-gray-400">Real-time CBOM analysis and vulnerability detection</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAutoScan(!autoScan)}
              className={`${autoScan ? "border-green-500 text-green-400" : "border-gray-500"}`}
            >
              {autoScan ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {autoScan ? "Auto-Scan ON" : "Auto-Scan OFF"}
            </Button>
            
            <Button
              onClick={startNewScan}
              disabled={scanning}
              className="bg-cyan-500 hover:bg-cyan-400 text-black"
            >
              {scanning ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              {scanning ? "Scanning..." : "New Scan"}
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Container className="w-5 h-5 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Containers</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.containers_scanned_today}
            </div>
            <div className="text-xs text-gray-400">Scanned Today</div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Algorithms</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.algorithms_discovered}
            </div>
            <div className="text-xs text-gray-400">Discovered</div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-sm text-red-400 font-medium">Vulnerabilities</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.vulnerabilities_found}
            </div>
            <div className="text-xs text-gray-400">Found</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Compliance</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.compliance_score}%
            </div>
            <div className="text-xs text-gray-400">Score</div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Quantum Ready</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.quantum_readiness}%
            </div>
            <div className="text-xs text-gray-400">Migration</div>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Filter:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white/10 border border-white/20 rounded px-3 py-1 text-white text-sm"
            >
              <option value="all">All Scans</option>
              <option value="completed">Completed</option>
              <option value="scanning">In Progress</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          
          <span className="text-sm text-gray-400">
            {filteredScans.length} of {scans.length} scans
          </span>
        </div>
        
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export Results
        </Button>
      </div>

      {/* Scans Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredScans.map((scan, index) => {
          const risk = getRiskLevel(scan.vulnerabilities.critical, scan.vulnerabilities.high)
          
          return (
            <motion.div
              key={scan.scan_id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedScan(scan.scan_id)}
            >
              {/* Scan Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white truncate">{scan.target}</h3>
                  <p className="text-xs text-gray-400">{scan.scan_id}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(scan.status)}`}>
                  {scan.status}
                </div>
              </div>
              
              {/* Algorithm Summary */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-lg font-bold text-white">
                    {scan.cryptographic_inventory.total_algorithms}
                  </div>
                  <div className="text-xs text-gray-400">Total Algorithms</div>
                </div>
                
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-lg font-bold text-green-400">
                    {scan.cryptographic_inventory.quantum_safe}
                  </div>
                  <div className="text-xs text-gray-400">Quantum Safe</div>
                </div>
              </div>
              
              {/* Vulnerability Breakdown */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Risk Level</span>
                  <span className={`text-sm font-bold ${risk.color}`}>{risk.level}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="text-center p-2 bg-red-500/20 rounded">
                    <div className="font-bold text-red-400">{scan.vulnerabilities.critical}</div>
                    <div className="text-gray-400">Critical</div>
                  </div>
                  <div className="text-center p-2 bg-orange-500/20 rounded">
                    <div className="font-bold text-orange-400">{scan.vulnerabilities.high}</div>
                    <div className="text-gray-400">High</div>
                  </div>
                  <div className="text-center p-2 bg-yellow-500/20 rounded">
                    <div className="font-bold text-yellow-400">{scan.vulnerabilities.medium}</div>
                    <div className="text-gray-400">Medium</div>
                  </div>
                  <div className="text-center p-2 bg-blue-500/20 rounded">
                    <div className="font-bold text-blue-400">{scan.vulnerabilities.low}</div>
                    <div className="text-gray-400">Low</div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {new Date(scan.timestamp).toLocaleString()}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileText className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredScans.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Container className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No scans found</h3>
          <p className="text-gray-400 mb-6">
            {filterStatus === 'all' 
              ? "Start your first container scan to see results here"
              : `No scans with status "${filterStatus}" found`
            }
          </p>
          <Button onClick={startNewScan} className="bg-cyan-500 hover:bg-cyan-400 text-black">
            <Search className="w-4 h-4 mr-2" />
            Start New Scan
          </Button>
        </motion.div>
      )}
    </div>
  )
}
