import { COORDONNEES, LIEN_EMAIL, LIEN_TELEPHONE } from "../../lib/coordonnees";
import { useRevelation } from "../../lib/use-revelation";
import { Monogram } from "../brand/logo";
import { CHIFFRES } from "../../lib/preuves";
import { TitreRevele } from "../lumiere/titre-revele";
import { Eyebrow } from "./sections";

const SEGMENTS = [
  {
    id: "residentiel",
    titre: "Résidentiel haut de gamme",
    body: "Villas et riads où l'appareillage est visible et où la finition compte autant que la fonction. Nous travaillons sur plan, avant que les gaines soient tirées.",
    badgeMetrique: "Projets 300 à 2500 m² · ~350 points bus",
    points: ["Scènes par pièce", "Claviers affleurants", "Extension par phases"],
  },
  {
    id: "hotellerie",
    titre: "Hôtellerie & Hospitality",
    body: "Chambres, suites et parties communes. Logique d'occupation reliée au PMS, consigne de température réduite chambre vide, contrôle centralisé depuis la réception.",
    badgeMetrique: `${CHIFFRES.economieCvc.valeur} d'économie sur la climatisation`,
    points: ["Logique occupation", "Économie sur la climatisation", "Supervision centralisée"],
  },
  {
    id: "tertiaire",
    titre: "Tertiaire et bureaux",
    body: "Plateaux ouverts, salles de réunion, circulations. Détection de présence et gradation sur la lumière du jour, mesure des consommations par zone.",
    badgeMetrique: "Conformité HQE / BREEAM · Daylight Harvesting",
    points: ["Détection de présence", "Gradation lumière du jour", "Comptage par zone"],
  },
  {
    id: "retail",
    titre: "Retail et showroom",
    body: "Ambiances par plage horaire, mise en valeur des produits, ouverture et fermeture automatiques. Un même programme reproduit sur plusieurs points de vente.",
    badgeMetrique: "Scénographies programmables & contrôle à distance",
    points: ["Ambiances horaires", "Programme reproductible", "Pilotage à distance"],
  },
];

export function Segments() {
  const ref = useRevelation<HTMLElement>();

  return (
    <section
      className="border-t border-rule bg-ardoise/70 py-28 backdrop-blur-[2px] md:py-40"
      id="segments"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 md:px-10">
        <div className="revelation">
          <Eyebrow>Terrains d'Exécution</Eyebrow>
          <TitreRevele
            as="h2"
            className="mt-7 max-w-[14ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]"
            texte="Quatre terrains, une même norme."
          />
        </div>

        <div className="mt-20">
          {SEGMENTS.map((segment) => (
            <article
              className="revelation group grid gap-6 border-t border-rule py-12 transition-colors duration-500 last:border-b md:grid-cols-12 md:gap-10 md:py-16 motion-reduce:transition-none"
              id={segment.id}
              key={segment.id}
            >
              <div className="md:col-span-5">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-blueprint">
                  {segment.badgeMetrique}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-chalk transition-colors duration-300 group-hover:text-blueprint md:text-4xl motion-reduce:transition-none">
                  {segment.titre}
                </h3>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="max-w-[62ch] text-lg leading-relaxed text-graphite">{segment.body}</p>
                <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-2.5">
                  {segment.points.map((point) => (
                    <li
                      className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-chalk"
                      key={point}
                    >
                      <span aria-hidden="true" className="h-[5px] w-[5px] bg-blueprint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ETAPES = [
  {
    body: "Lecture des plans d'architecte, comptage des points, choix de la topologie et schémas d'intégration. Livrable : un dossier d'exécution unifilaire complet.",
    titre: "Étude & Avant-Projet",
  },
  {
    body: "Coordination avec l'électricien du chantier, pose du câble bus filaire, raccordement du tableau et montage des appareillages muraux.",
    titre: "Câblage & Intégration",
  },
  {
    body: "Adressage physique, objets de groupe, paramétrage des scènes de vie et essais point par point sur site avec l'utilisateur.",
    titre: "Programmation ETS & Mise en Service",
  },
  {
    body: "Remise de l'intégralité du projet, maintenance, télédiagnostic sécurisé et ajustement des réglages selon vos nouveaux usages.",
    titre: "Suivi & Évolution Pérenne",
  },
];

export function Methode() {
  const ref = useRevelation<HTMLElement>();

  return (
    <section
      className="border-t border-rule bg-encre/70 backdrop-blur-[2px]"
      id="methode"
      ref={ref}
    >
      <div className="mx-auto grid w-full max-w-[1480px] gap-16 px-5 py-28 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-7">
          <div className="revelation">
            <Eyebrow>Déroulé du Projet</Eyebrow>
            <TitreRevele
              as="h2"
              className="mt-7 max-w-[16ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[3.5rem]"
              texte="Comment un projet se déroule."
            />
          </div>

          <ol className="mt-16">
            {ETAPES.map((etape, index) => (
              <li
                className="revelation grid grid-cols-[3rem_1fr] gap-6 pb-12 last:pb-0"
                key={etape.titre}
                style={{ "--revelation-delai": `${index * 90}ms` } as React.CSSProperties}
              >
                <span className="pt-1.5 font-mono text-[0.72rem] tracking-[0.14em] text-blueprint">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-chalk">
                    {etape.titre}
                  </h3>
                  <p className="mt-3 max-w-[58ch] leading-relaxed text-graphite">{etape.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="revelation self-start border border-blueprint/40 bg-ardoise p-9 md:col-span-4 md:col-start-9 md:sticky md:top-28">
          <div className="flex items-center justify-between">
            <Monogram className="h-8 w-8 text-chalk" />
            <span className="border border-blueprint bg-blueprint/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase text-blueprint">
              Fichier ETS Garanti
            </span>
          </div>

          <p className="mt-8 font-display text-2xl font-normal leading-snug text-chalk">
            Le moment idéal pour concevoir votre projet est la phase d&apos;études.
          </p>
          <p className="mt-5 leading-relaxed text-graphite">
            Anticiper l&apos;infrastructure filaire avant les travaux garantit une intégration
            invisible, une coordination parfaite avec votre architecte et une exécution sans
            retouche.
          </p>
          <div className="mt-6 border-t border-rule/60 pt-4 font-mono text-xs text-blueprint">
            ✓ Vous êtes 100 % propriétaire du fichier source `.knxproj`.
          </div>
        </aside>
      </div>
    </section>
  );
}

export { SiteFooter } from "./footer";
