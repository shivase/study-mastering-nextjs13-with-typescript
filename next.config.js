/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: false,
  },
};
