/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
