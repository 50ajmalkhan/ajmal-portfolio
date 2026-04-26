import type { MetadataRoute } from "next";
import { personal } from "@/content/personal";

export default function robots(): MetadataRoute.Robots {
  const url = `https://${personal.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${url}/sitemap.xml`,
  };
}
