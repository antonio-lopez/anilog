/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s4.anilist.co'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
