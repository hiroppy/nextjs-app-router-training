/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  experimental: {
    taint: true,
  },
};

module.exports = nextConfig;
