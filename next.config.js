/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
  }
}

module.exports = nextConfig