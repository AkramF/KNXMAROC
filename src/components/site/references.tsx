import { REFERENCES } from "../../lib/preuves";
import { useRevelation } from "../../lib/use-revelation";
import { TitreRevele } from "../lumiere/titre-revele";
import { Eyebrow } from "./sections";

/* ─────────────────────────────────────────────────────────────────────
 * Les réalisations.
 *
 * Le manque le plus coûteux du site : aucun projet, aucun client, aucune
 * trace d'activité vérifiable. Sur un achat engagé pour la durée du bâtiment,
 * le prospect doit croire sur parole — et il ne peut pas se projeter dans une
 * description de catégorie.
 *
 * Les gens jugent le probable par ce qui leur vient à l'esprit. Sans récit de
 * projet, rien ne vient. Une seule étude de cas — surface, points bus, durée —
 * pèse plus que trois articles de blog supplémentaires.
 *
 * La section ne s'affiche pas tant que REFERENCES est vide : rien d'inventé
 * ne peut partir en production. Voir src/lib/preuves.ts pour la remplir.
 * ───────────────────────────────────────────────────────────────────── */
export function References() {
  const ref = useRevelation<HTMLElement>();

  if (REFERENCES.length === 0) return null;

  return (
    <section
      className="border-t border-rule bg-ardoise/70 backdrop-blur-[2px]"
      id="references"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 py-28 md:px-10 md:py-40">
        <div className="revelation max-w-[720px]">
          <Eyebrow>Réalisations</Eyebrow>
          <TitreRevele
            as="h2"
            className="mt-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]"
            texte="Ce que nous avons livré."
          />
        </div>

        <div className="mt-20 grid gap-px border border-rule-strong/40 bg-rule-strong/30 lg:grid-cols-2">
          {REFERENCES.map((reference, index) => (
            <article
              className="revelation bg-encre p-8 md:p-10"
              key={reference.intitule}
              style={{ "--revelation-delai": `${index * 90}ms` } as React.CSSProperties}
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-chalk md:text-3xl">
                {reference.intitule}
              </h3>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-graphite">
                {reference.contexte}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
                {reference.faits.map((fait) => (
                  <div key={fait.cle}>
                    <dt className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-graphite">
                      {fait.cle}
                    </dt>
                    <dd className="mt-1.5 font-display text-xl text-chalk">{fait.valeur}</dd>
                  </div>
                ))}
              </dl>

              {reference.citation ? (
                <figure className="mt-9 border-l-2 border-blueprint pl-6">
                  <blockquote className="text-lg leading-relaxed text-chalk">
                    {reference.citation.texte}
                  </blockquote>
                  <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-graphite">
                    {reference.citation.auteur}
                  </figcaption>
                </figure>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
