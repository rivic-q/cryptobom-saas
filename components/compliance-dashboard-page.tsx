"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Upload, 
  Download, 
  Search, 
  Filter,
  FileCheck,
  Clock,
  TrendingUp,
  AlertCircle,
  Eye,
  Settings,
  Zap,
  Globe,
  Award,
  Building,
  Users,
  Activity,
  BarChart3,
  PieChart,
  Calendar,
  Bell
} from "lucide-react"

// Mock compliance data
interface ComplianceMetric {
  regulation: string
  status: "compliant" | "warning" | "critical"
  score: number
  lastChecked: string
  nextDeadline: string
  issues: number
}

interface CBOMVerificationResult {
  fileName: string
  status: "valid" | "warning" | "invalid"
  algorithms: number
  vulnerabilities: number
  compliance: {
    bsi: number
    nist: number
    dora: number
    eidas: number
  }
  timestamp: string
}

const mockComplianceData: ComplianceMetric[] = [
  {
    regulation: "BSI TR-02102",
    status: "compliant",
    score: 94,
    lastChecked: "2025-12-26T10:30:00Z",
    nextDeadline: "2026-01-15",
    issues: 2
  },
  {
    regulation: "NIST FIPS 203",
    status: "warning", 
    score: 78,
    lastChecked: "2025-12-26T09:15:00Z",
    nextDeadline: "2026-02-01",
    issues: 5
  },
  {
    regulation: "DORA Article 8",
    status: "compliant",
    score: 96,
    lastChecked: "2025-12-26T11:00:00Z",
    nextDeadline: "2027-01-17",
    issues: 1
  },
  {
    regulation: "eIDAS 2.0",
    status: "warning",
    score: 72,
    lastChecked: "2025-12-26T08:45:00Z", 
    nextDeadline: "2027-01-01",
    issues: 8
  },
  {
    regulation: "CRA Annex I",
    status: "compliant",
    score: 89,
    lastChecked: "2025-12-26T10:00:00Z",
    nextDeadline: "2027-10-15",
    issues: 3
  }
]

const mockVerificationResults: CBOMVerificationResult[] = [
  {
    fileName: "banking-app-v2.1.cbom.json",
    status: "valid",
    algorithms: 247,
    vulnerabilities: 3,
    compliance: { bsi: 94, nist: 87, dora: 96, eidas: 78 },
    timestamp: "2025-12-26T10:30:00Z"
  },
  {
    fileName: "payment-gateway.cbom.json", 
    status: "warning",
    algorithms: 89,
    vulnerabilities: 12,
    compliance: { bsi: 76, nist: 82, dora: 71, eidas: 65 },
    timestamp: "2025-12-26T09:15:00Z"
  },
  {
    fileName: "mobile-banking.cbom.json",
    status: "invalid",
    algorithms: 156,
    vulnerabilities: 28,
    compliance: { bsi: 45, nist: 52, dora: 38, eidas: 41 },
    timestamp: "2025-12-26T08:00:00Z"
  }
]

export function ComplianceDashboardPage() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "verification" | "monitoring" | "reports">("overview")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "scanning" | "complete">("idle")
  const [verificationResult, setVerificationResult] = useState<CBOMVerificationResult | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setVerificationStatus("scanning")
      
      // Simulate verification process
      setTimeout(() => {
        setVerificationResult({
          fileName: file.name,
          status: Math.random() > 0.3 ? "valid" : "warning",
          algorithms: Math.floor(Math.random() * 300) + 50,
          vulnerabilities: Math.floor(Math.random() * 15),
          compliance: {
            bsi: Math.floor(Math.random() * 40) + 60,
            nist: Math.floor(Math.random() * 40) + 60,
            dora: Math.floor(Math.random() * 40) + 60,
            eidas: Math.floor(Math.random() * 40) + 60
          },
          timestamp: new Date().toISOString()
        })
        setVerificationStatus("complete")
      }, 3000)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "compliant": 
      case "valid":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case "critical":
      case "invalid":
        return <XCircle className="w-5 h-5 text-red-400" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "compliant":
      case "valid":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      case "warning":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      case "critical":
      case "invalid":
        return "text-red-400 bg-red-500/10 border-red-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  const overallComplianceScore = Math.round(
    mockComplianceData.reduce((sum, item) => sum + item.score, 0) / mockComplianceData.length
  )

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          🏛️ Compliance Dashboard
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Monitor regulatory compliance, verify CBOMs, and track quantum-safe migration progress 
          across BSI, NIST, DORA, CRA, and eIDAS 2.0 frameworks in real-time.
        </p>
        
        {/* Overall Score */}
        <div className="inline-flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">{overallComplianceScore}%</div>
            <div className="text-sm text-gray-400">Overall Compliance</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              {mockComplianceData.filter(d => d.status === "compliant").length}
            </div>
            <div className="text-sm text-gray-400">Compliant Frameworks</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">
              {mockComplianceData.reduce((sum, d) => sum + d.issues, 0)}
            </div>
            <div className="text-sm text-gray-400">Active Issues</div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-2 bg-white/5 rounded-lg border border-white/10">
        {[
          { id: "overview", label: "Overview", icon: BarChart3 },
          { id: "verification", label: "CBOM Verification", icon: FileCheck },
          { id: "monitoring", label: "Real-Time Monitoring", icon: Activity },
          { id: "reports", label: "Compliance Reports", icon: PieChart }
        ].map((tab) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTab === tab.id
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {selectedTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Regulation Status Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockComplianceData.map((metric, index) => (
                <motion.div
                  key={metric.regulation}
                  className={`p-6 rounded-2xl border ${getStatusColor(metric.status)}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{metric.regulation}</h3>
                    {getStatusIcon(metric.status)}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Compliance Score</span>
                      <span className="text-white font-medium">{metric.score}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Issues:</span>
                      <span className="text-white">{metric.issues}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Next Deadline:</span>
                      <span className="text-white">{new Date(metric.nextDeadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Check:</span>
                      <span className="text-white">
                        {new Date(metric.lastChecked).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="flex items-center gap-3 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all">
                  <Upload className="w-5 h-5 text-cyan-400" />
                  <div className="text-left">
                    <div className="font-medium text-white">Upload CBOM</div>
                    <div className="text-sm text-gray-400">Verify compliance</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all">
                  <Download className="w-5 h-5 text-purple-400" />
                  <div className="text-left">
                    <div className="font-medium text-white">Generate Report</div>
                    <div className="text-sm text-gray-400">Export compliance data</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-all">
                  <Zap className="w-5 h-5 text-green-400" />
                  <div className="text-left">
                    <div className="font-medium text-white">Run Scan</div>
                    <div className="text-sm text-gray-400">Check all systems</div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === "verification" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* CBOM Upload Section */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">CBOM Verification Tool</h3>
              <p className="text-gray-300 mb-8">
                Upload your Cryptographic Bill of Materials (CBOM) file to verify compliance across 
                BSI TR-02102, NIST PQC standards, DORA, CRA, and eIDAS 2.0 requirements.
              </p>
              
              <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all">
                <input
                  type="file"
                  accept=".json,.xml,.spdx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="cbom-upload"
                />
                <label htmlFor="cbom-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-xl font-semibold text-white mb-2">
                    Drop CBOM file here or click to upload
                  </div>
                  <div className="text-gray-400">
                    Supports JSON, XML, SPDX formats (Max 10MB)
                  </div>
                </label>
              </div>
            </div>

            {/* Verification Process */}
            {verificationStatus === "scanning" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl"
              >
                <div className="text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Verifying CBOM...</h3>
                  <p className="text-gray-300">
                    Analyzing cryptographic algorithms and checking regulatory compliance
                  </p>
                </div>
              </motion.div>
            )}

            {/* Verification Results */}
            {verificationResult && verificationStatus === "complete" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className={`p-6 rounded-2xl border ${getStatusColor(verificationResult.status)}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {getStatusIcon(verificationResult.status)}
                    <h3 className="text-xl font-bold text-white">Verification Complete</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-white">{verificationResult.algorithms}</div>
                      <div className="text-sm text-gray-400">Algorithms Found</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-red-400">{verificationResult.vulnerabilities}</div>
                      <div className="text-sm text-gray-400">Vulnerabilities</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">
                        {Math.round(Object.values(verificationResult.compliance).reduce((a, b) => a + b) / 4)}%
                      </div>
                      <div className="text-sm text-gray-400">Avg. Compliance</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        {verificationResult.status === "valid" ? "PASS" : "REVIEW"}
                      </div>
                      <div className="text-sm text-gray-400">Overall Status</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(verificationResult.compliance).map(([reg, score]) => (
                      <div key={reg} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-400 uppercase">{reg}</span>
                          <span className="text-white font-bold">{score}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Previous Verifications */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Recent Verifications</h3>
              <div className="space-y-4">
                {mockVerificationResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(result.status)}
                      <div>
                        <div className="font-medium text-white">{result.fileName}</div>
                        <div className="text-sm text-gray-400">
                          {result.algorithms} algorithms, {result.vulnerabilities} vulnerabilities
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        {new Date(result.timestamp).toLocaleString()}
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === "monitoring" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-300 mb-6">
                Continuous monitoring of your cryptographic infrastructure across all regulatory frameworks.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-white">System Health</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime (30 days)</div>
                </div>
                
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium text-white">Active Alerts</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">3</div>
                  <div className="text-sm text-gray-400">Requiring attention</div>
                </div>
                
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span className="font-medium text-white">Compliance Trend</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">+5.2%</div>
                  <div className="text-sm text-gray-400">vs. last month</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === "reports" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Compliance Reports</h3>
              <p className="text-gray-300 mb-6">
                Generate comprehensive compliance reports for audits and regulatory submissions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <button className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-left">
                  <FileCheck className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">BSI TR-02102 Report</h4>
                  <p className="text-gray-400 text-sm">Complete cryptographic inventory for BSI compliance</p>
                </button>
                
                <button className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-left">
                  <Award className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">NIST PQC Assessment</h4>
                  <p className="text-gray-400 text-sm">Post-quantum readiness evaluation report</p>
                </button>
                
                <button className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-left">
                  <Building className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">DORA Risk Assessment</h4>
                  <p className="text-gray-400 text-sm">Digital operational resilience framework report</p>
                </button>
                
                <button className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-left">
                  <Globe className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">eIDAS 2.0 Readiness</h4>
                  <p className="text-gray-400 text-sm">Quantum-safe migration timeline report</p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
