import { servicesData } from "./data/servicesData";

export default function sitemap() {
  const baseUrl = "https://www.clarityestimates.com";

  // Base routes
  const routes = ["", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  // Service routes
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
