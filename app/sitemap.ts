import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? "https://rivic-q.github.io/cryptobom-saas"
    : "http://localhost:3000"
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date(),
      changeFrequency: "weekly", 
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog/why-quantum-threat-matters-now`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/eidas-2-deadline-approaching`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly", 
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/founder-story-building-rivic`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.4,
    }
  ]
}
