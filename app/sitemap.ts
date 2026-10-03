import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rentworx.co.nz";

const routes = [
  "",
  "/landlords",
  "/tenants",
  "/rentals",
  "/appraisal",
  "/services",
  "/about",
  "/contact",
  "/switch",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "/rentals" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/rentals" ? 0.9 : 0.8,
  }));
}
