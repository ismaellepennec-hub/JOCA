import type { MetadataRoute } from "next";

// Requis pour l'export statique (output: "export")
export const dynamic = "force-static";

const BASE = "https://jocav1.netlify.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/espace-gestion",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
