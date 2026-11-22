import type { MetadataRoute } from "next";
import { articlePath, journalArticles } from "@/content/journal";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.8, changeFrequency: "weekly" },
  { path: "/products/offboardpilot", priority: 0.8, changeFrequency: "weekly" },
  { path: "/aihat", priority: 0.8, changeFrequency: "weekly" },
  { path: "/journal", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tools/network-monitoring", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articles: MetadataRoute.Sitemap = journalArticles.map((article) => ({
    url: `${siteUrl}${articlePath(article.slug)}`,
    ...(article.datePublished ? { lastModified: new Date(article.dateModified ?? article.datePublished) } : {}),
    changeFrequency: "monthly",
    priority: article.featured ? 0.9 : 0.6,
  }));

  return [...pages, ...articles];
}
