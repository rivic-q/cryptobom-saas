"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Cloud, 
  Globe, 
  Zap, 
  Activity, 
  Shield, 
  Database, 
  Server,
  Cpu,
  HardDrive,
  Network,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Settings,
  RefreshCw,
  ExternalLink,
  Layers,
  Lock,
  Key
} from "lucide-react"
import { Button } from "./ui/button"

interface CloudProvider {
  status: string
  region: string
  services: any
  cost_analytics?: {
    monthly_spend_usd: number
    quantum_compute_hours: number
    storage_gb: number
    network_gb: number
  }
}

interface CloudIntegration {
  ibm_cloud: CloudProvider
  aws: CloudProvider
  azure: CloudProvider
  google_cloud: CloudProvider
  kubernetes: {
    clusters_connected: number
    total_nodes: number
    rivic_operators_deployed: number
    cluster_details: Array<{
      name: string
      provider: string
      nodes: number
      rivic_pods: number
      quantum_jobs_scheduled: number
    }>
  }
}

export function CloudIntegrationDashboard() {
  const [cloudData, setCloudData] = useState<CloudIntegration | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchCloudData()
  }, [])

  const fetchCloudData = async () => {
    try {
      setRefreshing(true)
      const response = await fetch('/api/v1/cloud')
      if (response.ok) {
        const data = await response.json()
        setCloudData(data)
      }
    } catch (error) {
      console.error('Failed to fetch cloud integration data:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const getProviderStatus = (status: string) => {
    switch (status) {
      case 'connected': return { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' }
      case 'connecting': return { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' }
      case 'error': return { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' }
      default: return { color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/20' }
    }
  }

  const deployService = async (provider: string) => {
    try {
      const response = await fetch('/api/v1/cloud', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'deploy_service',
          provider: provider,
          parameters: {
            service: 'rivic-core-engine',
            region: 'auto-select',
            auto_scaling: true,
            quantum_integration: true
          }
        })
      })
      
      if (response.ok) {
        const result = await response.json()
        console.log('Deployment initiated:', result)
      }
    } catch (error) {
      console.error('Failed to deploy service:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white">Loading Cloud Integration Dashboard...</p>
        </div>
      </div>
    )
  }

  const totalMonthlyCost = cloudData?.ibm_cloud?.cost_analytics?.monthly_spend_usd || 0
  const totalQuantumHours = cloudData?.ibm_cloud?.cost_analytics?.quantum_compute_hours || 0

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
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">☁️ Cloud Integration Dashboard</h1>
              <p className="text-gray-400">Multi-cloud deployments with IBM Quantum integration</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchCloudData}
              disabled={refreshing}
              className="border-gray-500"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            
            <Button className="bg-purple-500 hover:bg-purple-400">
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Connected</span>
            </div>
            <div className="text-2xl font-bold text-white">4/4</div>
            <div className="text-xs text-gray-400">Cloud Providers</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Clusters</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {cloudData?.kubernetes.clusters_connected}
            </div>
            <div className="text-xs text-gray-400">Kubernetes</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Quantum</span>
            </div>
            <div className="text-2xl font-bold text-white">{totalQuantumHours}h</div>
            <div className="text-xs text-gray-400">This Month</div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Nodes</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {cloudData?.kubernetes.total_nodes}
            </div>
            <div className="text-xs text-gray-400">Total Active</div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-pink-400 font-medium">Monthly Cost</span>
            </div>
            <div className="text-2xl font-bold text-white">${totalMonthlyCost.toLocaleString()}</div>
            <div className="text-xs text-gray-400">All Providers</div>
          </div>
        </div>
      </motion.div>

      {/* Cloud Providers Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        
        {/* IBM Cloud */}
        <motion.div
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Cloud className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">IBM Cloud</h3>
                <p className="text-sm text-blue-400">{cloudData?.ibm_cloud.region}</p>
              </div>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
              getProviderStatus(cloudData?.ibm_cloud.status || '').bg
            } ${getProviderStatus(cloudData?.ibm_cloud.status || '').border} ${
              getProviderStatus(cloudData?.ibm_cloud.status || '').color
            }`}>
              {cloudData?.ibm_cloud.status}
            </div>
          </div>
          
          {/* IBM Quantum Network */}
          <div className="mb-4 p-4 bg-white/5 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Zap className="h-4 w-4 text-purple-400" />
                Quantum Network
              </h4>
              <span className="text-green-400 text-sm">Premium Access</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-white">
                  {cloudData?.ibm_cloud.services.quantum_network.backends_available}
                </div>
                <div className="text-gray-400">Backends</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400">
                  {cloudData?.ibm_cloud.services.quantum_network.jobs_executed_today}
                </div>
                <div className="text-gray-400">Jobs Today</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">
                  {cloudData?.ibm_cloud.services.quantum_network.credits_remaining?.toLocaleString()}
                </div>
                <div className="text-gray-400">Credits</div>
              </div>
            </div>
          </div>
          
          {/* Other IBM Services */}
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4 text-green-400" />
                <span className="text-white">Key Protect</span>
              </div>
              <span className="text-green-400 text-sm">
                {cloudData?.ibm_cloud.services.key_protect.keys_managed} keys
              </span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-white">Hyper Protect</span>
              </div>
              <span className="text-blue-400 text-sm">
                {cloudData?.ibm_cloud.services.hyper_protect.crypto_units} units
              </span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4 text-cyan-400" />
                <span className="text-white">Code Engine</span>
              </div>
              <span className="text-cyan-400 text-sm">
                {cloudData?.ibm_cloud.services.code_engine.current_instances} instances
              </span>
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="w-full mt-4 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"
            onClick={() => deployService('ibm_cloud')}
          >
            Deploy Rivic Service
          </Button>
        </motion.div>

        {/* Multi-Cloud Overview */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="h-5 w-5 text-green-400" />
            Multi-Cloud Services
          </h3>
          
          <div className="space-y-4">
            {/* AWS */}
            <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Cloud className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Amazon Web Services</div>
                  <div className="text-sm text-gray-400">Braket Quantum + ECS Fargate</div>
                </div>
              </div>
              <div className="text-green-400 text-sm">Connected</div>
            </div>
            
            {/* Azure */}
            <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Cloud className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Microsoft Azure</div>
                  <div className="text-sm text-gray-400">Quantum + Key Vault + Container Instances</div>
                </div>
              </div>
              <div className="text-green-400 text-sm">Connected</div>
            </div>
            
            {/* Google Cloud */}
            <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Cloud className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Google Cloud</div>
                  <div className="text-sm text-gray-400">Quantum AI + Cloud Run + KMS</div>
                </div>
              </div>
              <div className="text-green-400 text-sm">Connected</div>
            </div>
          </div>
          
          {/* Cost Analytics */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              Cost Analytics
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-lg font-bold text-green-400">
                  ${cloudData?.ibm_cloud?.cost_analytics?.monthly_spend_usd?.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">Monthly Spend</div>
              </div>
              
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-lg font-bold text-purple-400">
                  {cloudData?.ibm_cloud?.cost_analytics?.quantum_compute_hours}h
                </div>
                <div className="text-xs text-gray-400">Quantum Compute</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Kubernetes Clusters */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-cyan-400" />
            Kubernetes Clusters
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {cloudData?.kubernetes.rivic_operators_deployed} Rivic operators deployed
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {cloudData?.kubernetes.cluster_details.map((cluster, index) => (
            <div key={cluster.name} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white">{cluster.name}</h3>
                  <p className="text-sm text-gray-400">{cluster.provider}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{cluster.nodes}</div>
                  <div className="text-gray-400">Nodes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">{cluster.rivic_pods}</div>
                  <div className="text-gray-400">Rivic Pods</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{cluster.quantum_jobs_scheduled}</div>
                  <div className="text-gray-400">Quantum Jobs</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
