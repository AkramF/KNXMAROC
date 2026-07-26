import { useEffect, useId, useRef, useState } from "react";

import { COORDONNEES, LIEN_TELEPHONE } from "../../lib/coordonnees";
import { Wordmark } from "../brand/logo";
import { AppelCta } from "../cta/appel-cta";
import { EtudeCta } from "../cta/etude-cta";

const LIENS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#segments", label: "Segments" },
  { href: "#methode", label: "Méthode" },
  { href: "#marques", label: "Marques" },
];

const LIEN_BUREAU =
  "font-mono text-[0.72rem] uppercase tracking-[0.14em] text-graphite transition-colors hover:text-ink motion-reduce:transition-none";

export function SiteNav() {
  const [ouvert, setOuvert] = useState(false);
  const panneauId = useId();

  /* Un menu plein écran qui laisse la page défiler derrière lui donne
   * l'impression d'être cassé. Et la touche Échap doit toujours pouvoir en
   * sortir. */
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule/70 bg-chalk/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a aria-label="KNX MAROC, accueil" href="#seuil" onClick={() => setOuvert(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {LIENS.map((lien) => (
            <a className={LIEN_BUREAU} href={lien.href} key={lien.href}>
              {lien.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <EtudeCta className="hidden px-5 py-3 md:inline-flex" />

          {/* Sous 768 px la navigation de bureau disparaît : sans ce bouton,
           * l'en-tête ne contiendrait qu'un logo et le site n'aurait plus
           * aucun chemin de navigation. */}
          <button
            aria-controls={panneauId}
            aria-expanded={ouvert}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
            onClick={() => setOuvert((etat) => !etat)}
            type="button"
          >
            <span className="sr-only">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-transform duration-200 motion-reduce:transition-none ${
                  ouvert ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-full bg-ink transition-opacity duration-200 motion-reduce:transition-none ${
                  ouvert ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-transform duration-200 motion-reduce:transition-none ${
                  ouvert ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-rule bg-chalk md:hidden ${ouvert ? "block" : "hidden"}`}
        id={panneauId}
      >
        <nav aria-label="Navigation principale mobile" className="px-5 py-2">
          {LIENS.map((lien) => (
            <a
              className="flex min-h-14 items-center border-b border-rule font-display text-lg text-ink"
              href={lien.href}
              key={lien.href}
              onClick={() => setOuvert(false)}
            >
              {lien.label}
            </a>
          ))}
          <a
            className="flex min-h-14 items-center justify-between gap-4 border-b border-rule font-display text-lg text-ink"
            href={LIEN_TELEPHONE}
            onClick={() => setOuvert(false)}
          >
            Appeler
            <span className="font-mono text-sm text-graphite">
              {COORDONNEES.telephone.affichage}
            </span>
          </a>
          <EtudeCta className="mt-6 mb-4 w-full justify-center" href="#contact" />
        </nav>
      </div>
    </header>
  );
}

export function Positionnement() {
  return (
    <section className="border-t border-rule bg-chalk" id="positionnement">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-36">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-6xl">
            Un seul bus, tout le bâtiment.
          </h2>
          <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-graphite">
            KNX est la norme ouverte de l&apos;automatisation du bâtiment. Elle relie
            l&apos;éclairage, les stores, le chauffage, la climatisation, la sécurité et la
            supervision sur un même câble bus, sans passerelle propriétaire et sans dépendance à un
            seul fabricant.
          </p>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-graphite">
            KNX MAROC conçoit, programme et met en service ces installations au Maroc. Nous
            intervenons dès la phase études, aux côtés de l&apos;architecte et du bureau
            d&apos;études électricité, puis nous restons responsables du système après la livraison.
          </p>
        </div>
        <dl className="grid gap-px self-start border border-rule bg-rule md:col-span-5 md:col-start-8">
          <div className="bg-paper p-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blueprint">
              Statut
            </dt>
            <dd className="mt-3 font-display text-xl font-normal text-ink">
              Partenaire KNX certifié
            </dd>
            <dd className="mt-2 text-sm leading-relaxed text-graphite">
              Formation et accréditation reconnues par la KNX Association.
            </dd>
          </div>
          <div className="bg-paper p-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blueprint">
              Norme
            </dt>
            <dd className="mt-3 font-display text-xl font-normal text-ink">ISO/IEC 14543-3</dd>
            <dd className="mt-2 text-sm leading-relaxed text-graphite">
              Standard international, indépendant du fabricant.
            </dd>
          </div>
          <div className="bg-paper p-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blueprint">
              Outil
            </dt>
            <dd className="mt-3 font-display text-xl font-normal text-ink">ETS</dd>
            <dd className="mt-2 text-sm leading-relaxed text-graphite">
              Le projet vous est remis avec son fichier de programmation.
            </dd>
          </div>
          <div className="bg-paper p-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blueprint">
              Durée de vie
            </dt>
            <dd className="mt-3 font-display text-xl font-normal text-ink">Celle du bâtiment</dd>
            <dd className="mt-2 text-sm leading-relaxed text-graphite">
              Une installation s&apos;étend sans être refaite.
            </dd>
          </div>
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
  "inline-flex h-11 w-11 items-center justify-center border border-rule-strong font-mono text-sm text-ink transition-colors duration-200 hover:border-blueprint hover:text-blueprint disabled:pointer-events-none disabled:opacity-30 motion-reduce:transition-none";

export function Solutions() {
  const railRef = useRef<HTMLUListElement>(null);
  const [progression, setProgression] = useState(0);
  const [enButee, setEnButee] = useState<{ debut: boolean; fin: boolean }>({
    debut: true,
    fin: false,
  });

  const lireScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    const parcourable = rail.scrollWidth - rail.clientWidth;
    const ratio = parcourable > 0 ? rail.scrollLeft / parcourable : 0;
    setProgression(ratio);
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
    <section className="border-t border-rule bg-paper" id="solutions">
      <div className="mx-auto flex w-full max-w-[1400px] items-end justify-between gap-6 px-5 pt-24 md:px-10 md:pt-32">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-blueprint">
            Six domaines, un seul projet
          </p>
          <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-6xl">
            Ce que nous mettons sur le bus.
          </h2>
        </div>

        {/* Une seule chose défile au clavier ou à la molette sur cette page :
         * sans ces flèches, rien ne signale que la liste continue hors champ. */}
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

      <div className="relative mt-14">
        {/* Un rail défilable au clavier doit être focusable, sinon son contenu
         * est inatteignable sans souris (WCAG 2.1.1). */}
        <ul
          aria-label="Les six domaines"
          className="flex snap-x snap-mandatory gap-px overflow-x-auto bg-rule pb-16 md:pb-20"
          onScroll={lireScroll}
          ref={railRef}
          tabIndex={0}
        >
          {DOMAINES.map((domaine, index) => (
            <li
              className="flex min-h-[24rem] w-[19rem] shrink-0 snap-start flex-col bg-paper p-8 first:ml-5 last:mr-5 md:w-[23rem] md:first:ml-10 md:last:mr-10"
              key={domaine.label}
            >
              <div className="flex items-start justify-between">
                <img
                  alt=""
                  className="h-12 w-12"
                  decoding="async"
                  loading="lazy"
                  src={domaine.icon}
                />
                {/* Le numéro est mérité ici : la section promet six domaines et
                 * ce compte aide à s'orienter dans un rail qui défile hors
                 * champ, contrairement aux quatre segments plus bas. */}
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-blueprint">
                  {String(index + 1).padStart(2, "0")} / 06
                </span>
              </div>
              {/* Le nom du domaine passe avant sa description : on ne lit pas
               * le détail de l'éclairage sans savoir qu'il s'agit d'éclairage. */}
              <h3 className="mt-8 font-display text-xl font-normal leading-tight text-ink">
                {domaine.label}
              </h3>
              <span aria-hidden="true" className="mt-3 block h-px w-10 bg-blueprint" />
              <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-graphite">
                {domaine.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Fondu indiquant qu'il reste du contenu hors champ à droite. Il
         * s'efface lui-même une fois la fin du rail atteinte. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-paper to-transparent transition-opacity duration-300 md:block"
          style={{ opacity: enButee.fin ? 0 : 1 }}
        />
      </div>

      {/* Filet de progression : même vocabulaire que la barre du héros, pour
       * que le rail se lise comme une continuation du même système plutôt
       * qu'un composant importé d'ailleurs. */}
      <div
        className="mx-auto w-full max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32"
        aria-hidden="true"
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
  return (
    <section className="border-t border-rule bg-chalk" id="marques">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="max-w-[18ch] font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-5xl">
              Appareillages que nous programmons.
            </h2>
            <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-graphite">
              Le choix de l&apos;appareillage se fait après l&apos;étude, sur des critères de
              finition, de disponibilité au Maroc et de budget. La norme reste la même quel que soit
              le fabricant retenu.
            </p>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-graphite">
              KNX MAROC est un intégrateur indépendant et n&apos;est affilié à aucun de ces
              fabricants.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-px self-start md:col-span-6 md:col-start-7 md:grid-cols-2">
            {MARQUES.map((marque) => (
              <li
                className="border-t border-rule py-5 font-display text-lg font-normal tracking-tight text-ink"
                key={marque}
              >
                {marque}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
