/** @type {import('next').NextConfig} */
const nextConfig =  {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async redirects() {
   
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ]
  },
};

const withPWA=require("next-pwa")({
  dest:"public",
  register:true,
  skipWaiting:true,
  disable:process.env.NODE_ENV==="development"
})

module.exports = withPWA({
  ...nextConfig,
 
});
