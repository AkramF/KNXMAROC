import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { obteinArticleParSlug } from "../../lib/blog";
import { SiteNav } from "../../components/site/sections";
import { SiteFooter } from "../../components/site/footer.tsx";
import { EtudeCta } from "../../components/cta/etude-cta";
import { MENTION_ETUDE } from "../../lib/offre";
import { Wordmark } from "../../components/brand/logo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = obteinArticleParSlug(params.slug);
    if (!article) {
      throw notFound();
    }
    return article;
  },
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-encre text-chalk selection:bg-blueprint selection:text-encre">
      <SiteNav />

      <article className="pt-32 pb-20 md:pt-40 md:pb-28">
        {/* En-tête Article */}
        <header className="border-b border-rule bg-ardoise/20 pb-16">
          <div className="mx-auto max-w-[920px] px-5 md:px-10">
            <Link
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blueprint hover:text-chalk transition-colors mb-8"
              to="/blog"
            >
              ← Retour au Blog
            </Link>

            <div className="flex items-center gap-4 font-mono text-xs text-graphite mb-6">
              <span className="border border-blueprint/30 bg-blueprint/10 px-3 py-1 uppercase tracking-wider text-blueprint font-medium">
                {article.categorie}
              </span>
              <span>{article.tempsLecture} de lecture</span>
              <span>·</span>
              <span>{article.datePublication}</span>
            </div>

            <h1 className="font-display text-3xl font-semibold leading-tight text-chalk md:text-5xl">
              {article.titre}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-graphite font-light border-l-2 border-blueprint pl-6">
              {article.chapeau}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-rule/50 pt-6 font-mono text-xs">
              <div>
                <span className="text-graphite">Auteur : </span>
                <span className="text-chalk font-medium">{article.auteur.nom}</span> (
                {article.auteur.role})
              </div>
            </div>

            {/* Image de Couverture */}
            {article.imageCouverture && (
              <figure className="mt-12 overflow-hidden border border-rule bg-ardoise/40">
                <img
                  src={article.imageCouverture.src}
                  alt={article.imageCouverture.alt}
                  className="w-full h-[320px] md:h-[480px] object-cover"
                />
                {article.imageCouverture.legende && (
                  <figcaption className="p-4 font-mono text-xs text-graphite border-t border-rule/50 bg-encre/60">
                    {article.imageCouverture.legende}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </header>

        {/* Contenu Article */}
        <div className="mx-auto max-w-[920px] px-5 md:px-10 pt-16">
          <div className="space-y-14 text-base leading-relaxed text-graphite md:text-lg">
            {article.contenu.map((sec, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="font-display text-2xl font-semibold text-chalk md:text-3xl">
                  {sec.sectionTitre}
                </h2>

                {sec.paragraphes.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {sec.citation && (
                  <blockquote className="my-8 border-l-2 border-emerald-400 bg-ardoise/30 p-6 text-chalk font-mono text-sm leading-relaxed italic">
                    « {sec.citation} »
                  </blockquote>
                )}

                {/* Image de Section */}
                {sec.imageSection && (
                  <figure className="my-8 overflow-hidden border border-rule bg-ardoise/40">
                    <img
                      src={sec.imageSection.src}
                      alt={sec.imageSection.alt}
                      className="w-full h-[260px] md:h-[400px] object-cover"
                    />
                    {sec.imageSection.legende && (
                      <figcaption className="p-3.5 font-mono text-xs text-graphite border-t border-rule/50 bg-encre/60">
                        {sec.imageSection.legende}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* Lien Subtil vers Solution */}
                {sec.lienSolution && (
                  <div className="my-8 border-l-2 border-blueprint bg-blueprint/10 p-6 font-mono text-sm">
                    <p className="text-graphite text-xs uppercase tracking-wider mb-2">
                      Ancre Solution Associée :
                    </p>
                    <a
                      className="inline-flex items-center gap-2 font-semibold text-chalk hover:text-blueprint transition-colors text-base"
                      href={sec.lienSolution.url}
                    >
                      {sec.lienSolution.texteAncre} →
                    </a>
                    <p className="mt-2 text-xs leading-relaxed text-graphite">
                      {sec.lienSolution.descriptionContextuelle}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Mots-clés */}
          <div className="mt-16 border-t border-rule/50 pt-8">
            <span className="font-mono text-xs uppercase tracking-wider text-graphite block mb-4">
              Mots-clés de l&apos;article :
            </span>
            <div className="flex flex-wrap gap-2">
              {article.motsCles.map((mot) => (
                <span
                  key={mot}
                  className="border border-rule bg-ardoise/40 px-3 py-1 font-mono text-xs text-graphite"
                >
                  #{mot}
                </span>
              ))}
            </div>
          </div>

          {/* Appel à l'action fin d'article */}
          <div className="mt-16 border border-blueprint/30 bg-ardoise/30 p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Wordmark className="text-chalk" />
              <h3 className="mt-3 font-display text-xl font-semibold text-chalk">
                Besoin d&apos;un conseil technique sur votre projet ?
              </h3>
              {/* Le délai était annoncé ici à 24 h ouvrées et à deux jours
               * ouvrés ailleurs. Une seule promesse, tenue depuis un seul
               * endroit. */}
              <p className="mt-1 text-sm text-graphite">{MENTION_ETUDE.join(" · ")}</p>
            </div>
            <EtudeCta className="inline-flex shrink-0" />
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
