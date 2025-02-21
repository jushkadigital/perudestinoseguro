/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'practica.pdsviajes.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      
      {
        protocol: 'https',
        hostname: 'vps.perudestinoseguro.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash:true,
  async redirects() {
    return [
      {
        source: '/:slug([A-Za-z0-9#,.\\-_]{18,})/',
        destination: '/blog/:slug',
        permanent: true
      },

      {
        source: '/nosotros2/',
        destination: '/nosotros',
        permanent: true
      },
      {
        source: '/guia-viajera/',
        destination: '/blog?page=1',
        permanent: true
      },

      // {source:'https://perudestinoseguro.com/tours-peru/',
      // destination:'/',
      // permanent:true},
    ]
  }
}

module.exports = nextConfig
