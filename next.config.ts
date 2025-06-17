import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img.youtube.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@tanstack/react-query', 'motion', 'swiper'],
  },
};

export default nextConfig;
