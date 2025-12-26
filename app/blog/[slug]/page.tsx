import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react"

// Sample blog post content
const blogContent: Record<
  string,
  { title: string; content: string; author: string; date: string; readTime: string; category: string }
> = {
  "founder-story-building-rivic": {
    title: "Founder Story: Why We Built Rivic",
    author: "Rivic Founders",
    date: "2024-12-15",
    readTime: "10 min read",
    category: "Company",
    content: `
## The Quantum Threat We Couldn't Ignore

In 2023, while working in the European financial sector, we witnessed something alarming. Banks were processing billions in transactions daily, protected by encryption that could become obsolete overnight. The quantum threat wasn't theoretical - it was a ticking clock.

### Harvest Now, Decrypt Later

The concept of HNDL (Harvest Now, Decrypt Later) attacks became our wake-up call. Nation-state actors and sophisticated attackers are already collecting encrypted financial data, waiting for quantum computers powerful enough to break RSA and ECC encryption. Once that happens, decades of "secure" communications become readable.

For banks, this means:
- Customer financial data exposed
- Transaction histories compromised  
- Authentication systems broken
- Regulatory violations across GDPR, DORA, and eIDAS 2.0

### Why Existing Solutions Fall Short

We evaluated every post-quantum solution on the market. What we found was frustrating:

1. **Complete rewrites required** - Most PQC implementations demanded massive code changes
2. **Operational disruption** - Migration meant downtime, which banks cannot afford
3. **Compliance gaps** - Solutions weren't designed for EU regulatory frameworks
4. **No visibility** - Banks couldn't even inventory their current cryptographic assets

### The Rivic Vision

We built Rivic around three principles:

**Zero Code Changes**: Our Q-Hook runtime intercepts cryptographic operations at the system level. Banks don't rewrite a single line of application code.

**Zero Downtime**: Hybrid cryptography runs classical and quantum-safe algorithms in parallel. Migration happens while systems stay online.

**Full Compliance**: Built specifically for eIDAS 2.0, DORA, and EU banking regulations. Not an afterthought - the foundation.

### The Road Ahead

Today, Rivic is production-ready. We're working with regional banks across the EU, and our CBOM Scanner has mapped cryptographic assets for over 500 financial applications.

The quantum computing timeline keeps accelerating. Google, IBM, and others are making breakthroughs monthly. The January 2027 eIDAS 2.0 deadline isn't far away.

We built Rivic because the financial system deserves protection that's proactive, not reactive. Because the cost of waiting is measured in compromised trust and regulatory penalties. Because quantum-safe security shouldn't require quantum-level complexity.

**The future of banking security is quantum-safe. We're here to make that transition seamless.**

---

*Interested in learning more? [Request a demo](/demo) or [contact our team](mailto:contact@rivic.io).*
    `,
  },
  "why-quantum-threat-matters-now": {
    title: "Why the Quantum Threat Matters Now: HNDL Attacks Are Already Happening",
    author: "Rivic Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Quantum Security",
    content: `
## The Invisible Attack Happening Today

While quantum computers capable of breaking RSA encryption don't exist yet, a sophisticated attack vector is already being exploited: **Harvest Now, Decrypt Later (HNDL)**.

### What is HNDL?

HNDL attacks follow a simple but devastating logic:

1. **Harvest** - Attackers intercept and store encrypted data today
2. **Wait** - They hold this data until quantum computers mature
3. **Decrypt** - Once available, quantum algorithms break the encryption
4. **Exploit** - Historical data becomes readable, leading to fraud, identity theft, and espionage

### Why Banks Are Primary Targets

Financial institutions are particularly vulnerable because:

- **Long-term data sensitivity**: Financial records remain valuable for decades
- **High-value transactions**: Payment data, wire transfers, investment positions
- **Identity information**: KYC data, authentication credentials, personal details
- **Regulatory exposure**: Breaches trigger GDPR, DORA, and sector-specific penalties

### The Timeline Is Closer Than You Think

NIST estimates "cryptographically relevant quantum computers" (CRQCs) could emerge by 2030-2035. But here's what most people miss:

- Data harvested today will be decryptable when CRQCs arrive
- Migration to post-quantum cryptography takes 3-5 years for complex systems
- Regulatory deadlines (eIDAS 2.0: January 2027) add urgency

**If you start migrating in 2030, you're already too late.**

### What Can Banks Do Now?

1. **Inventory your cryptographic assets** - Use CBOM (Cryptographic Bill of Materials) scanning
2. **Assess quantum risk** - Identify which systems use vulnerable algorithms
3. **Plan hybrid migration** - Implement classical + PQC algorithms in parallel
4. **Meet compliance deadlines** - Align with eIDAS 2.0 and DORA requirements

### Conclusion

HNDL attacks represent a clear and present danger. The data being harvested today could compromise your institution for decades. Proactive migration to quantum-safe cryptography isn't optional - it's essential.

---

*Ready to assess your quantum risk? [Try our CBOM Scanner demo](/demo) or [request a consultation](mailto:contact@rivic.io).*
    `,
  },
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogContent[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-foreground/60">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-12 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                )
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                )
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-foreground/80 ml-6">
                    {line.replace("- ", "")}
                  </li>
                )
              }
              if (
                line.startsWith("1. ") ||
                line.startsWith("2. ") ||
                line.startsWith("3. ") ||
                line.startsWith("4. ")
              ) {
                return (
                  <li key={i} className="text-foreground/80 ml-6 list-decimal">
                    {line.replace(/^\d+\. /, "")}
                  </li>
                )
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p key={i} className="text-foreground font-semibold my-4">
                    {line.replace(/\*\*/g, "")}
                  </p>
                )
              }
              if (line.startsWith("---")) {
                return <hr key={i} className="my-8 border-border" />
              }
              if (line.trim() === "") {
                return null
              }
              return (
                <p key={i} className="text-foreground/80 my-4 leading-relaxed">
                  {line}
                </p>
              )
            })}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-foreground/60">Share this article</span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://rivic.io/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://rivic.io/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Ready to See Rivic in Action?</h3>
            <p className="text-foreground/70 mb-4">
              Try our interactive CBOM Scanner demo and see how we detect cryptographic vulnerabilities.
            </p>
            <Link
              href="/demo"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Try Live Demo
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
