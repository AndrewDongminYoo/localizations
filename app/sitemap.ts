import type { MetadataRoute } from "next";

import { baseUrl } from "@/lib/site";

const languages = { en: `${baseUrl}/en`, ko: `${baseUrl}/ko` };

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(languages).map((url) => ({
    alternates: { languages },
    lastModified: new Date(),
    url,
  }));
}
