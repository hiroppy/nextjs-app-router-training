/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  transpilePackages: ["shiki"],
  experimental: {
    taint: true,
  },
  async redirects() {
    return [
      {
        // fetching
        source: "/examples/caching-data",
        destination: "/examples/data-cache/fetch",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
