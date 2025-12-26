"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Shield, 
  Cpu, 
  Activity, 
  Lock, 
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Database,
  Network,
  Monitor
} from "lucide-react"

export function RivicCoreNeuronDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Cpu className="h-10 w-10 text-purple-400" />
            Rivic Core Neuron Dashboard
          </h1>
          <p className="text-gray-300 text-lg">
            Advanced quantum-safe cryptographic monitoring and analysis platform
          </p>
        </div>

        {/* Enterprise Access Notice */}
        <Alert className="mb-6 border-amber-500 bg-amber-500/10">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-200">
            <strong>Enterprise Feature Preview</strong> - This advanced dashboard will be available in our Enterprise SaaS platform launching February 2026. 
            <Button variant="link" className="text-amber-300 p-0 ml-2 h-auto">
              Join Enterprise Waitlist →
            </Button>
          </AlertDescription>
        </Alert>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Active Cryptographic Assets
              </CardTitle>
              <Database className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2,847</div>
              <p className="text-xs text-green-400">
                +12.5% from last scan
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Quantum Vulnerabilities
              </CardTitle>
              <Shield className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">143</div>
              <p className="text-xs text-red-400">
                High priority items
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Migration Progress
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">67%</div>
              <p className="text-xs text-gray-400">
                PQC implementation
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                System Status
              </CardTitle>
              <Activity className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">Optimal</div>
              <p className="text-xs text-green-400">
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Cryptographic Algorithm Analysis */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-400" />
                Cryptographic Algorithm Distribution
              </CardTitle>
              <CardDescription className="text-gray-400">
                Current cryptographic algorithms in use across your infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">RSA-2048/4096</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">Legacy</Badge>
                    <span className="text-red-400">1,234 instances</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ECDSA P-256/P-384</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">Vulnerable</Badge>
                    <span className="text-red-400">867 instances</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ML-KEM-768/1024</span>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500">Quantum-Safe</Badge>
                    <span className="text-green-400">523 instances</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ML-DSA-65/87</span>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500">Quantum-Safe</Badge>
                    <span className="text-green-400">223 instances</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Monitoring */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Monitor className="h-5 w-5 text-purple-400" />
                Real-time Security Monitoring
              </CardTitle>
              <CardDescription className="text-gray-400">
                Live cryptographic operations and threat detection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">ML-KEM Key Exchange</span>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">Certificate Rotation</span>
                  </div>
                  <Badge variant="secondary">Scheduled</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <span className="text-gray-300">Legacy TLS Detected</span>
                  </div>
                  <Badge variant="destructive">Alert</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300">Quantum Readiness Scan</span>
                  </div>
                  <Badge className="bg-purple-500">Running</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Network Topology */}
        <Card className="bg-slate-800/50 border-purple-500/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Network className="h-5 w-5 text-purple-400" />
              Cryptographic Network Topology
            </CardTitle>
            <CardDescription className="text-gray-400">
              Visual representation of cryptographic implementations across your infrastructure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900/50 rounded-lg flex items-center justify-center border border-purple-500/20">
              <div className="text-center text-gray-400">
                <Network className="h-16 w-16 mx-auto mb-4 text-purple-400" />
                <p className="text-lg font-medium">Interactive Network Visualization</p>
                <p className="text-sm">Available in Enterprise Dashboard</p>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                  Request Enterprise Demo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-400" />
              Recommended Actions
            </CardTitle>
            <CardDescription className="text-gray-400">
              Priority items for quantum-safe migration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div>
                  <h4 className="font-medium text-red-400">Critical: Upgrade RSA Keys</h4>
                  <p className="text-sm text-gray-400">1,234 RSA-2048 keys require immediate attention</p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Start Migration
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div>
                  <h4 className="font-medium text-amber-400">High: Certificate Renewal</h4>
                  <p className="text-sm text-gray-400">147 certificates expiring within 30 days</p>
                </div>
                <Button size="sm" variant="secondary">
                  Schedule Renewal
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div>
                  <h4 className="font-medium text-green-400">Medium: Performance Optimization</h4>
                  <p className="text-sm text-gray-400">23 ML-KEM implementations can be optimized</p>
                </div>
                <Button size="sm" variant="outline">
                  Review Options
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}