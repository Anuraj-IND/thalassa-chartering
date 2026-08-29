/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables styled-components SSR, better class names & minification
    styledComponents: true,
  },
};

export default nextConfig;
