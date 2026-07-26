import { COORDONNEES, LIEN_EMAIL, LIEN_TELEPHONE } from "../../lib/coordonnees";
import { useRevelation } from "../../lib/use-revelation";
import { Monogram } from "../brand/logo";
import { TitreRevele } from "../lumiere/titre-revele";
import { Eyebrow } from "./sections";

const SEGMENTS = [
  {
    id: "residentiel",
    titre: "Résidentiel haut de gamme",
    body: "Villas et riads où l'appareillage est visible et où la finition compte autant que la fonction. Nous travaillons sur plan, avant que les gaines soient tirées.",
    points: ["Scènes par pièce", "Claviers affleurants", "Extension par phases"],
  },
  {
    id: "hotellerie",
    titre: "Hôtellerie",
    body: "Chambres, suites et parties communes. Logique d'occupation reliée au PMS, consigne de température réduite chambre vide, contrôle centralisé depuis la réception.",
    points: ["Logique occupation", "Économie sur la climatisation", "Supervision centralisée"],
  },
  {
    id: "tertiaire",
    titre: "Tertiaire et bureaux",
    body: "Plateaux ouverts, salles de réunion, circulations. Détection de présence et gradation sur la lumière du jour, mesure des consommations par zone.",
    points: ["Détection de présence", "Gradation lumière du jour", "Comptage par zone"],
  },
  {
    id: "retail",
    titre: "Retail et showroom",
    body: "Ambiances par plage horaire, mise en valeur des produits, ouverture et fermeture automatiques. Un même programme reproduit sur plusieurs points de vente.",
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
          <Eyebrow>Terrains</Eyebrow>
          <TitreRevele
            as="h2"
            className="mt-7 max-w-[14ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[4.25rem]"
            texte="Quatre terrains, une même norme."
          />
        </div>

        <div className="mt-20">
          {/* Quatre marchés parallèles : pas de numérotation, elle laisserait
           * croire à une séquence. Les étapes de la méthode, plus bas, sont
           * numérotées parce qu'elles s'enchaînent réellement. */}
          {SEGMENTS.map((segment) => (
            <article
              className="revelation group grid gap-6 border-t border-rule py-12 transition-colors duration-500 last:border-b md:grid-cols-12 md:gap-10 md:py-16 motion-reduce:transition-none"
              id={segment.id}
              key={segment.id}
            >
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-chalk transition-colors duration-300 group-hover:text-blueprint md:col-span-5 md:text-4xl motion-reduce:transition-none">
                {segment.titre}
              </h3>
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
    titre: "Étude",
    body: "Lecture des plans, comptage des points, choix de la topologie du bus et estimation budgétaire. Livrable : un schéma de principe et un chiffrage par lot.",
  },
  {
    titre: "Programmation ETS",
    body: "Adressage physique, objets de groupe, paramétrage des actionneurs. Le projet ETS porte votre nom et vous est remis à la réception.",
  },
  {
    titre: "Mise en service",
    body: "Tests point par point sur site, réglage des scènes avec vous, formation des occupants et du personnel technique.",
  },
  {
    titre: "Suivi",
    body: "Contrat de maintenance, télédiagnostic, évolutions du programme quand les usages changent. Le bus ne se refait pas, il se règle.",
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
            <Eyebrow>Déroulé</Eyebrow>
            <TitreRevele
              as="h2"
              className="mt-7 max-w-[16ch] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[3.5rem]"
              texte="Comment un projet se déroule."
            />
          </div>

          {/* La numérotation est méritée ici : les étapes s'enchaînent
           * réellement. Elle suffit à dire la séquence — le filet vertical et
           * les nœuds qui la doublaient ont été retirés avec le reste du
           * vocabulaire de lignes dessinées. */}
          <ol className="mt-16">
            {ETAPES.map((etape, index) => (
              <li
                className="revelation grid grid-cols-[3rem_1fr] gap-6 pb-12 last:pb-0"
                key={etape.titre}
                style={{ "--revelation-delai": `${index * 90}ms` } as React.CSSProperties}
              >
                <span className="pt-1.5 font-mono text-[0.72rem] tracking-[0.14em] text-blueprint">
                  {String(index + 1).padStart(2, "0")}
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

        <aside className="revelation self-start border border-rule bg-ardoise p-9 md:col-span-4 md:col-start-9 md:sticky md:top-28">
          <Monogram className="h-8 w-8 text-chalk" />
          <p className="mt-8 font-display text-2xl font-normal leading-snug text-chalk">
            Le moment le moins cher pour intégrer KNX est la phase études.
          </p>
          <p className="mt-5 leading-relaxed text-graphite">
            Une fois les saignées faites et les gaines tirées, le câblage bus devient un surcoût.
            Consultez-nous pendant que le plan électrique est encore modifiable.
          </p>
        </aside>
      </div>
    </section>
  );
}

const LIEN_PIED =
  "text-chalk underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-blueprint motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-encre">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <address className="not-italic md:col-span-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blueprint">
              KNX MAROC
            </p>
            <p className="mt-5 text-lg leading-relaxed text-chalk">
              {COORDONNEES.adresse.rue}
              <br />
              {COORDONNEES.adresse.quartier}, {COORDONNEES.adresse.ville}
              <br />
              {COORDONNEES.adresse.pays}
            </p>
          </address>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blueprint">
              Nous joindre
            </p>
            <p className="mt-5 flex flex-col gap-2.5 text-lg leading-relaxed">
              <a className={LIEN_PIED} href={LIEN_TELEPHONE}>
                {COORDONNEES.telephone.affichage}
              </a>
              <a className={LIEN_PIED} href={LIEN_EMAIL}>
                {COORDONNEES.email}
              </a>
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blueprint">
              Interventions
            </p>
            <p className="mt-5 text-lg leading-relaxed text-chalk">
              Tout le Maroc, depuis {COORDONNEES.adresse.ville}.
            </p>
            <p className="mt-2 text-lg leading-relaxed text-graphite">Français, arabe, anglais.</p>
          </div>
        </div>

        <p className="mt-16 max-w-[62ch] border-t border-rule pt-7 text-sm leading-relaxed text-graphite">
          KNX est une marque déposée de la KNX Association. KNX MAROC est un intégrateur indépendant
          et n&apos;est affilié à aucun fabricant.
        </p>
      </div>
    </footer>
  );
}
