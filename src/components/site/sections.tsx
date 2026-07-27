import { useEffect, useId, useState } from "react";

import { COORDONNEES, LIEN_TELEPHONE, RESEAUX_SOCIAUX, LIEN_WHATSAPP } from "../../lib/coordonnees";
import { useRevelation } from "../../lib/use-revelation";
import { Wordmark } from "../brand/logo";
import { EtudeCta } from "../cta/etude-cta";
import { TitreRevele } from "../lumiere/titre-revele";

const LIENS = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#segments", label: "Segments" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#marques", label: "Marques" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

const LIEN_BUREAU =
  "relative py-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-graphite transition-colors duration-200 hover:text-chalk after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-blueprint after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";

export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-blueprint">{children}</p>
  );
}

export function SiteNav() {
  const [ouvert, setOuvert] = useState(false);
  const [compacte, setCompacte] = useState(false);
  const panneauId = useId();

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
    <>
      {/* Backdrop Blur Overlay sur tout l'écran quand le menu mobile est ouvert */}
      {ouvert && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-encre/80 backdrop-blur-xl transition-opacity duration-300 lg:hidden"
          onClick={() => setOuvert(false)}
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 motion-reduce:transition-none ${
          compacte || ouvert
            ? "border-b border-rule bg-encre/95 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1480px] items-center justify-between px-5 md:px-10">
          <a aria-label="KNX MAROC, accueil" href="#seuil" onClick={() => setOuvert(false)}>
            <Wordmark />
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
            {LIENS.map((lien) => (
              <a className={LIEN_BUREAU} href={lien.href} key={lien.href}>
                {lien.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {!ouvert && <EtudeCta className="hidden lg:inline-flex px-5 py-3" />}

            <button
              aria-controls={panneauId}
              aria-expanded={ouvert}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-chalk lg:hidden"
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
          className={`border-t border-rule bg-encre/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
            ouvert ? "block shadow-2xl" : "hidden"
          }`}
          id={panneauId}
        >
          <nav
            aria-label="Navigation principale mobile"
            className="px-5 py-3 space-y-1 max-h-[calc(100dvh-76px)] overflow-y-auto"
          >
            {LIENS.map((lien) => (
              <a
                className="flex min-h-12 items-center justify-between border-b border-rule/40 font-display text-lg text-chalk hover:text-blueprint transition-colors"
                href={lien.href}
                key={lien.href}
                onClick={() => setOuvert(false)}
              >
                <span>{lien.label}</span>
                <span className="font-mono text-xs text-graphite">→</span>
              </a>
            ))}

            {/* Réseaux Sociaux dans le Menu Mobile */}
            <div className="pt-4 pb-2 flex items-center justify-around border-b border-rule/40 font-mono text-xs uppercase tracking-wider text-graphite">
              <a
                className="hover:text-blueprint transition-colors py-1.5"
                href={RESEAUX_SOCIAUX.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-blueprint transition-colors py-1.5"
                href={RESEAUX_SOCIAUX.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:text-emerald-400 transition-colors py-1.5 text-emerald-400 font-medium"
                href={LIEN_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div className="pt-3 pb-2">
              <EtudeCta
                className="w-full text-center py-3.5 text-xs font-semibold shadow-xl shadow-blueprint/10"
                href="/#contact"
                onClick={() => setOuvert(false)}
              />
            </div>
          </nav>
        </div>
      </header>
    </>
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
    valeur: "ETS Original Remis",
    note: "Le projet vous est remis avec son fichier source de programmation.",
  },
  {
    cle: "Durée de vie",
    valeur: "Celle du bâtiment",
    note: "Une installation s'étend sans être refaite sur 30+ ans.",
  },
];

export function Positionnement() {
  const ref = useRevelation<HTMLElement>();

  return (
    <section
      className="border-t border-rule bg-encre/70 backdrop-blur-[2px]"
      id="positionnement"
      ref={ref}
    >
      <div className="mx-auto grid w-full max-w-[1480px] gap-14 px-5 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
        <div className="revelation md:col-span-7">
          <Eyebrow>La norme</Eyebrow>
          <TitreRevele
            as="h2"
            className="mt-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]"
            texte={"Un seul système,\ntout le bâtiment."}
          />
          <p className="mt-9 max-w-[62ch] text-lg leading-relaxed text-graphite">
            KNX est la norme ouverte mondiale de l&apos;automatisation du bâtiment. Elle relie
            l&apos;éclairage, les stores, le chauffage, la climatisation, la sécurité et
            l&apos;hypervision sur une même infrastructure intelligente filaire, sans passerelle
            propriétaire et sans dépendance à un seul fabricant.
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

interface DomaineDesign {
  id: string;
  node: string;
  icon: string;
  label: string;
  body: string;
  specs: string[];
}

const DOMAINES_SOLUTIONS: DomaineDesign[] = [
  {
    id: "eclairage",
    node: "MODULE 01",
    icon: "/assets/icons/eclairage.png",
    label: "Éclairage DALI & Commuté",
    body: "Gradation 1–100 %, Tunable White (variation de température), scènes lumineuses par pièce et détection de présence intégrée.",
    specs: ["DALI-2 / KNX", "Scènes horaires", "Lumière du jour"],
  },
  {
    id: "stores",
    node: "MODULE 02",
    icon: "/assets/icons/stores.png",
    label: "Stores et Volets Roulants",
    body: "Gestion millimétrée de la hauteur et de l'angle des lames, protection solaire bioclimatique et sécurité automatique vent/pluie.",
    specs: ["Suivi solaire", "Lames à 45°", "Station météo"],
  },
  {
    id: "cvc",
    node: "MODULE 03",
    icon: "/assets/icons/climatisation.png",
    label: "Climatisation & Chauffage CVC",
    body: "Régulation zone par zone, intégration des groupes VRV/VRF et pompes à chaleur. Basculement automatique selon présence et saisons.",
    specs: ["Inverter / VRF", "Zone par zone", "-32% d'énergie"],
  },
  {
    id: "securite",
    node: "MODULE 04",
    icon: "/assets/icons/securite.png",
    label: "Sécurité & Contrôle d'Accès",
    body: "Détection d'intrusion, contrôle d'accès biométrique, simulateur de présence et extinction centralisée en cas d'absence.",
    specs: ["Anti-intrusion", "Contrôle accès", "Simulation"],
  },
  {
    id: "audio",
    node: "MODULE 05",
    icon: "/assets/icons/musique.png",
    label: "Audio Multiroom & Médias",
    body: "Diffusion sonore haute-fidélité intégrée par zone. Rappel des playlists préférées et synchronisation avec les scènes de vie.",
    specs: ["Multi-source", "Claviers muraux", "Zones indépendantes"],
  },
  {
    id: "supervision",
    node: "MODULE 06",
    icon: "/assets/icons/supervision.png",
    label: "Hypervision & Écran Mural",
    body: "Centralisation sur écran mural OLED et application mobile sécurisée locale. Comptage des consommations par circuit et journal d'états.",
    specs: ["Écran OLED", "App Smartphone", "Comptage énergie"],
  },
];

export function Solutions() {
  const sectionRef = useRevelation<HTMLElement>();
  const [carteActive, setCarteActive] = useState<string | null>(null);

  return (
    <section
      className="border-t border-rule bg-ardoise/80 backdrop-blur-[2px]"
      id="solutions"
      ref={sectionRef}
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 py-28 md:px-10 md:py-40">
        <div className="revelation max-w-[720px]">
          <Eyebrow>Six domaines, un seul projet</Eyebrow>
          <TitreRevele
            as="h2"
            className="mt-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]"
            texte="Ce que nous automatisons."
          />
          <p className="mt-8 text-lg leading-relaxed text-graphite">
            Chaque équipement du bâtiment est raccordé à la même infrastructure filaire
            intelligente. L&apos;ensemble s&apos;interconnecte sans passerelle propriétaire pour
            former un système unifié, réactif et pérenne.
          </p>
        </div>

        {/* Grille d'Ingénierie des 6 Domaines */}
        <div className="relative mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINES_SOLUTIONS.map((domaine, index) => {
            const active = carteActive === domaine.id;
            return (
              <div
                className={`revelation group relative flex flex-col justify-between border p-8 transition-all duration-300 motion-reduce:transition-none ${
                  active
                    ? "border-blueprint bg-encre shadow-2xl shadow-blueprint/10"
                    : "border-rule-strong/50 bg-encre/70 hover:border-blueprint/60 hover:bg-encre/90"
                }`}
                key={domaine.id}
                onMouseEnter={() => setCarteActive(domaine.id)}
                onMouseLeave={() => setCarteActive(null)}
                style={{ "--revelation-delai": `${index * 80}ms` } as React.CSSProperties}
              >
                {/* Ligne de connexion bus supérieure */}
                <div className="flex items-center justify-between border-b border-rule-strong/40 pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-blueprint shadow-[0_0_8px_#7FA8E8]" />
                    <span className="font-mono text-[0.68rem] tracking-[0.16em] text-blueprint font-semibold">
                      {domaine.node}
                    </span>
                  </div>
                  <span className="font-mono text-[0.68rem] tracking-[0.14em] text-graphite">
                    0{index + 1} / 06
                  </span>
                </div>

                {/* Icône & Titre */}
                <div className="mt-8">
                  <div className="inline-flex h-14 w-14 items-center justify-center border border-rule-strong/50 bg-ardoise/50 p-2.5 transition-colors group-hover:border-blueprint/60">
                    <img
                      alt=""
                      className="h-9 w-9 opacity-90 [filter:invert(1)_sepia(1)_saturate(2.4)_hue-rotate(178deg)_brightness(1.05)]"
                      decoding="async"
                      loading="lazy"
                      src={domaine.icon}
                    />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-chalk group-hover:text-blueprint transition-colors duration-300">
                    {domaine.label}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-graphite">{domaine.body}</p>
                </div>

                {/* Spécifications & Tags d'ingénierie */}
                <div className="mt-8 border-t border-rule-strong/40 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {domaine.specs.map((spec) => (
                      <span
                        className="border border-rule-strong/40 bg-ardoise/40 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-chalk transition-colors group-hover:border-blueprint/40"
                        key={spec}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const MARQUES = [
  "Gira",
  "JUNG",
  "Basalte",
  "Ekinex",
  "ABB",
  "Schneider Electric",
  "Theben",
  "MDT",
  "Zennio",
];

export function Marques() {
  const ref = useRevelation<HTMLElement>();

  return (
    <section className="overflow-hidden border-t border-rule" id="marques" ref={ref}>
      <div className="mx-auto w-full max-w-[1480px] px-5 pt-28 md:px-10 md:pt-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="revelation md:col-span-5">
            <Eyebrow>Appareillage</Eyebrow>
            <TitreRevele
              as="h2"
              className="mt-7 max-w-[16ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[3.5rem]"
              texte="Ce que nous programmons."
            />
          </div>
          <div className="revelation md:col-span-6 md:col-start-7">
            <p className="max-w-[52ch] text-lg leading-relaxed text-graphite">
              Le choix de l&apos;appareillage se fait après l&apos;étude, sur des critères de
              finition, de disponibilité au Maroc et de budget. La norme reste la même quel que soit
              le fabricant retenu.
            </p>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-graphite">
              KNX MAROC est un intégrateur indépendant et n&apos;est affilié à aucun de ces
              fabricants.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-20 py-10 md:mt-28">
        <div className="marquee">
          {[0, 1].map((copie) => (
            <ul
              aria-hidden={copie === 1 ? "true" : undefined}
              className="flex shrink-0 items-center"
              key={copie}
            >
              {MARQUES.map((marque) => (
                <li
                  className="px-8 font-display text-3xl font-normal tracking-tight whitespace-nowrap text-graphite transition-colors duration-300 hover:text-chalk md:px-12 md:text-5xl motion-reduce:transition-none"
                  key={marque}
                >
                  {marque}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-encre to-transparent md:w-48"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-encre to-transparent md:w-48"
        />
      </div>

      <div className="pb-28 md:pb-40" />
    </section>
  );
}
