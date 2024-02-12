// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
