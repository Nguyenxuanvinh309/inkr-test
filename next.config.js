/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image: {
    domains: ['https://localization-system.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
