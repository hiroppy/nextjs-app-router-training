import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticPaths = [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      lastModified,
    },
  ];

  return [...staticPaths];
}
