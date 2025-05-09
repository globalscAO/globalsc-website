import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "conteudolocal.globalsc.ao",
      },
      {
        protocol: "https",
        hostname: "global-services-corporation.github.io",
      },
    ],
  },
};

export default nextConfig;
