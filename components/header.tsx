"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { RivicLogo } from "./rivic-logo"
import { Button } from "./ui/button"
import { Menu, X, Github, Mail } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "/#problem-solution", label: "Product" },
    { href: "/#architecture", label: "Architecture" },
    { href: "/#open-source", label: "Open Source" },
    { href: "/#compliance", label: "Compliance" },
    { href: "/#roadmap", label: "Roadmap" },
    { href: "/#team", label: "Team" },
    { href: "/docs", label: "Docs" },
    { href: "/demo", label: "Demo" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div
        className={`
          flex items-center justify-center gap-4 px-4 py-2.5 rounded-2xl border transition-all duration-300
          ${
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
              : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
          }
        `}
      >
        <Link href="/" className="transform transition-transform duration-200 hover:scale-105">
          <RivicLogo />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-foreground/70 hover:text-foreground transition-all duration-300 group px-2.5 py-1.5 rounded-lg hover:bg-foreground/5 text-sm font-medium"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-200 group-hover:w-3 rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-all duration-200 rounded-xl gap-1.5"
            asChild
          >
            <a href="https://github.com/rivic-crypto" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-cyan-500 hover:bg-cyan-400 text-black transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 rounded-xl gap-1.5"
            asChild
          >
            <a href="mailto:contact@rivic.io">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="xl:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 p-4 rounded-xl bg-background/95 backdrop-blur-lg border border-border/30 shadow-lg max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-lg hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
              <Button variant="ghost" size="sm" className="flex-1 gap-2" asChild>
                <a href="https://github.com/rivic-crypto" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="flex-1 bg-cyan-500 text-black gap-2" asChild>
                <a href="mailto:contact@rivic.io">
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
