/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['storage.googleapis.com','dot-blog.assets.newt.so'],
  },
}

module.exports = nextConfig
