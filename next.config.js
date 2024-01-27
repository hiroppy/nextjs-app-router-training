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
  async redirects() {
    return [
      {
        // fetching
        source: "/examples/revalidating-data",
        destination:
          "/examples/data-cache/revalidate?file-path=revalidate/page.tsx",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
