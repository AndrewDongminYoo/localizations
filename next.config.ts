import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ destination: "/en", permanent: false, source: "/" }];
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
