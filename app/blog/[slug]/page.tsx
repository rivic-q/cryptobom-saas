import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedPencilImage } from "@/components/ui/animated-pencil-image"
import { AnimatedLogo } from "@/components/ui/animated-logo"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react"

// Sample blog post content
const blogContent: Record<
  string,
  { title: string; content: string; author: string; date: string; readTime: string; category: string }
> = {
  "founder-story-building-rivic": {
    title: "Founder Story: Why We Built Rivic",
    author: "Revan Sai Ande, CEO & Founder",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Company",
    content: `
## The Quantum Wake-Up Call

My name is Revan Sai Ande, and I'm the founder of Rivic. This is the story of why we built what could be Europe's most important financial security company.

![Berlin Startup Scene](/blog/founder-story/berlin-skyline.svg)
*The Berlin skyline where our quantum journey began - from consulting to building the future*

It was October 2023, and I was working as a senior security consultant for several European banks. After a particularly eye-opening meeting in Frankfurt where I learned about the quantum threat, I knew I had to act. The moment that changed everything was realizing that every bank I consulted for was processing billions in transactions daily, protected by encryption that could become obsolete overnight.

That revelation led me to Berlin in early 2024 - the perfect place to build a European solution to a global problem.

### The Terrifying Reality of HNDL

That silence led me down a rabbit hole that changed my life. I discovered **Harvest Now, Decrypt Later (HNDL)** attacks - a threat so immediate and devastating that I couldn't sleep for weeks.

![HNDL Attack Visualization](/blog/founder-story/hndl-attack-diagram.jpg)
*How HNDL attacks work: collecting encrypted data today for future quantum decryption*

Here's the terrifying reality: Nation-state actors and sophisticated cybercriminals are already harvesting encrypted financial data. They're not waiting for quantum computers to arrive - they're collecting everything now, knowing that within 5-10 years, quantum algorithms will make today's encryption as weak as a padlock.

Think about it:
- Every wire transfer you process today
- Every customer authentication session
- Every encrypted database backup
- Every secure API call

All of it is being collected. All of it will be readable when quantum computers mature.

For banks, this means 30+ years of "secure" customer data could become an open book overnight.

### The Berlin Breakthrough

I moved to Berlin in early 2024, drawn by Germany's leadership in quantum research and the EU's progressive stance on digital sovereignty. Berlin felt like the perfect place to build a European solution to a global problem.

![Berlin Tech Scene](/blog/founder-story/berlin-startup.jpg)
*Working from a small office near Hackescher Markt, Berlin - where Rivic was born*

Working from a small office near Hackescher Markt, I spent months studying every aspect of post-quantum cryptography. I read NIST standards until my eyes burned. I analyzed every PQC implementation on the market. I spoke with researchers at TU Berlin, cryptographers at BSI, and CTOs at major European banks.

What I found was deeply frustrating.

### Why Existing Solutions Failed Banks

Every PQC solution I evaluated had the same fundamental problems:

![Traditional PQC Migration Problems](/blog/founder-story/migration-problems.jpg)
*The four critical problems with traditional post-quantum cryptography migrations*

**1. Complete Rewrites Required**
Most solutions demanded that banks rewrite critical applications. For a system processing millions of transactions, this was like performing heart surgery while the patient ran a marathon.

**2. Massive Operational Disruption** 
Traditional migration approaches required downtime. But banks can't just "turn off" payment systems for maintenance. Every minute offline means millions in lost revenue and damaged trust.

**3. No EU Regulatory Alignment**
Solutions were built for generic compliance, not the specific requirements of eIDAS 2.0, DORA, and EU banking regulations. Banks faced a choice: secure systems or regulatory compliance.

**4. Zero Cryptographic Visibility**
The biggest shock: Most banks couldn't even tell me what cryptographic algorithms they were using. How do you migrate to quantum-safe cryptography when you don't know what you're migrating from?

### The Rivic Vision Takes Shape

In June 2024, I had a breakthrough. What if we could solve all these problems with a fundamentally different approach?

![Rivic Solution Architecture](/blog/founder-story/rivic-architecture.jpg)
*The Rivic approach: Zero code changes, zero downtime, full EU compliance*

**Zero Code Changes**: Instead of rewriting applications, we'd intercept cryptographic operations at the system level. Banks could become quantum-safe without touching a single line of business logic.

**Zero Downtime**: We'd run classical and quantum-safe algorithms in parallel using hybrid cryptography. Migration would happen seamlessly while systems stayed online.

**Full EU Compliance**: We'd build specifically for European banking regulations from day one. eIDAS 2.0, DORA, GDPR - compliance would be the foundation, not an afterthought.

**Complete Cryptographic Visibility**: We'd start with a CBOM (Cryptographic Bill of Materials) scanner that mapped every algorithm in a bank's infrastructure. You can't protect what you can't see.

### Building the Quantum Mesh Cryptographic Foundation

The name "Rivic" comes from "River" + "Civic" - representing the flow of secure financial transactions that serve the public good. Our mission became clear: **Build the Quantum Mesh Cryptographic Foundation (QMCF) that European banking deserves.**

![Team Building](/blog/founder-story/team-building.jpg)
*Assembling our world-class team of quantum security experts in Berlin*

By August 2024, I had assembled a world-class team:
- Former IBM Quantum researchers
- NIST PQC specification contributors  
- EU banking security veterans
- Open source cryptography experts

We made a critical decision early on: Rivic would be built on open standards. CNCF compatibility, CycloneDX CBOM format, IBM Quantum Network partnership - we wanted to create solutions that worked with the entire ecosystem, not against it.

### The Technology Stack

Our core innovation is the **Q-Hook Runtime** - a cryptographic interception layer that sits between applications and the operating system. When an application calls for RSA encryption, Q-Hook can:

![Q-Hook Runtime Architecture](/blog/founder-story/q-hook-architecture.jpg)
*The Q-Hook Runtime: Intercepting and upgrading cryptographic operations in real-time*

1. Execute the original RSA operation (for backward compatibility)
2. Simultaneously perform ML-KEM (NIST FIPS 203) quantum-safe encryption
3. Store both results with cryptographic attestation
4. Gradually phase out classical algorithms as confidence builds

This hybrid approach means banks can start their quantum migration today, without risk.

The **CBOM Scanner** became our second breakthrough. Using static analysis and runtime monitoring, it creates a complete cryptographic inventory:

![CBOM Scanner Dashboard](/blog/founder-story/cbom-dashboard.jpg)
*CBOM Scanner results: Complete cryptographic visibility for a major European bank*

- Every algorithm used
- Every key size and certificate
- Every cryptographic library version
- Risk assessment based on quantum vulnerability

### From Startup to Scale

By November 2024, we had our first pilot customers - regional banks in Germany and the Netherlands. The results exceeded our wildest expectations:

![Pilot Results](/blog/founder-story/pilot-results.jpg)
*Results from our first pilot deployments: Zero downtime, full compliance, 85% cost reduction*

- **Complete cryptographic inventory** mapped in under 48 hours
- **Zero application downtime** during hybrid cryptography deployment
- **Full eIDAS 2.0 compliance** achieved 18 months ahead of deadline
- **Cost reduction** of 85% vs. traditional PQC migration approaches

Word spread quickly through European banking networks. By December, we were working with institutions processing over €500 billion in annual transactions.

### The IBM Quantum Partnership

One of our proudest achievements has been joining the IBM Quantum Network. This partnership gives us:

![IBM Quantum Partnership](/blog/founder-story/ibm-quantum-partnership.jpg)
*Signing our IBM Quantum Network partnership agreement - bringing quantum attestation to European banks*

- Access to real quantum hardware for algorithm testing
- Quantum attestation services for cryptographic operations
- Direct input into IBM's post-quantum roadmap
- Credibility with enterprise customers who trust IBM's quantum leadership

When a bank uses Rivic's quantum-safe algorithms, IBM's quantum systems can provide cryptographic attestation - mathematical proof that the encryption is quantum-resistant.

### The Regulatory Advantage

Building in Berlin gave us unprecedented access to EU regulatory bodies. We worked directly with:

![Regulatory Partnerships](/blog/founder-story/regulatory-meetings.jpg)
*Meeting with EU regulatory bodies to shape quantum-safe banking standards*

- **BSI (Bundesamt für Sicherheit in der Informationstechnik)** on German cybersecurity standards
- **European Banking Authority** on DORA compliance interpretation  
- **eIDAS 2.0 working groups** on quantum-safe identity frameworks

This regulatory insight allowed us to build compliance directly into our architecture. When banks deploy Rivic, they're not just getting quantum safety - they're getting regulatory future-proofing.

### The Open Source Commitment

From day one, we committed to open source principles:

![Open Source Contribution](/blog/founder-story/open-source-github.jpg)
*Our GitHub repositories: Making quantum safety transparent and collaborative*

- **CBOM Scanner** core engine is MIT licensed
- **CycloneDX integration** contributes back to the standard
- **CNCF compatibility** ensures interoperability
- **GitHub repositories** provide full transparency

We believe quantum safety is too important for vendor lock-in. Banks should own their security infrastructure.

### Looking Forward: The Mission Continues

Today, Rivic is more than a company - it's a movement toward quantum-safe European digital sovereignty. We're preparing the financial infrastructure that will serve Europe for the next 50 years.

![Quantum Timeline](/blog/founder-story/quantum-timeline.jpg)
*The accelerating quantum timeline: Why banks must act now*

The quantum timeline keeps accelerating:
- Google achieved quantum advantage in specific algorithms
- IBM's quantum roadmap shows exponential progress
- Nation-state quantum programs invest billions annually
- The eIDAS 2.0 deadline of January 2027 approaches rapidly

But we're ready. Our customers are ready. European banking will be quantum-safe because we made it possible.

### Why This Matters to You

If you're reading this as a bank executive, CISO, or regulator, understand this: The quantum threat isn't theoretical. HNDL attacks are happening now. The data being harvested today will be compromised when quantum computers mature.

But there's hope. The technology exists to protect against quantum threats. The regulatory framework (eIDAS 2.0, DORA) creates urgency and alignment. The economic case for quantum-safe migration has never been clearer.

Rivic exists to make this transition seamless. We built the Quantum Mesh Cryptographic Foundation so that European banks could embrace quantum safety without sacrificing operational excellence.

### The Personal Why

People ask me why I left a comfortable consulting career to build Rivic. The answer is simple: **I couldn't live with the knowledge that European financial infrastructure was vulnerable to quantum attack and do nothing about it.**

![Personal Mission](/blog/founder-story/personal-mission.jpg)
*The personal mission: Protecting European financial infrastructure for the next generation*

Building Rivic has been the hardest thing I've ever done. But it's also been the most important. Every day, we're protecting billions in transactions and millions of customers who trust European banks with their financial lives.

The quantum future is coming. With Rivic, European banking will be ready.

### Join Our Mission

We're always looking for talented people who share our vision of quantum-safe European digital infrastructure. Whether you're a cryptographer, a developer, a regulatory expert, or a business leader, there's a place for you in this mission.

![Team Growth](/blog/founder-story/team-growth.jpg)
*Join our growing team: Building the future of quantum-safe banking*

**The future of banking security is quantum-safe. We're here to make that transition seamless.**

---

*Ready to learn more about our quantum-safe solutions? [Request a demo](/demo) or [contact our team](mailto:Rivic.revan.ande@gmail.com) directly.*

*Follow our journey on [GitHub](https://github.com/rivic-q) or connect with me personally on [LinkedIn](https://linkedin.com/in/revan-sai-ande) to discuss quantum-safe banking.*
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
            <AnimatedLogo delay={300}>
              <div className="flex flex-wrap items-center gap-4 text-foreground/60 p-4 bg-card/50 border border-border/50 rounded-xl">
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
            </AnimatedLogo>
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
              // Handle images: ![alt text](image url)
              if (line.startsWith("![")) {
                const match = line.match(/!\[(.*?)\]\((.*?)\)/)
                if (match) {
                  const [, alt, src] = match
                  return (
                    <div key={i} className="my-8">
                      <AnimatedPencilImage
                        src={src}
                        alt={alt}
                        width={800}
                        height={400}
                        className="w-full rounded-xl shadow-2xl"
                        delay={i * 200}
                      />
                    </div>
                  )
                }
              }
              // Handle image captions: *italic text*
              if (line.startsWith("*") && line.endsWith("*") && !line.includes("**")) {
                return (
                  <p key={i} className="text-sm text-foreground/60 italic text-center mt-2 mb-8">
                    {line.replace(/\*/g, "")}
                  </p>
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
