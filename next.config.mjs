const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/cafe-meraki";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "next-build",
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
