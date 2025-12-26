import Link from "next/link"
import { RivicLogo } from "./rivic-logo"
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone, ExternalLink } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/rivic-crypto", label: "rivic-crypto" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/revan-sai-ande-988504127",
    label: "Revan Ande",
  },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/RivicSecurity", label: "@RivicSecurity" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/rivic.security", label: "@rivic.security" },
]

const partners = [
  { name: "IBM", label: "Quantum Partner", color: "blue" },
  { name: "SIB", label: "Incubator", color: "cyan" },
  { name: "HWR", label: "Berlin", color: "emerald" },
  { name: "BQ", label: "Alliance", color: "purple" },
  { name: "CNCF", label: "Compatible", color: "blue" },
  { name: "TUB", label: "Research", color: "red" },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-4">
      <div className="container mx-auto">
        {/* Partners Banner */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <p className="text-center text-sm text-white/40 mb-6">Partners & Certifications</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className={`text-${partner.color}-400 font-bold`}>{partner.name}</span>
                <span className="text-white/40 text-xs">{partner.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <RivicLogo className="mb-4" />
            <p className="text-white/70 mb-4 max-w-md leading-relaxed">
              Quantum-Safe Secure Platform (QSSP) for EU banking. Enterprise-grade cryptographic infrastructure with
              zero-code migration, full compliance, and IBM Quantum attestation.
            </p>
            <p className="text-sm text-white/50 italic mb-6">"Building Quantum-Safe Security for Tomorrow"</p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+4915510480340" className="hover:text-white transition-colors">
                  +49 155 1048 0340
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:contact@rivic.io" className="hover:text-white transition-colors">
                  contact@rivic.io
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/#problem-solution" className="hover:text-cyan-400 transition-colors">
                  CBOM Scanner
                </Link>
              </li>
              <li>
                <Link href="/#architecture" className="hover:text-cyan-400 transition-colors">
                  Q-Hook Runtime
                </Link>
              </li>
              <li>
                <Link href="/#architecture" className="hover:text-cyan-400 transition-colors">
                  Governance Plane
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-cyan-400 transition-colors">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-cyan-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/rivic-crypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  eIDAS 2.0 Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/#team" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-cyan-400 transition-colors">
                  Team & Advisors
                </Link>
              </li>
              <li>
                <Link href="/#roadmap" className="hover:text-cyan-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <a href="mailto:careers@rivic.io" className="hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:press@rivic.io" className="hover:text-cyan-400 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="mailto:investors@rivic.io" className="hover:text-cyan-400 transition-colors">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">&copy; 2025 Rivic. All rights reserved. Berlin, Germany.</p>
          <div className="flex flex-wrap justify-center gap-3 text-white/40 text-xs">
            <span className="px-2 py-1 bg-white/5 rounded">NIST FIPS 203/204/205</span>
            <span className="px-2 py-1 bg-white/5 rounded">CycloneDX 1.6</span>
            <span className="px-2 py-1 bg-white/5 rounded">CNCF Compatible</span>
            <span className="px-2 py-1 bg-white/5 rounded">IBM Quantum Partner</span>
            <span className="px-2 py-1 bg-white/5 rounded">eIDAS 2.0 Ready</span>
          </div>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
