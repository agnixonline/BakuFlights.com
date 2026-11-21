/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [{ source: '/contact', destination: '/tours', permanent: true }]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
