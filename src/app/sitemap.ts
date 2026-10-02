import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://beyondautomation.io";

  const routes = [
    "",
    "/aihat",
    "/products",
    "/journal",
    "/journal/building-aihat-v1",
    "/journal/powershell-release-engineering",
    "/journal/build-once-publish-everywhere",
    "/resources",
    "/privacy",
    "/terms",
    "/tools",
    "/tools/network-monitoring",
  ];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/journal") ? "monthly" : "weekly",
    priority: index === 0 ? 1 : route === "/aihat" ? 0.9 : route === "/tools/network-monitoring" ? 0.7 : 0.7,
  }));
}
