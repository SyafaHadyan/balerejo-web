import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" is only required at build time.
  // Skipping it in dev avoids Turbopack's strict static-params check on dynamic routes.
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@balerejo/shared"],
};

export default nextConfig;
