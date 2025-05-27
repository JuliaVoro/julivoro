/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    // Disable image optimization for static export
    unoptimized: true,
    // Add any external image domains here
    domains: ['images.unsplash.com'],
    // Configure the path for static files
    path: '/_next/static/media',
    // Use the default loader
    loader: 'default'
  },
  
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  
  // Output standalone for Vercel
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
