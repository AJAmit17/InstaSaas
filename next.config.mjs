/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fblr4-5.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
