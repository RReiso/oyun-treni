/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const path = require("path");

module.exports = {
  nextConfig,
  images: {
    domains: ["res.cloudinary.com"],
  },
  includePaths: [path.join(__dirname, "styles")],
};
