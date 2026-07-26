import { useEffect, useId, useRef, useState } from "react";

import { COORDONNEES, LIEN_TELEPHONE } from "../../lib/coordonnees";
import { useRevelation } from "../../lib/use-revelation";
import { Wordmark } from "../brand/logo";
import { EtudeCta } from "../cta/etude-cta";

const LIENS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#segments", label: "Segments" },
  { href: "#methode", label: "Méthode" },
  { href: "#marques", label: "Marques" },
];

const LIEN_BUREAU =
  "relative py-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-graphite transition-colors duration-200 hover:text-chalk after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-blueprint after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";

/* Intertitre commun à toutes les sections : un repère de plan tracé, puis
 * l'étiquette. Le même geste que le kicker du héros, pour que le vocabulaire
 * tienne d'un bout à l'autre de la page. */
export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-blueprint">
      <span aria-hidden="true" className="h-px w-9 bg-current" />
      {children}
    </p>
  );
}

export function SiteNav() {
  const [ouvert, setOuvert] = useState(false);
  const [compacte, setCompacte] = useState(false);
  const panneauId = useId();

  /* L'en-tête ne prend son fond qu'une fois le héros quitté : au-dessus de
   * l'image plein écran, une barre opaque couperait la scène en deux. */
  useEffect(() => {
    const surScroll = () => setCompacte(window.scrollY > window.innerHeight * 0.6);
    surScroll();
    window.addEventListener("scroll", surScroll, { passive: true });
    return () => window.removeEventListener("scroll", surScroll);
  }, []);

  useEffect(() => {
    if (!ouvert) return;
    const surEchap = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOuvert(false);
    };
    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", surEchap);
    return () => {
      document.body.style.overflow = overflowInitial;
      window.removeEventListener("keydown", surEchap);
    };
  }, [ouvert]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 motion-reduce:transition-none ${
        compacte || ouvert
          ? "border-b border-rule bg-encre/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1480px] items-center justify-between px-5 md:px-10">
        <a aria-label="KNX MAROC, accueil" href="#seuil" onClick={() => setOuvert(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-9 md:flex">
          {LIENS.map((lien) => (
            <a className={LIEN_BUREAU} href={lien.href} key={lien.href}>
              {lien.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <EtudeCta className="hidden px-5 py-3 md:inline-flex" />

          {/* Sous 768 px la navigation de bureau disparaît : sans ce bouton,
           * l'en-tête ne contiendrait qu'un logo. */}
          <button
            aria-controls={panneauId}
            aria-expanded={ouvert}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-chalk md:hidden"
            onClick={() => setOuvert((etat) => !etat)}
            type="button"
          >
            <span className="sr-only">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                  ouvert ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-full bg-current transition-opacity duration-300 motion-reduce:transition-none ${
                  ouvert ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                  ouvert ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`border-t border-rule bg-encre md:hidden ${ouvert ? "block" : "hidden"}`}
        id={panneauId}
      >
        <nav aria-label="Navigation principale mobile" className="px-5 py-2">
          {LIENS.map((lien) => (
            <a
              className="flex min-h-14 items-center border-b border-rule font-display text-lg text-chalk"
              href={lien.href}
              key={lien.href}
              onClick={() => setOuvert(false)}
            >
              {lien.label}
            </a>
          ))}
          <a
            className="flex min-h-14 items-center justify-between gap-4 border-b border-rule font-display text-lg text-chalk"
            href={LIEN_TELEPHONE}
            onClick={() => setOuvert(false)}
          >
            Appeler
            <span className="font-mono text-sm text-graphite">
              {COORDONNEES.telephone.affichage}
            </span>
          </a>
          <EtudeCta className="mt-6 mb-4 w-full" href="#contact" />
        </nav>
      </div>
    </header>
  );
}

const REPERES = [
  {
    cle: "Statut",
    valeur: "Partenaire KNX certifié",
    note: "Formation et accréditation reconnues par la KNX Association.",
  },
  {
    cle: "Norme",
    valeur: "ISO/IEC 14543-3",
    note: "Standard international, indépendant du fabricant.",
  },
  {
    cle: "Outil",
    valeur: "ETS",
    note: "Le projet vous est remis avec son fichier de programmation.",
  },
  {
    cle: "Durée de vie",
    valeur: "Celle du bâtiment",
    note: "Une installation s'étend sans être refaite.",
  },
];

export function Positionnement() {
  const ref = useRevelation<HTMLElement>();

  return (
    <section className="border-t border-rule bg-encre" id="positionnement" ref={ref}>
      <div className="mx-auto grid w-full max-w-[1480px] gap-14 px-5 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
        <div className="revelation md:col-span-7">
          <Eyebrow>La norme</Eyebrow>
          <h2 className="mt-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]">
            Un seul bus,
            <br />
            tout le bâtiment.
          </h2>
          <p className="mt-9 max-w-[62ch] text-lg leading-relaxed text-graphite">
            KNX est la norme ouverte de l&apos;automatisation du bâtiment. Elle relie
            l&apos;éclairage, les stores, le chauffage, la climatisation, la sécurité et la
            supervision sur un même câble bus, sans passerelle propriétaire et sans dépendance à un
            seul fabricant.
          </p>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-graphite">
            KNX MAROC conçoit, programme et met en service ces installations au Maroc. Nous
            intervenons dès la phase études, aux côtés de l&apos;architecte et du bureau
            d&apos;études électricité, puis nous restons responsables du système après la livraison.
          </p>
        </div>

        <dl className="self-start md:col-span-4 md:col-start-9">
          {REPERES.map((repere, index) => (
            <div
              className="revelation border-t border-rule py-6 first:border-t-0 first:pt-0"
              key={repere.cle}
              style={{ "--revelation-delai": `${index * 80}ms` } as React.CSSProperties}
            >
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blueprint">
                {repere.cle}
              </dt>
              <dd className="mt-2.5 font-display text-2xl font-normal leading-tight text-chalk">
                {repere.valeur}
              </dd>
              <dd className="mt-2 text-sm leading-relaxed text-graphite">{repere.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const DOMAINES = [
  {
    icon: "/assets/icons/eclairage.png",
    label: "Éclairage",
    body: "Circuits variés ou commutés, scènes par pièce, détection de présence, gestion de la lumière du jour.",
  },
  {
    icon: "/assets/icons/stores.png",
    label: "Stores et volets",
    body: "Position et angle des lames, protection solaire suivant la course du soleil, sécurité vent et pluie.",
  },
  {
    icon: "/assets/icons/cvc.png",
    label: "Chauffage et climatisation",
    body: "Régulation par zone, consigne liée à l'occupation, coordination avec les ouvrants.",
  },
  {
    icon: "/assets/icons/securite.png",
    label: "Sécurité et accès",
    body: "Intrusion, contrôle d'accès, simulation de présence, scénarios d'alerte reliés à l'éclairage.",
  },
  {
    icon: "/assets/icons/audio.png",
    label: "Audio multiroom",
    body: "Sources par zone, appels de scène depuis les claviers muraux, intégration des amplificateurs.",
  },
  {
    icon: "/assets/icons/supervision.png",
    label: "Supervision",
    body: "Écran mural, application, journal des états, mesure des consommations par circuit.",
  },
];

const BOUTON_RAIL =
  "inline-flex h-11 w-11 items-center justify-center border border-rule-strong font-mono text-base text-chalk transition-colors duration-200 hover:border-blueprint hover:bg-blueprint hover:text-encre disabled:pointer-events-none disabled:opacity-25 motion-reduce:transition-none";

function NoeudBus() {
  return (
    <span
      aria-hidden="true"
      className="relative z-10 block h-3.5 w-3.5 shrink-0 border-2 border-blueprint bg-encre"
    >
      <span className="absolute inset-1 block bg-blueprint" />
    </span>
  );
}

export function Solutions() {
  const railRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRevelation<HTMLElement>();
  const [progression, setProgression] = useState(0);
  const [enButee, setEnButee] = useState({ debut: true, fin: false });

  const lireScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    const parcourable = rail.scrollWidth - rail.clientWidth;
    setProgression(parcourable > 0 ? rail.scrollLeft / parcourable : 0);
    setEnButee({ debut: rail.scrollLeft < 4, fin: rail.scrollLeft > parcourable - 4 });
  };

  useEffect(() => {
    lireScroll();
    window.addEventListener("resize", lireScroll);
    return () => window.removeEventListener("resize", lireScroll);
  }, []);

  const defiler = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="border-t border-rule bg-ardoise" id="solutions" ref={sectionRef}>
      <div className="mx-auto flex w-full max-w-[1480px] items-end justify-between gap-6 px-5 pt-28 md:px-10 md:pt-40">
        <div className="revelation">
          <Eyebrow>Six domaines, un seul projet</Eyebrow>
          <h2 className="mt-7 max-w-[15ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]">
            Ce que nous mettons sur le bus.
          </h2>
        </div>

        <div className="hidden shrink-0 gap-2 md:flex">
          <button
            aria-label="Domaine précédent"
            className={BOUTON_RAIL}
            disabled={enButee.debut}
            onClick={() => defiler(-1)}
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="Domaine suivant"
            className={BOUTON_RAIL}
            disabled={enButee.fin}
            onClick={() => defiler(1)}
            type="button"
          >
            ›
          </button>
        </div>
      </div>

      {/* Le titre dit « sur le bus » : la section EST le bus. Une ligne
       * traverse le rail, chaque domaine est un nœud dessus — le même nœud
       * que le schéma du héros. */}
      <div className="relative mt-16">
        <ul
          aria-label="Les six domaines"
          className="flex snap-x snap-mandatory overflow-x-auto pb-16 md:pb-20"
          onScroll={lireScroll}
          ref={railRef}
          tabIndex={0}
        >
          {DOMAINES.map((domaine, index) => (
            <li
              className="revelation relative w-[17rem] shrink-0 snap-start pr-10 first:ml-5 last:mr-5 md:w-[21rem] md:pr-14 md:first:ml-10 md:last:mr-10"
              key={domaine.label}
              style={{ "--revelation-delai": `${index * 70}ms` } as React.CSSProperties}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[7px] h-px bg-blueprint/30 ${
                  index === DOMAINES.length - 1 ? "w-3.5" : "right-0"
                }`}
              />

              <div className="relative flex items-center gap-4">
                <NoeudBus />
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-blueprint">
                  {String(index + 1).padStart(2, "0")} / 06
                </span>
              </div>

              {/* Les icônes sont des traits sombres : sur fond noir elles
               * disparaîtraient. L'inversion les rend au bleu de plan. */}
              <img
                alt=""
                className="mt-9 h-14 w-14 opacity-90 [filter:invert(1)_sepia(1)_saturate(2.4)_hue-rotate(178deg)_brightness(1.05)]"
                decoding="async"
                loading="lazy"
                src={domaine.icon}
              />

              <h3 className="mt-7 font-display text-2xl font-normal leading-tight tracking-tight text-chalk">
                {domaine.label}
              </h3>
              <p className="mt-4 max-w-[32ch] leading-relaxed text-graphite">{domaine.body}</p>
            </li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-l from-ardoise to-transparent transition-opacity duration-300 md:block"
          style={{ opacity: enButee.fin ? 0 : 1 }}
        />
      </div>

      <div
        aria-hidden="true"
        className="mx-auto w-full max-w-[1480px] px-5 pb-28 md:px-10 md:pb-40"
      >
        <div className="h-px bg-rule">
          <div
            className="h-px bg-blueprint transition-[width] duration-150 motion-reduce:transition-none"
            style={{ width: `${Math.max(progression * 100, 100 / DOMAINES.length)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

const MARQUES = ["Gira", "JUNG", "Basalte", "ABB", "Schneider Electric", "Theben", "MDT", "Zennio"];

export function Marques() {
  const ref = useRevelation<HTMLElement>();

  return (
    <section className="border-t border-rule bg-encre" id="marques" ref={ref}>
      <div className="mx-auto w-full max-w-[1480px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="revelation md:col-span-5">
            <Eyebrow>Appareillage</Eyebrow>
            <h2 className="mt-7 max-w-[16ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[3.5rem]">
              Ce que nous programmons.
            </h2>
            <p className="mt-9 max-w-[52ch] text-lg leading-relaxed text-graphite">
              Le choix de l&apos;appareillage se fait après l&apos;étude, sur des critères de
              finition, de disponibilité au Maroc et de budget. La norme reste la même quel que soit
              le fabricant retenu.
            </p>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-graphite">
              KNX MAROC est un intégrateur indépendant et n&apos;est affilié à aucun de ces
              fabricants.
            </p>
          </div>

          <ul className="self-start md:col-span-6 md:col-start-7">
            {MARQUES.map((marque, index) => (
              <li
                className="revelation group flex items-baseline gap-5 border-t border-rule py-5 last:border-b"
                key={marque}
                style={{ "--revelation-delai": `${index * 50}ms` } as React.CSSProperties}
              >
                <span className="font-mono text-[0.68rem] tracking-[0.14em] text-graphite">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-normal tracking-tight text-chalk">
                  {marque}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
