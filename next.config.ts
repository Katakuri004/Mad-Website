import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during builds
  },
  /* Add other config options here */
};

export default nextConfig;

