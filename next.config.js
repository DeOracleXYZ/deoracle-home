/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  
}

module.exports = nextConfig
