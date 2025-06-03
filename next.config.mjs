/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'blob.v0.dev', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
  // Next.js 15.3 optimizations
  serverExternalPackages: ['@nodelib/fs.scandir'],
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
};

export default nextConfig;
