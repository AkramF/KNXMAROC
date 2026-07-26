import { SCENES } from "../../lib/scenes";
import { useLumiere } from "../../lib/use-lumiere";
import { useRevelation } from "../../lib/use-revelation";
import { TitreRevele } from "../lumiere/titre-revele";

/* ─────────────────────────────────────────────────────────────────────
 * Le clavier.
 *
 * La section qui justifie le site. Partout ailleurs on affirme que KNX
 * appelle une scène complète d'une seule pression ; ici le visiteur le fait.
 * Il touche une touche, et toute la page change de lumière — le fond, les
 * accents, le halo, jusqu'à la couleur du bouton « Demander une étude ».
 *
 * C'est la démonstration la plus courte possible du métier, et la seule
 * partie du site qu'on ne peut pas copier sans avoir compris ce que fait un
 * intégrateur.
 * ───────────────────────────────────────────────────────────────────── */
export function Clavier() {
  const { scene, choisir, automatique } = useLumiere();
  const ref = useRevelation<HTMLElement>();

  return (
    <section className="relative overflow-hidden border-t border-rule" id="clavier" ref={ref}>
      <div className="mx-auto w-full max-w-[1480px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 md:grid-cols-12 md:gap-14">
          <div className="revelation md:col-span-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-blueprint">
              Essayez
            </p>
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
              Touchez une heure. C&apos;est la page entière qui change de lumière — c&apos;est
              exactement ce que fait le bus dans une villa.
            </p>

            {/* Un repère discret : tant que personne n'a touché, la maison
             * tourne sur sa propre programmation. C'est le comportement réel
             * d'une installation livrée. */}
            <p className="mt-10 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-graphite">
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full bg-blueprint ${
                  automatique ? "animate-pulse" : ""
                }`}
              />
              {automatique ? "Programmation automatique" : "Commande manuelle"}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {/* Le clavier lui-même : quatre touches affleurantes, comme
             * l'appareillage qu'on pose sur un mur. */}
            <div
              className="revelation grid grid-cols-2 gap-px border border-rule-strong/60 bg-rule-strong/40 p-px"
              role="group"
              aria-label="Choisir une scène"
            >
              {SCENES.map((s) => {
                const active = s.id === scene.id;
                return (
                  <button
                    aria-pressed={active}
                    className={`group relative isolate flex min-h-[9.5rem] flex-col justify-between overflow-hidden px-6 py-6 text-left transition-colors duration-500 md:min-h-[11rem] md:px-7 md:py-7 motion-reduce:transition-none ${
                      active ? "bg-ardoise" : "bg-encre hover:bg-ardoise/70"
                    }`}
                    key={s.id}
                    onClick={() => choisir(s.id)}
                    type="button"
                  >
                    {/* La touche s'éclaire par en dessous quand elle est
                     * active, comme un bouton rétroéclairé. */}
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
                        className="font-mono text-[0.68rem] tracking-[0.14em] transition-colors duration-500 motion-reduce:transition-none"
                        style={{ color: active ? s.lueur : undefined }}
                      >
                        <span className={active ? "" : "text-graphite/70"}>{s.heure}</span>
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

            {/* Le récit de la scène courante. Il change avec la touche : la
             * page raconte ce que la maison est en train de faire. */}
            <p
              aria-live="polite"
              className="mt-8 min-h-[3.5rem] max-w-[52ch] text-lg leading-relaxed text-chalk"
              key={scene.id}
            >
              <span className="revelation">{scene.recit}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
