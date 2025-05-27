import config from './config.js';

export default function customLoader({ src, width, quality }) {
  // If the image is from an external source, return it as is
  if (src.startsWith('http') || src.startsWith('https') || src.startsWith('data:')) {
    return src;
  }
  
  // For local images, prepend the base URL if in production
  const baseUrl = config.isProd ? config.baseUrl : '';
  return `${baseUrl}${src}`;
}
