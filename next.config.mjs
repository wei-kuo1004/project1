/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // 禁用Next.js图片优化，以支持静态导出
  },
  basePath: '/project1', // 替换为你的 GitHub 仓库名
  assetPrefix: '/project1', // 替换为你的 GitHub 仓库名
};

export default nextConfig;
