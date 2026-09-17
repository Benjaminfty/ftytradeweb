import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const alt = { languages: { en: "https://ftytrade.com", es: "https://ftytrade.com/es" } };
  return [
    { url: "https://ftytrade.com", lastModified: now, changeFrequency: "weekly", priority: 1, alternates: alt },
    { url: "https://ftytrade.com/es", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: alt },
  ];
}
