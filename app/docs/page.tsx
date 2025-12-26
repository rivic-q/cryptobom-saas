"use client"

import { Metadata } from "next"
import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Terminal, Settings, Package, GitBranch, Zap, Shield, Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Zap,
    description: "Quick installation and setup guide",
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: Settings,
    description: "Configure QMCF Scanner for your environment",
  },
  {
    id: "cli-reference",
    title: "CLI Reference",
    icon: Terminal,
    description: "Complete command-line interface documentation",
  },
  {
    id: "sdk",
    title: "SDK & API",
    icon: Code,
    description: "Programmatic integration with your applications",
  },
  {
    id: "open-source",
    title: "Open Source",
    icon: GitBranch,
    description: "Community edition and contribution guide",
  },
]

const cliCommands = [
  {
    command: "rivic scan",
    description: "Scan repository for cryptographic assets",
    example: "rivic scan --path ./src --output cbom.json",
  },
  {
    command: "rivic migrate",
    description: "Generate PQC migration plan",
    example: "rivic migrate --cbom cbom.json --target ml-kem-768",
  },
  {
    command: "rivic verify",
    description: "Verify algorithm compliance",
    example: "rivic verify --standard fips-203 --report",
  },
  {
    command: "rivic deploy",
    description: "Deploy Q-Hook runtime interceptor",
    example: "rivic deploy --mode hybrid --service api-gateway",
  },
]

const sdkExamples = {
  python: `from rivic import CBOMScanner, PQCMigrator

# Initialize scanner
scanner = CBOMScanner(
    path="./src",
    recursive=True,
    include_deps=True
)

# Generate CBOM
cbom = scanner.scan()
print(f"Found {len(cbom.assets)} crypto assets")

# Create migration plan
migrator = PQCMigrator(cbom)
plan = migrator.create_plan(
    target_algorithm="ML-KEM-768",
    mode="hybrid"
)

# Execute migration
result = migrator.execute(plan, dry_run=True)
print(f"Migration status: {result.status}")`,
  typescript: `import { CBOMScanner, PQCMigrator } from '@rivic/sdk';

// Initialize scanner
const scanner = new CBOMScanner({
  path: './src',
  recursive: true,
  includeDeps: true,
});

// Generate CBOM
const cbom = await scanner.scan();
console.log(\`Found \${cbom.assets.length} crypto assets\`);

// Create migration plan
const migrator = new PQCMigrator(cbom);
const plan = await migrator.createPlan({
  targetAlgorithm: 'ML-KEM-768',
  mode: 'hybrid',
});

// Execute migration
const result = await migrator.execute(plan, { dryRun: true });
console.log(\`Migration status: \${result.status}\`);`,
  rust: `use rivic::{CBOMScanner, PQCMigrator, ScanConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Initialize scanner
    let scanner = CBOMScanner::new(ScanConfig {
        path: "./src".into(),
        recursive: true,
        include_deps: true,
    });

    // Generate CBOM
    let cbom = scanner.scan().await?;
    println!("Found {} crypto assets", cbom.assets.len());

    // Create migration plan
    let migrator = PQCMigrator::new(cbom);
    let plan = migrator.create_plan(
        "ML-KEM-768",
        MigrationMode::Hybrid
    )?;

    // Execute migration
    let result = migrator.execute(&plan, true).await?;
    println!("Migration status: {:?}", result.status);
    Ok(())
}`,
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre className="p-4 bg-black/50 border border-white/10 rounded-lg overflow-x-auto text-sm">
        <code className="text-white/80">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-white/60" />}
      </button>
    </div>
  )
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const [activeLanguage, setActiveLanguage] = useState<"python" | "typescript" | "rust">("python")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-32">
                <h2 className="text-lg font-semibold text-white mb-4">QMCF Documentation</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <section.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-sm font-semibold text-white mb-2">Need Help?</h3>
                  <p className="text-xs text-white/60 mb-3">Join our community or contact support</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-xs" asChild>
                      <a href="https://github.com/rivic-security" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" className="text-xs bg-cyan-500 text-black" asChild>
                      <a href="mailto:support@rivic.io">Support</a>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 max-w-4xl">
              {activeSection === "getting-started" && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl font-bold text-white mb-4">Getting Started</h1>
                  <p className="text-white/70 text-lg mb-8">
                    Get up and running with Rivic CBOM Scanner in under 5 minutes.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Package className="w-6 h-6 text-cyan-400" />
                        Installation
                      </h2>
                      <p className="text-white/60 mb-4">Install the Rivic CLI using your preferred package manager:</p>
                      <div className="space-y-3">
                        <CodeBlock
                          code="# Using npm\nnpm install -g @rivic/cli\n\n# Using pip\npip install rivic-cli\n\n# Using cargo\ncargo install rivic-cli"
                          language="bash"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-cyan-400" />
                        Quick Start
                      </h2>
                      <CodeBlock
                        code={`# Authenticate with Rivic
rivic auth login

# Scan your repository
rivic scan --path . --output cbom.json

# View the results
rivic report --cbom cbom.json

# Generate migration plan
rivic migrate --cbom cbom.json --target ml-kem-768`}
                        language="bash"
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-cyan-400" />
                        What Gets Scanned
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "Source Code", desc: "Python, TypeScript, Java, Go, Rust, C/C++" },
                          { title: "Configuration", desc: "TLS configs, key files, certificates" },
                          { title: "Dependencies", desc: "npm, pip, cargo, maven packages" },
                          { title: "Containers", desc: "Docker images, Kubernetes manifests" },
                        ].map((item) => (
                          <div key={item.title} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-white/60">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "configuration" && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl font-bold text-white mb-4">Configuration</h1>
                  <p className="text-white/70 text-lg mb-8">
                    Configure CBOM Scanner for your specific environment and requirements.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">Configuration File</h2>
                      <p className="text-white/60 mb-4">
                        Create a <code className="px-2 py-1 bg-white/10 rounded">rivic.config.yaml</code> in your
                        project root:
                      </p>
                      <CodeBlock
                        code={`# rivic.config.yaml
version: "1.0"

scan:
  paths:
    - ./src
    - ./lib
  exclude:
    - node_modules
    - vendor
    - "**/*.test.*"
  languages:
    - python
    - typescript
    - rust
  recursive: true
  include_deps: true

output:
  format: cyclonedx  # cyclonedx | spdx | json
  version: "1.6"
  path: ./reports/cbom.json

migration:
  target_algorithm: ML-KEM-768
  mode: hybrid  # hybrid | pure-pqc
  fallback: true

governance:
  policy_path: ./policies
  enforce: true
  report_violations: true

integrations:
  kubernetes:
    enabled: true
    namespace: rivic-system
  prometheus:
    enabled: true
    port: 9090
  grafana:
    enabled: true
    dashboard: true`}
                        language="yaml"
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">Environment Variables</h2>
                      <div className="space-y-3">
                        {[
                          { var: "RIVIC_API_KEY", desc: "Your Rivic API key for authentication" },
                          { var: "RIVIC_ORG_ID", desc: "Organization ID for team features" },
                          { var: "RIVIC_LOG_LEVEL", desc: "Logging level (debug, info, warn, error)" },
                          { var: "RIVIC_CACHE_DIR", desc: "Cache directory for scan results" },
                        ].map((env) => (
                          <div
                            key={env.var}
                            className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-start gap-4"
                          >
                            <code className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm flex-shrink-0">
                              {env.var}
                            </code>
                            <p className="text-white/60 text-sm">{env.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "cli-reference" && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl font-bold text-white mb-4">CLI Reference</h1>
                  <p className="text-white/70 text-lg mb-8">
                    Complete command-line interface documentation for Rivic CBOM Scanner.
                  </p>

                  <div className="space-y-6">
                    {cliCommands.map((cmd) => (
                      <div key={cmd.command} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <Terminal className="w-5 h-5 text-cyan-400" />
                          <code className="text-lg font-semibold text-white">{cmd.command}</code>
                        </div>
                        <p className="text-white/60 mb-4">{cmd.description}</p>
                        <CodeBlock code={cmd.example} language="bash" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === "sdk" && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl font-bold text-white mb-4">SDK & API</h1>
                  <p className="text-white/70 text-lg mb-8">
                    Integrate Rivic directly into your applications with our official SDKs.
                  </p>

                  {/* Language tabs */}
                  <div className="flex gap-2 mb-6">
                    {(["python", "typescript", "rust"] as const).map((lang) => (
                      <Button
                        key={lang}
                        variant={activeLanguage === lang ? "default" : "ghost"}
                        className={activeLanguage === lang ? "bg-cyan-500 text-black" : "text-white/70"}
                        onClick={() => setActiveLanguage(lang)}
                      >
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </Button>
                    ))}
                  </div>

                  <CodeBlock code={sdkExamples[activeLanguage]} language={activeLanguage} />

                  <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-white/10 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">SDK Installation</h3>
                    <div className="space-y-2">
                      <CodeBlock
                        code={
                          activeLanguage === "python"
                            ? "pip install rivic-sdk"
                            : activeLanguage === "typescript"
                              ? "npm install @rivic/sdk"
                              : "cargo add rivic-sdk"
                        }
                        language="bash"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "open-source" && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl font-bold text-white mb-4">Open Source</h1>
                  <p className="text-white/70 text-lg mb-8">
                    Rivic CBOM Scanner Community Edition is open source and free to use.
                  </p>

                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <GitBranch className="w-6 h-6 text-cyan-400" />
                          <h3 className="text-xl font-semibold text-white">Community Edition</h3>
                        </div>
                        <ul className="space-y-2 text-white/70 mb-4">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-400" />
                            CBOM Scanner CLI
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-400" />
                            CycloneDX output
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-400" />
                            Basic migration plans
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-400" />
                            Community support
                          </li>
                        </ul>
                        <Button className="w-full bg-cyan-500 text-black" asChild>
                          <a
                            href="https://github.com/rivic-security/cbom-scanner"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GitBranch className="w-4 h-4 mr-2" />
                            View on GitHub
                          </a>
                        </Button>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <Shield className="w-6 h-6 text-purple-400" />
                          <h3 className="text-xl font-semibold text-white">Enterprise Edition</h3>
                        </div>
                        <ul className="space-y-2 text-white/70 mb-4">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-purple-400" />
                            All Community features
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-purple-400" />
                            Q-Hook Runtime
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-purple-400" />
                            Governance Plane
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-purple-400" />
                            Priority support
                          </li>
                        </ul>
                        <Button className="w-full bg-transparent" variant="outline" asChild>
                          <a href="mailto:sales@rivic.io">
                            Contact Sales
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">Contributing</h2>
                      <p className="text-white/60 mb-4">
                        We welcome contributions from the community. Here's how to get started:
                      </p>
                      <CodeBlock
                        code={`# Clone the repository
git clone https://github.com/rivic-security/cbom-scanner.git
cd cbom-scanner

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Submit a PR
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature`}
                        language="bash"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
