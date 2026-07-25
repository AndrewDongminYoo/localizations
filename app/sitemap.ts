import type { MetadataRoute } from "next";

import { baseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ lastModified: new Date(), url: baseUrl }];
}
