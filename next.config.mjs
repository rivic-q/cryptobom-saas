/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/cryptobom-saas' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cryptobom-saas/' : '',
}

export default nextConfig