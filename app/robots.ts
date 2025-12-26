import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? "https://rivic-q.github.io/cryptobom-saas"
    : "http://localhost:3000"
    
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/node_modules/",
          "*.json"
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User", 
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
