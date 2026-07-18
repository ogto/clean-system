import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local vinext development does not provide Cloudflare's ASSETS/IMAGES
  // bindings. Serve the already optimized project images directly instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
