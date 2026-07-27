import { DOMAINES } from "../../lib/domaines";
import { SCENES } from "../../lib/scenes";
import { useLumiere } from "../../lib/use-lumiere";
import { useRevelation } from "../../lib/use-revelation";
import { TitreRevele } from "../lumiere/titre-revele";
import { Eyebrow } from "./sections";

/* ─────────────────────────────────────────────────────────────────────
 * Le clavier.
 *
 * Partout ailleurs le site affirme qu'une pression appelle une scène
 * complète. Ici le visiteur le fait, et toute la page bascule : le fond, les
 * accents, le halo, jusqu'à la couleur du bouton d'appel à l'action.
 *
 * Trois mécanismes se cumulent, et c'est ce qui rend cette section
 * disproportionnellement efficace :
 *   — ce qu'on manipule prend de la valeur (effet IKEA) ;
 *   — l'interaction crée un début de possession, l'équivalent de l'essai
 *     gratuit pour un produit qu'on ne peut pas essayer ;
 *   — un micro-engagement (une pression) rend le suivant (le formulaire)
 *     plus probable.
 *
 * Une animation qu'on regarde est une démonstration. Une animation qu'on
 * actionne est une expérience.
 * ───────────────────────────────────────────────────────────────────── */
export function Clavier() {
  const { scene, choisir, automatique } = useLumiere();
  const ref = useRevelation<HTMLElement>();

  return (
    /* Seule section de la page sans fond ni voile : le halo la traverse
     * entièrement. C'est la condition de l'immersion — un panneau opaque
     * amortirait la bascule de lumière au moment précis où elle doit se
     * voir. Aucune image non plus : ici le sujet, c'est la lumière. */
    <section className="relative overflow-hidden border-t border-rule" id="clavier" ref={ref}>
      <div className="mx-auto w-full max-w-[1480px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="revelation lg:col-span-5">
            <Eyebrow>Essayez</Eyebrow>
            <TitreRevele
              as="h2"
              className="mt-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]"
              texte={"Une pression,\ntoute la maison."}
            />
            <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-graphite">
              Un clavier KNX n&apos;allume pas une lampe : il appelle une scène. Éclairage, stores,
              température et musique basculent ensemble, en une pression.
            </p>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-graphite">
              Touchez une heure. C&apos;est la page entière qui change de lumière — exactement ce
              que fait le bus dans une villa.
            </p>

            {/* Tant que personne n'a touché, la maison tourne sur sa propre
             * programmation. C'est le comportement réel d'une installation
             * livrée, et ça invite à prendre la main. */}
            <p className="mt-10 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-graphite">
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full bg-blueprint ${automatique ? "animate-pulse" : ""}`}
              />
              {automatique ? "Programmation automatique" : "Commande manuelle"}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div
              aria-label="Choisir une scène"
              className="revelation grid grid-cols-2 gap-px border border-rule-strong/60 bg-rule-strong/40 p-px"
              role="group"
            >
              {SCENES.map((s) => {
                const active = s.id === scene.id;
                return (
                  <button
                    aria-pressed={active}
                    className={`group relative isolate flex min-h-[8.5rem] flex-col justify-between overflow-hidden px-6 py-6 text-left transition-colors duration-500 md:min-h-[10rem] md:px-7 md:py-7 motion-reduce:transition-none ${
                      active ? "bg-ardoise" : "bg-encre hover:bg-ardoise/70"
                    }`}
                    key={s.id}
                    onClick={() => choisir(s.id)}
                    type="button"
                  >
                    {/* La touche s'éclaire par en dessous, comme un bouton
                     * rétroéclairé qu'on vient de presser. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 -z-10 h-24 transition-opacity duration-700 motion-reduce:transition-none"
                      style={{
                        opacity: active ? 1 : 0,
                        background: `radial-gradient(60% 100% at 50% 100%, color-mix(in oklab, ${s.lueur} 34%, transparent), transparent 75%)`,
                      }}
                    />

                    <span className="flex items-baseline justify-between gap-3">
                      <span
                        className={`font-display text-2xl font-normal tracking-tight transition-colors duration-500 md:text-3xl motion-reduce:transition-none ${
                          active ? "text-chalk" : "text-graphite group-hover:text-chalk"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span
                        className={`font-mono text-[0.68rem] tracking-[0.14em] transition-colors duration-500 motion-reduce:transition-none ${
                          active ? "text-blueprint" : "text-graphite/70"
                        }`}
                      >
                        {s.heure}
                      </span>
                    </span>

                    <span
                      className={`font-mono text-[0.66rem] uppercase leading-relaxed tracking-[0.1em] transition-opacity duration-500 motion-reduce:transition-none ${
                        active
                          ? "text-chalk/70 opacity-100"
                          : "text-graphite opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {active ? "En cours" : "Appeler"}
                    </span>
                  </button>
                );
              })}
            </div>

            <p
              aria-live="polite"
              className="mt-8 min-h-[3.5rem] max-w-[52ch] text-lg leading-relaxed text-chalk"
            >
              {scene.recit}
            </p>

            {/* L'état de chaque domaine à l'heure choisie. C'est ce qui
             * transforme une bascule de couleur en démonstration technique :
             * ces valeurs sont celles qu'un intégrateur programme réellement
             * dans ETS, pas des étiquettes décoratives. */}
            <dl className="mt-10 grid gap-px border border-rule-strong/40 bg-rule-strong/30 sm:grid-cols-2">
              {DOMAINES.map((domaine) => (
                <div className="bg-encre px-5 py-4" key={domaine.id}>
                  <dt className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-graphite">
                    {domaine.label}
                  </dt>
                  <dd className="mt-1.5 font-mono text-sm text-blueprint">
                    {domaine.etats[scene.id]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
