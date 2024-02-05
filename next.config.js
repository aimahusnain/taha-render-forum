/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")


const nextConfig = {
  compiler:{
        removeConsole: true,
    },
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = withContentlayer({ ...nextConfig });