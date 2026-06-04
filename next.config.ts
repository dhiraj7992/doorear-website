import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.doorear.com' }],
        destination: 'https://doorear.com/:path*',
        permanent: true,
      },
      {
        source: '/signin',
        destination: 'https://app.doorear.com/login',
        permanent: true,
      },
      {
        source: '/signup',
        destination: 'https://app.doorear.com/signup',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
