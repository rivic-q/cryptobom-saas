import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

// Blog posts data
const blogPosts = [
  {
    slug: "why-quantum-threat-matters-now",
    title: "Why the Quantum Threat Matters Now: HNDL Attacks Are Already Happening",
    excerpt:
      "Harvest Now, Decrypt Later (HNDL) attacks are not a future threat - they're happening today. Learn why EU banks need to act before quantum computers break current encryption.",
    author: "QMCF Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Quantum Security",
    featured: true,
  },
  {
    slug: "eidas-2-deadline-approaching",
    title: "eIDAS 2.0 Deadline: What EU Financial Institutions Need to Know",
    excerpt:
      "The January 2027 deadline for eIDAS 2.0 compliance is approaching fast. Here's your complete guide to quantum-safe identity frameworks and what changes you need to make.",
    author: "QMCF Team",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Compliance",
    featured: true,
  },
  {
    slug: "cbom-scanner-introduction",
    title: "Introducing CBOM Scanner: Your First Step to Quantum Safety",
    excerpt:
      "Understanding your cryptographic inventory is the foundation of any PQC migration. Learn how our CBOM Scanner maps every algorithm in your infrastructure.",
    author: "Rivic Team",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Product",
    featured: false,
  },
  {
    slug: "ml-kem-ml-dsa-explained",
    title: "ML-KEM and ML-DSA Explained: The NIST Standards Replacing RSA",
    excerpt:
      "Deep dive into the new NIST post-quantum cryptography standards. Understand how ML-KEM (FIPS 203) and ML-DSA (FIPS 204) work and why they're quantum-resistant.",
    author: "Rivic Team",
    date: "2024-12-20",
    readTime: "15 min read",
    category: "Technical",
    featured: false,
  },
  {
    slug: "founder-story-building-rivic",
    title: "Founder Story: From Frankfurt to Berlin - Building Europe's Quantum-Safe Future",
    excerpt:
      "The personal journey of Revan Sai Ande from discovering the quantum threat to building Rivic in Berlin. How a wake-up call in a Frankfurt bank meeting room led to Europe's quantum-safe banking revolution.",
    author: "Revan Sai Ande, CEO & Founder",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Company",
    featured: true,
  },
  {
    slug: "hybrid-cryptography-migration",
    title: "Zero-Downtime Migration: The Hybrid Cryptography Approach",
    excerpt:
      "How to migrate to post-quantum cryptography without disrupting operations. Our hybrid approach runs classical and PQC algorithms in parallel for seamless transition.",
    author: "Rivic Team",
    date: "2024-12-10",
    readTime: "9 min read",
    category: "Technical",
    featured: false,
  },
  {
    slug: "dora-compliance-cryptography",
    title: "DORA Compliance and Cryptographic Risk Management",
    excerpt:
      "The Digital Operational Resilience Act (DORA) requires robust ICT risk management. Here's how quantum-safe cryptography fits into your DORA compliance strategy.",
    author: "Rivic Team",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Compliance",
    featured: false,
  },
  {
    slug: "cncf-cyclonedx-integration",
    title: "CNCF and CycloneDX: Building on Open Standards",
    excerpt:
      "Rivic's commitment to open standards. How we integrate with CNCF ecosystem and use CycloneDX 1.6 for interoperable cryptographic bill of materials.",
    author: "Rivic Team",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "Technical",
    featured: false,
  },
]

const categories = ["All", "Quantum Security", "Compliance", "Technical", "Product", "Company"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Rivic Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Insights on Quantum Security</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Expert perspectives on post-quantum cryptography, regulatory compliance, and the future of banking
              security.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{post.title[0]}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-foreground/50">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row gap-6 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="md:w-48 h-32 flex-shrink-0 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-lg flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/20">{post.title[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-foreground/50 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mt-20 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl border border-primary/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stay Updated on Quantum Security</h2>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Get the latest insights on PQC migration, compliance updates, and Rivic product news delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
