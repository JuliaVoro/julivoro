/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Server Actions are enabled by default in Next.js 14+
  
  // Image optimization
  images: {
    unoptimized: true, // Disable Image Optimization API for static exports
    domains: ['images.unsplash.com'], // Add any external image domains here
  },
  
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  
  // Disable static exports for Vercel
  output: 'standalone',
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
