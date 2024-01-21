import { BASE_URL } from "@/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticPaths = [
    {
      url: BASE_URL,
      lastModified,
    },
  ];

  return [...staticPaths];
}
