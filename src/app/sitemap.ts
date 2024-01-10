import { MetadataRoute } from "next";

const url = "https://nextjs-app-router-training.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = url;
  const lastModified = new Date();

  const staticPaths = [
    {
      url: baseURL,
      lastModified,
    },
  ];

  return [...staticPaths];
}
