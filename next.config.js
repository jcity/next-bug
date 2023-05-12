/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/admin/:path*',
        destination: `${process.env.ADMIN_API_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
