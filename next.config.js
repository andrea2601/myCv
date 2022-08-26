/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.pngwing.com', 'patternico.com'],
  },
}

module.exports = nextConfig
