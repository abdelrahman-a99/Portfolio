import type { MetadataRoute } from "next";

import { BASE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
