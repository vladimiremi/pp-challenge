/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
