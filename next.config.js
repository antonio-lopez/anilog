/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['s4.anilist.co'],
  },
};

module.exports = nextConfig;
