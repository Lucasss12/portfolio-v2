/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lucas-mene.vercel.app/',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;