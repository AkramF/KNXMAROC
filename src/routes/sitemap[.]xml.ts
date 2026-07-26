import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES_BLOG } from "../lib/blog";

const DERNIERE_MODIFICATION = "2026-07-26";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;

        const urlsBlog = ARTICLES_BLOG.map(
          (art) => `  <url>
    <loc>${origin}/blog/${art.slug}</loc>
    <lastmod>${DERNIERE_MODIFICATION}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
        ).join("\n");

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          "  <url>",
          `    <loc>${origin}/</loc>`,
          `    <lastmod>${DERNIERE_MODIFICATION}</lastmod>`,
          "    <changefreq>weekly</changefreq>",
          "    <priority>1.0</priority>",
          "  </url>",
          "  <url>",
          `    <loc>${origin}/blog</loc>`,
          `    <lastmod>${DERNIERE_MODIFICATION}</lastmod>`,
          "    <changefreq>weekly</changefreq>",
          "    <priority>0.9</priority>",
          "  </url>",
          urlsBlog,
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
