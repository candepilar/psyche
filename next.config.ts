import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/psyche",
  assetPrefix: "/psyche/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
