/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      // '/profile': { page: '/profile' },
      // Add other pages here
    }
  }
}

module.exports = nextConfig
