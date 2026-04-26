import type { MetadataRoute } from "next";
import { personal } from "@/content/personal";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = `https://${personal.domain}`;
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
