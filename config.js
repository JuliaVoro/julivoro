const isProd = process.env.NODE_ENV === 'production'
const isVercel = process.env.VERCEL === '1'

// Get the current URL for the environment
const getBaseUrl = () => {
  if (isVercel) return ''
  if (isProd) return 'https://landingjulia-4izii24u2-juliavoros-projects.vercel.app'
  return 'http://localhost:3000'
}

module.exports = {
  baseUrl: getBaseUrl(),
  isProd,
  isVercel
}
