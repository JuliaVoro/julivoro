/** @type {import('next').NextConfig} */
const config = require('./config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static exports for Vercel
  output: config.isVercel ? undefined : 'export',
  
  // Base path configuration
  basePath: '',
  assetPrefix: config.baseUrl,
  
  // Image optimization
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: config.baseUrl,
  },
  
  // React Strict Mode
  reactStrictMode: true,
  
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
  
  // Enable trailing slashes
  trailingSlash: true,
  
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
