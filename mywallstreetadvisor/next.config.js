/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  basePath: '/MyWallStreetAdvisor',
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;

