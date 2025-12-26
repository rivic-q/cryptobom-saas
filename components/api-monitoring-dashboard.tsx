"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Activity, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Zap,
  Database,
  Globe,
  Shield,
  Users,
  Server,
  RefreshCw,
  Settings,
  Download,
  Eye,
  Bell,
  Filter,
  Search,
  ExternalLink
} from "lucide-react"
import { Button } from "./ui/button"

interface APIMetrics {
  timestamp: string
  performance: {
    api_latency_p50_ms: number
    api_latency_p95_ms: number
    api_latency_p99_ms: number
    throughput_requests_per_second: number
    error_rate_percent: number
    uptime_percent: number
  }
  endpoints: Array<{
    path: string
    method: string
    requests_count: number
    avg_response_time: number
    error_rate: number
    last_24h_calls: number
  }>
  security_events: Array<{
    id: string
    type: string
    severity: string
    timestamp: string
    details: string
    resolved: boolean
  }>
}

interface DashboardWidget {
  id: string
  title: string
  type: 'metric' | 'chart' | 'table' | 'gauge'
  metric: string
  position: { x: number; y: number }
  size: { w: number; h: number }
}

export function APIMonitoringDashboard() {
  const [metrics, setMetrics] = useState<APIMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("24h")
  const [refreshInterval, setRefreshInterval] = useState(30)
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null)
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>([])
  const [showAlerts, setShowAlerts] = useState(false)

  useEffect(() => {
    fetchMetrics()
    
    if (autoRefresh) {
      const interval = setInterval(fetchMetrics, refreshInterval * 1000)
      return () => clearInterval(interval)
    }
  }, [timeRange, autoRefresh, refreshInterval])

  const fetchMetrics = async () => {
    try {
      const response = await fetch(`/api/v1/monitoring?range=${timeRange}`)
      if (response.ok) {
        const data = await response.json()
        
        // Mock API endpoint data
        const mockEndpoints = [
          {
            path: "/api/v1/cbom/scan",
            method: "POST",
            requests_count: Math.floor(Math.random() * 1000) + 500,
            avg_response_time: Math.floor(Math.random() * 200) + 100,
            error_rate: Math.random() * 5,
            last_24h_calls: Math.floor(Math.random() * 500) + 200
          },
          {
            path: "/api/v1/quantum/attest",
            method: "POST", 
            requests_count: Math.floor(Math.random() * 300) + 100,
            avg_response_time: Math.floor(Math.random() * 1000) + 500,
            error_rate: Math.random() * 3,
            last_24h_calls: Math.floor(Math.random() * 200) + 50
          },
          {
            path: "/api/v1/compliance",
            method: "GET",
            requests_count: Math.floor(Math.random() * 800) + 300,
            avg_response_time: Math.floor(Math.random() * 100) + 50,
            error_rate: Math.random() * 2,
            last_24h_calls: Math.floor(Math.random() * 400) + 150
          },
          {
            path: "/api/v1/cloud",
            method: "GET",
            requests_count: Math.floor(Math.random() * 200) + 100,
            avg_response_time: Math.floor(Math.random() * 150) + 75,
            error_rate: Math.random() * 4,
            last_24h_calls: Math.floor(Math.random() * 100) + 30
          }
        ]

        const mockSecurityEvents = [
          {
            id: `evt_${Date.now()}`,
            type: "Authentication Failure",
            severity: "medium",
            timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
            details: "Multiple failed login attempts from IP 192.168.1.100",
            resolved: Math.random() > 0.3
          },
          {
            id: `evt_${Date.now() - 1000}`,
            type: "Rate Limit Exceeded",
            severity: "low",
            timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
            details: "API rate limit exceeded for client app_12345",
            resolved: true
          },
          {
            id: `evt_${Date.now() - 2000}`,
            type: "Suspicious Request Pattern",
            severity: "high",
            timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
            details: "Unusual scanning pattern detected from API key",
            resolved: false
          }
        ]
        
        setMetrics({
          timestamp: data.timestamp,
          performance: data.performance,
          endpoints: mockEndpoints,
          security_events: mockSecurityEvents
        })
      }
    } catch (error) {
      console.error('Failed to fetch API metrics:', error)
    } finally {
      setLoading(false)
    }
  }

  const createCustomDashboard = async () => {
    try {
      const response = await fetch('/api/v1/monitoring', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create_dashboard',
          parameters: {
            name: 'Custom API Dashboard',
            widgets: [
              { type: 'metric_chart', title: 'API Latency', metric: 'performance.api_latency_p95_ms' },
              { type: 'gauge', title: 'Uptime', metric: 'performance.uptime_percent' },
              { type: 'counter', title: 'Requests/sec', metric: 'performance.throughput_requests_per_second' }
            ]
          }
        })
      })
      
      if (response.ok) {
        const result = await response.json()
        console.log('Dashboard created:', result)
      }
    } catch (error) {
      console.error('Failed to create dashboard:', error)
    }
  }

  const exportMetrics = async () => {
    try {
      const response = await fetch('/api/v1/monitoring', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'export_data',
          parameters: {
            format: 'json',
            date_range: timeRange,
            metrics: ['performance', 'security', 'endpoints']
          }
        })
      })
      
      if (response.ok) {
        const result = await response.json()
        console.log('Export initiated:', result)
      }
    } catch (error) {
      console.error('Failed to export metrics:', error)
    }
  }

  const getLatencyColor = (latency: number) => {
    if (latency < 100) return "text-green-400"
    if (latency < 500) return "text-yellow-400"
    return "text-red-400"
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/20'
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/20'
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading API Monitoring Dashboard...</p>
        </div>
      </div>
    )
  }

  const activeAlerts = metrics?.security_events.filter(event => !event.resolved).length || 0

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
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">📊 API Monitoring Dashboard</h1>
              <p className="text-gray-400">Real-time performance, security, and analytics</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {["1h", "24h", "7d", "30d"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded text-sm ${
                    timeRange === range
                      ? "bg-green-500 text-black"
                      : "bg-white/10 text-gray-300 hover:text-white"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`${autoRefresh ? "border-green-500 text-green-400" : "border-gray-500"}`}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${autoRefresh ? "animate-spin" : ""}`} />
              {autoRefresh ? "Live" : "Paused"}
            </Button>
            
            <Button variant="outline" size="sm" onClick={createCustomDashboard}>
              <Settings className="w-4 h-4 mr-2" />
              Create Dashboard
            </Button>
            
            <Button variant="outline" size="sm" onClick={exportMetrics}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Uptime</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.performance.uptime_percent.toFixed(2)}%
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">P95 Latency</span>
            </div>
            <div className={`text-2xl font-bold ${getLatencyColor(metrics?.performance.api_latency_p95_ms || 0)}`}>
              {metrics?.performance.api_latency_p95_ms}ms
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Throughput</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.performance.throughput_requests_per_second}/s
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Error Rate</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics?.performance.error_rate_percent.toFixed(2)}%
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-red-400" />
              <span className="text-sm text-red-400 font-medium">Active Alerts</span>
            </div>
            <div className="text-2xl font-bold text-white">{activeAlerts}</div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-indigo-400" />
              <span className="text-sm text-indigo-400 font-medium">Endpoints</span>
            </div>
            <div className="text-2xl font-bold text-white">{metrics?.endpoints.length}</div>
          </div>
        </div>
      </motion.div>

      {/* API Endpoints Performance */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe className="h-5 w-5 text-cyan-400" />
              API Endpoints Performance
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {metrics?.endpoints.map((endpoint, index) => (
              <div
                key={`${endpoint.method}-${endpoint.path}`}
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all cursor-pointer"
                onClick={() => setSelectedEndpoint(endpoint.path)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-white">{endpoint.path}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{endpoint.requests_count}</div>
                    <div className="text-gray-400">Total Requests</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getLatencyColor(endpoint.avg_response_time)}`}>
                      {endpoint.avg_response_time}ms
                    </div>
                    <div className="text-gray-400">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{endpoint.last_24h_calls}</div>
                    <div className="text-gray-400">Last 24h</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${
                      endpoint.error_rate < 1 ? 'text-green-400' : 
                      endpoint.error_rate < 3 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {endpoint.error_rate.toFixed(1)}%
                    </div>
                    <div className="text-gray-400">Error Rate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Response Time Distribution */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-400" />
            Response Time Distribution
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">P50</span>
                <span className="text-green-400">{metrics?.performance.api_latency_p50_ms}ms</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                  style={{ width: `${(metrics?.performance.api_latency_p50_ms || 0) / 2}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">P95</span>
                <span className="text-yellow-400">{metrics?.performance.api_latency_p95_ms}ms</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                  style={{ width: `${(metrics?.performance.api_latency_p95_ms || 0) / 3}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">P99</span>
                <span className="text-red-400">{metrics?.performance.api_latency_p99_ms}ms</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500"
                  style={{ width: `${(metrics?.performance.api_latency_p99_ms || 0) / 4}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl">
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                {metrics?.performance.throughput_requests_per_second}
              </div>
              <div className="text-sm text-gray-300">Requests per Second</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Security Events */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-400" />
            Security Events & Alerts
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAlerts(!showAlerts)}
            className={activeAlerts > 0 ? "border-red-500 text-red-400" : ""}
          >
            <Bell className={`w-4 h-4 mr-2 ${activeAlerts > 0 ? "animate-pulse" : ""}`} />
            {activeAlerts} Active
          </Button>
        </div>
        
        <div className="space-y-3">
          {metrics?.security_events.map((event) => (
            <div
              key={event.id}
              className={`p-4 rounded-xl border ${
                event.resolved ? 'bg-white/5 border-white/10' : 'bg-red-500/5 border-red-500/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium border ${getSeverityColor(event.severity)}`}>
                    {event.severity.toUpperCase()}
                  </div>
                  <span className="font-medium text-white">{event.type}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {new Date(event.timestamp).toLocaleString()}
                  </span>
                  {event.resolved ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">{event.details}</p>
              
              {!event.resolved && (
                <div className="mt-3 pt-3 border-t border-white/10 flex gap-2">
                  <Button size="sm" variant="outline">
                    Investigate
                  </Button>
                  <Button size="sm" variant="outline">
                    Mark Resolved
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {metrics?.security_events.length === 0 && (
          <div className="text-center py-8">
            <Shield className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No Security Events</h3>
            <p className="text-gray-400">Your API is secure and running smoothly</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
