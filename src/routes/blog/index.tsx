import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ARTICLES_BLOG } from "../../lib/blog";
import { SiteNav } from "../../components/site/sections";
import { SiteFooter } from "../../components/site/footer.tsx";
import { EtudeCta } from "../../components/cta/etude-cta";
import { Wordmark } from "../../components/brand/logo";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

const CATEGORIES = ["Toutes", "Technique", "Architecture", "Énergie", "Sécurité"] as const;

function BlogPage() {
  const [catSelectionnee, setCatSelectionnee] = useState<string>("Toutes");

  const articlesFiltres =
    catSelectionnee === "Toutes"
      ? ARTICLES_BLOG
      : ARTICLES_BLOG.filter((a) => a.categorie === catSelectionnee);

  return (
    <div className="min-h-screen bg-encre text-chalk selection:bg-blueprint selection:text-encre">
      <SiteNav />

      {/* En-tête du Blog / Hero */}
      <header className="border-b border-rule bg-ardoise/20 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-[75ch]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">
              Ressources & Ingénierie Domotique
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold uppercase tracking-wide md:text-5xl lg:text-6xl text-chalk">
              Analyses, Guides & Innovations KNX au Maroc
            </h1>
            <p className="mt-6 text-base leading-relaxed text-graphite md:text-lg">
              Explorez nos dossiers techniques et études de cas sur l&apos;ingénierie domotique
              filaire (ISO/IEC 14543-3), la gradation DALI-2, l&apos;efficacité énergétique CVC et
              la souveraineté numérique du bâtiment.
            </p>
          </div>

          {/* Filtres par Catégorie */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-rule/50 pt-8">
            <span className="mr-2 font-mono text-xs uppercase tracking-wider text-graphite">
              Filtrer par thème :
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors border ${
                  catSelectionnee === cat
                    ? "border-blueprint bg-blueprint/15 text-blueprint font-semibold"
                    : "border-rule bg-ardoise/30 text-graphite hover:border-graphite hover:text-chalk"
                }`}
                onClick={() => setCatSelectionnee(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Liste des Articles */}
      <main className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {articlesFiltres.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between border border-rule bg-ardoise/20 p-8 transition-all duration-300 hover:border-blueprint/60 hover:bg-ardoise/40"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-graphite">
                  <span className="border border-blueprint/30 bg-blueprint/10 px-2.5 py-1 uppercase tracking-wider text-blueprint">
                    {article.categorie}
                  </span>
                  <span>{article.tempsLecture} de lecture</span>
                </div>

                <h2 className="mt-6 font-display text-xl font-semibold leading-snug text-chalk transition-colors group-hover:text-blueprint md:text-2xl">
                  <Link to="/blog/$slug" params={{ slug: article.slug }}>
                    {article.titre}
                  </Link>
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-graphite">{article.chapeau}</p>
              </div>

              <div className="mt-8 border-t border-rule/40 pt-6 flex items-center justify-between">
                <div className="font-mono text-xs text-graphite">
                  <span className="text-chalk">{article.auteur.nom}</span> ·{" "}
                  {article.datePublication}
                </div>
                <Link
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-blueprint group-hover:translate-x-1 transition-transform"
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bannière d'Étude sur mesure */}
        <section className="mt-20 border border-blueprint/30 bg-blueprint/5 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Wordmark className="text-chalk" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-chalk">
              Un projet de villa ou d&apos;hôtel au Maroc ?
            </h3>
            <p className="mt-2 text-sm text-graphite max-w-[60ch]">
              Consultez notre équipe d&apos;ingénieurs certifiés KNX Partner pour une étude de
              faisabilité et une spécification technique sur mesure.
            </p>
          </div>
          <EtudeCta className="inline-flex shrink-0" />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
