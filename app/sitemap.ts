import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pgkhata.com";
  const pages = [
    "",
    "/about",
    "/blog",
    "/compare",
    "/contact",
    "/faq",
    "/features",
    "/how-it-works",
    "/pricing",
    "/product",
    "/resources",
    "/security",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
