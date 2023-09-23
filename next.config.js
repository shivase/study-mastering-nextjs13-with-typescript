/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  webpack: (config, options) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};
