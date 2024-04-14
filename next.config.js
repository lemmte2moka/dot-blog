/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
}

module.exports = nextConfig
