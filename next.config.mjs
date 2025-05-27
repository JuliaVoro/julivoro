/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Server Actions are enabled by default in Next.js 14+
  
  // Image optimization
  images: {
    // Enable image optimization
    unoptimized: false,
    // Add any external image domains here
    domains: ['images.unsplash.com'],
    // Configure image formats
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configure image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configure the image path in the public folder
    path: '/_next/image',
    // Configure the image loader
    loader: 'default',
    // Configure the image quality
    quality: 75,
    // Configure the image placeholder
    placeholder: 'blur',
    // Configure the image blur data URL
    blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
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
    
    // Handle static files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
        publicPath: '/_next/',
      },
    });
    
    return config;
  },
};

export default nextConfig;
