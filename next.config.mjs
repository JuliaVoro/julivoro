/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  // Disable static exports for Vercel deployment
  output: isVercel ? undefined : 'export',
  
  // Remove basePath and assetPrefix for Vercel
  basePath: '',
  assetPrefix: '',
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: isVercel 
      ? 'https://landingjulia-4izii24u2-juliavoros-projects.vercel.app' 
      : 'http://localhost:3000',
  },
  
  // React Strict Mode
  reactStrictMode: true,
  
  // Enable webpack configuration
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
  
  // Enable trailing slashes for static exports
  trailingSlash: true,
};

export default nextConfig;
