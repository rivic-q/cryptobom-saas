"use client"

import { motion } from "framer-motion"
import { Github, Package, Terminal, Code2, Star, GitFork, Download, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

const openSourceRepos = [
  {
    name: "ml-kem-go",
    description: "Pure ML-KEM implementation in Go - FIPS 203 compliant",
    license: "MIT",
    stars: "5K+",
    language: "Go",
    features: ["ML-KEM-1024 & ML-KEM-768", "Constant-time implementation", "FIPS test vectors", "Zero dependencies"],
    url: "github.com/rivic-crypto/ml-kem-go",
  },
  {
    name: "ml-kem-python",
    description: "ML-KEM Python library with asyncio support",
    license: "MIT",
    stars: "3K+",
    language: "Python",
    features: ["PyPI distribution", "NumPy acceleration", "Type hints (3.8+)", "Full pytest suite"],
    url: "github.com/rivic-crypto/ml-kem-python",
  },
  {
    name: "rivic-k8s-charts",
    description: "Kubernetes Helm charts for quantum-safe crypto",
    license: "Apache 2.0",
    stars: "1K+",
    language: "YAML",
    features: ["Helm charts", "Kustomize overlays", "Istio configs", "RBAC templates"],
    url: "github.com/rivic-crypto/rivic-k8s-charts",
  },
]

const sdks = [
  { name: "Go SDK", pkg: "rivic-go-sdk", icon: "go" },
  { name: "Python SDK", pkg: "rivic-python-sdk", icon: "py" },
  { name: "JavaScript SDK", pkg: "rivic-js-sdk", icon: "js" },
]

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Github className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Open Core Model</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Open Source Libraries</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready cryptographic libraries under MIT license. Community-driven, audited, and NIST compliant.
          </p>
        </motion.div>

        {/* Repository Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {openSourceRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Package className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{repo.name}</h3>
                    <span className="text-xs text-emerald-400">{repo.license}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white/50">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{repo.stars}</span>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-4">{repo.description}</p>

              <div className="space-y-2 mb-4">
                {repo.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-white/60">
                    <Code2 className="w-3 h-3 text-emerald-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/60">{repo.language}</span>
                <a
                  href={`https://${repo.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1 group-hover:underline"
                >
                  View on GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SDKs */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Official SDKs</h3>
              <p className="text-white/70">REST API wrappers with authentication, retry logic, and full type safety.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {sdks.map((sdk) => (
                <div
                  key={sdk.name}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
                >
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-white font-medium block">{sdk.name}</span>
                    <span className="text-white/50 text-xs">{sdk.pkg}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Start */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Start</h4>
            <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="text-emerald-400 mb-2"># Install ML-KEM Go library</div>
              <div className="text-white mb-4">go get github.com/rivic-crypto/ml-kem-go</div>
              <div className="text-emerald-400 mb-2"># Install Python SDK</div>
              <div className="text-white mb-4">pip install rivic-ml-kem</div>
              <div className="text-emerald-400 mb-2"># Deploy with Helm</div>
              <div className="text-white">helm install rivic rivic-crypto/rivic-k8s-charts</div>
            </div>
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "GitHub Stars", value: "10K+", icon: Star },
            { label: "Contributors", value: "50+", icon: GitFork },
            { label: "Downloads/Year", value: "1M+", icon: Download },
            { label: "Research Papers", value: "20+", icon: Code2 },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-black" asChild>
            <a href="https://github.com/rivic-crypto" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Explore on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
