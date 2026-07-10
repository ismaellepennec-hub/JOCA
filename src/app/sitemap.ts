import type { MetadataRoute } from "next";

// Requis pour l'export statique (output: "export")
export const dynamic = "force-static";

const BASE = "https://jocav1.netlify.app";

// Pages publiques indexables (l'espace de gestion admin est volontairement exclu)
const ROUTES = ["", "/methode", "/offre", "/cabinet", "/contact", "/mentions-legales"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
