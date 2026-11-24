import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/writing/subtiles-2", destination: "/writing/jane-street-puzzle-february-2026", permanent: true },
      { source: "/writing/shut-the-box", destination: "/writing/jane-street-puzzle-november-2025", permanent: true },
      { source: "/writing/what-would-we-still-want-to-make", destination: "/writing/amodeis-experience-machine", permanent: true },
    ];
  },
  experimental: {
    scrollRestoration: true,
  }
};

export default nextConfig;
