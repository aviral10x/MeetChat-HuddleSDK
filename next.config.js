/** @type {import('next').NextConfig} */
const withImages = require('next-images')
// module.exports = withImages(
//   {
//     devIndicators: {
//       autoPrerender: false,
//     },

//   }
// )

module.exports = {
  reactStrictMode: true,
  // images: {
  //   domains: ['storage.googleapis.com']
  // }
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/sentinel-nft/raw-assets/**',
      },
    ],
  },
}
