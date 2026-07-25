import { COORDONNEES, LIEN_EMAIL, LIEN_TELEPHONE } from "../../lib/coordonnees";
import { Monogram } from "../brand/logo";

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
  return (
    <section className="border-t border-rule bg-paper py-24 md:py-32" id="segments">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <h2 className="max-w-[14ch] font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-6xl">
          Quatre terrains, une même norme.
        </h2>

        <div className="mt-16">
          {/* Quatre marchés parallèles : pas de numérotation, elle laisserait
           * croire à une séquence. Les étapes de la méthode, plus bas, sont
           * numérotées parce qu'elles s'enchaînent réellement. */}
          {SEGMENTS.map((segment) => (
            <article
              className="grid gap-6 border-t border-rule py-12 md:grid-cols-12 md:gap-10 md:py-16"
              id={segment.id}
              key={segment.id}
            >
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:col-span-5 md:text-3xl">
                {segment.titre}
              </h3>
              <div className="md:col-span-6 md:col-start-7">
                <p className="max-w-[65ch] text-base leading-relaxed text-graphite">
                  {segment.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {segment.points.map((point) => (
                    <li
                      className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink"
                      key={point}
                    >
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
  return (
    <section className="border-t border-rule bg-chalk" id="methode">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <h2 className="max-w-[16ch] font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-5xl">
            Comment un projet se déroule.
          </h2>
          <ol className="mt-14">
            {ETAPES.map((etape, index) => (
              <li
                className="grid grid-cols-[3rem_1fr] gap-5 border-t border-rule py-8"
                key={etape.titre}
              >
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-blueprint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {etape.titre}
                  </h3>
                  <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-graphite">
                    {etape.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="self-start border border-rule bg-paper p-8 md:col-span-4 md:col-start-9 md:sticky md:top-28">
          <Monogram className="h-8 w-8" />
          <p className="mt-7 font-display text-xl font-normal leading-snug text-ink">
            Le moment le moins cher pour intégrer KNX est la phase études.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-graphite">
            Une fois les saignées faites et les gaines tirées, le câblage bus devient un surcoût.
            Consultez-nous pendant que le plan électrique est encore modifiable.
          </p>
        </aside>
      </div>
    </section>
  );
}

const LIEN_PIED =
  "text-ink underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:decoration-blueprint motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-chalk">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <address className="not-italic md:col-span-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
              KNX MAROC
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              {COORDONNEES.adresse.rue}
              <br />
              {COORDONNEES.adresse.quartier}, {COORDONNEES.adresse.ville}
              <br />
              {COORDONNEES.adresse.pays}
            </p>
          </address>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
              Nous joindre
            </p>
            <p className="mt-4 flex flex-col gap-2 text-base leading-relaxed">
              <a className={LIEN_PIED} href={LIEN_TELEPHONE}>
                {COORDONNEES.telephone.affichage}
              </a>
              <a className={LIEN_PIED} href={LIEN_EMAIL}>
                {COORDONNEES.email}
              </a>
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
              Interventions
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Tout le Maroc, depuis {COORDONNEES.adresse.ville}.
            </p>
            <p className="mt-2 text-base leading-relaxed text-graphite">
              Français, arabe, anglais.
            </p>
          </div>
        </div>

        <p className="mt-14 max-w-[62ch] border-t border-rule pt-6 text-sm leading-relaxed text-graphite">
          KNX est une marque déposée de la KNX Association. KNX MAROC est un intégrateur indépendant
          et n&apos;est affilié à aucun fabricant.
        </p>
      </div>
    </footer>
  );
}
