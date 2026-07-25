import { createFileRoute } from "@tanstack/react-router";

// Date de la dernière modification de contenu réelle de la page d'accueil —
// pas la date du jour. Un <lastmod> qui vaut toujours "aujourd'hui" ment aux
// moteurs de recherche sur la fraîcheur du contenu. À mettre à jour à la main
// quand le contenu de la page change.
const DERNIERE_MODIFICATION = "2026-07-25";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          "  <url>",
          `    <loc>${origin}/</loc>`,
          `    <lastmod>${DERNIERE_MODIFICATION}</lastmod>`,
          "    <changefreq>weekly</changefreq>",
          "    <priority>1.0</priority>",
          "  </url>",
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
