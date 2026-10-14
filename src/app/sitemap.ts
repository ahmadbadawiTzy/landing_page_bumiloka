import type { MetadataRoute } from "next";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bumilokalandingpage.vercel.app"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-10-14"),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          id: `${SITE_URL}/`,
          en: `${SITE_URL}/?lang=en`,
        },
      },
    },
  ];
}
