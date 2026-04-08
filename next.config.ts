import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "simmacademy.emergenciasimm.com.br" },
    ],
  },
};

export default nextConfig;
