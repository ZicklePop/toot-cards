const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.*',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
