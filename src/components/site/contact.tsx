import { useId, useState, type FormEvent } from "react";

import {
  PHASES,
  SEGMENTS,
  demandeSchema,
  envoyerDemande,
  type DemandeChamp,
} from "../../lib/api/contact.functions";
import { COORDONNEES, LIEN_EMAIL } from "../../lib/coordonnees";
import { AppelCta } from "../cta/appel-cta";
import { EtudeSubmit } from "../cta/etude-cta";

type Etat =
  | { nom: "repos" }
  | { nom: "envoi" }
  | { nom: "succes" }
  /* Trois pannes distinctes, trois messages distincts : dire « vérifiez les
   * champs » à quelqu'un dont la connexion a lâché lui fait relire un
   * formulaire correct. */
  | { nom: "erreur-saisie" }
  | { nom: "erreur-configuration" }
  | { nom: "erreur-reseau" };

const CHAMP =
  "w-full border border-rule-strong bg-paper px-4 py-3 text-base text-ink outline-none transition-colors focus:border-blueprint aria-[invalid=true]:border-blueprint aria-[invalid=true]:border-2 motion-reduce:transition-none";
const ETIQUETTE = "block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite";

function MessageChamp({ id, texte }: { id: string; texte?: string }) {
  if (!texte) return null;
  return (
    <p className="mt-2 text-sm leading-snug text-blueprint" id={id}>
      {texte}
    </p>
  );
}

export function Contact() {
  const [etat, setEtat] = useState<Etat>({ nom: "repos" });
  const [erreurs, setErreurs] = useState<Partial<Record<DemandeChamp, string>>>({});
  const prefixe = useId();

  const messageErreur = (champ: DemandeChamp) => erreurs[champ];
  const idErreur = (champ: DemandeChamp) => `${prefixe}-${champ}-erreur`;

  const proprietesChamp = (champ: DemandeChamp) => ({
    id: `${prefixe}-${champ}`,
    name: champ,
    "aria-invalid": messageErreur(champ) ? (true as const) : undefined,
    "aria-describedby": messageErreur(champ) ? idErreur(champ) : undefined,
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formulaire = event.currentTarget;
    const brut = Object.fromEntries(new FormData(formulaire));

    /* Valider ici avec le même schéma que le serveur permet de désigner le
     * champ fautif au lieu d'afficher un message général. */
    const analyse = demandeSchema.safeParse(brut);
    if (!analyse.success) {
      const trouvees: Partial<Record<DemandeChamp, string>> = {};
      for (const probleme of analyse.error.issues) {
        const champ = probleme.path[0] as DemandeChamp | undefined;
        if (champ && !trouvees[champ]) trouvees[champ] = probleme.message;
      }
      setErreurs(trouvees);
      setEtat({ nom: "erreur-saisie" });
      const premier = Object.keys(trouvees)[0];
      if (premier) {
        formulaire.querySelector<HTMLElement>(`[name="${premier}"]`)?.focus();
      }
      return;
    }

    setErreurs({});
    setEtat({ nom: "envoi" });

    try {
      const reponse = await envoyerDemande({ data: analyse.data });
      if (reponse.ok) {
        setEtat({ nom: "succes" });
        formulaire.reset();
        return;
      }
      setEtat({
        nom: reponse.raison === "configuration" ? "erreur-configuration" : "erreur-reseau",
      });
    } catch {
      setEtat({ nom: "erreur-reseau" });
    }
  }

  return (
    <section className="border-t border-rule bg-paper" id="contact">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <h2 className="max-w-[14ch] font-display text-4xl font-semibold leading-none tracking-tighter text-ink md:text-5xl">
            Parlons du projet.
          </h2>
          <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-graphite">
            Envoyez-nous les plans et la phase d&apos;avancement. Nous revenons vers vous avec un
            schéma de principe et un ordre de grandeur budgétaire.
          </p>

          {/* Un visiteur qui ne veut pas remplir de formulaire doit trouver un
           * téléphone et une adresse, pas une fiche signalétique. */}
          <dl className="mt-12 border-t border-rule">
            <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
                E-mail
              </dt>
              <dd>
                <a
                  className="font-display text-lg text-ink underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:decoration-blueprint motion-reduce:transition-none"
                  href={LIEN_EMAIL}
                >
                  {COORDONNEES.email}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
                Bureau
              </dt>
              <dd className="text-right font-display text-lg leading-snug text-ink">
                {COORDONNEES.adresse.rue}
                <br />
                {COORDONNEES.adresse.quartier}, {COORDONNEES.adresse.ville}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
                Langues
              </dt>
              <dd className="font-display text-lg text-ink">Français, arabe, anglais</dd>
            </div>
          </dl>

          <AppelCta className="mt-10 w-full sm:w-auto" />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {etat.nom === "succes" ? (
            <div aria-live="polite" className="border border-blueprint bg-chalk p-10" role="status">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blueprint">
                Demande envoyée
              </p>
              <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                Merci. Nous vous répondons sous deux jours ouvrés.
              </p>
              <p className="mt-4 text-base leading-relaxed text-graphite">
                Si le projet est urgent, appelez le {COORDONNEES.telephone.affichage}.
              </p>
              <button
                className="mt-8 min-h-11 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink underline decoration-blueprint decoration-2 underline-offset-4"
                onClick={() => setEtat({ nom: "repos" })}
                type="button"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form className="grid gap-6" noValidate onSubmit={onSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-nom`}>
                    Nom
                  </label>
                  <input
                    className={`${CHAMP} mt-2`}
                    autoComplete="name"
                    type="text"
                    {...proprietesChamp("nom")}
                  />
                  <MessageChamp id={idErreur("nom")} texte={messageErreur("nom")} />
                </div>
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-organisation`}>
                    Société ou cabinet
                  </label>
                  <input
                    className={`${CHAMP} mt-2`}
                    autoComplete="organization"
                    type="text"
                    {...proprietesChamp("organisation")}
                  />
                  <MessageChamp
                    id={idErreur("organisation")}
                    texte={messageErreur("organisation")}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-email`}>
                    Adresse e-mail
                  </label>
                  <input
                    className={`${CHAMP} mt-2`}
                    autoComplete="email"
                    type="email"
                    {...proprietesChamp("email")}
                  />
                  <MessageChamp id={idErreur("email")} texte={messageErreur("email")} />
                </div>
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-telephone`}>
                    Téléphone
                  </label>
                  <input
                    className={`${CHAMP} mt-2`}
                    autoComplete="tel"
                    type="tel"
                    {...proprietesChamp("telephone")}
                  />
                  <MessageChamp id={idErreur("telephone")} texte={messageErreur("telephone")} />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-ville`}>
                    Ville du projet
                  </label>
                  <input
                    className={`${CHAMP} mt-2`}
                    autoComplete="address-level2"
                    type="text"
                    {...proprietesChamp("ville")}
                  />
                  <MessageChamp id={idErreur("ville")} texte={messageErreur("ville")} />
                </div>
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-segment`}>
                    Type de projet
                  </label>
                  <select
                    className={`${CHAMP} mt-2`}
                    defaultValue="residentiel"
                    {...proprietesChamp("segment")}
                  >
                    {Object.entries(SEGMENTS).map(([valeur, libelle]) => (
                      <option key={valeur} value={valeur}>
                        {libelle}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={ETIQUETTE} htmlFor={`${prefixe}-phase`}>
                    Phase
                  </label>
                  <select
                    className={`${CHAMP} mt-2`}
                    defaultValue="etudes"
                    {...proprietesChamp("phase")}
                  >
                    {Object.entries(PHASES).map(([valeur, libelle]) => (
                      <option key={valeur} value={valeur}>
                        {libelle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={ETIQUETTE} htmlFor={`${prefixe}-message`}>
                  Le projet en quelques lignes
                </label>
                <textarea
                  className={`${CHAMP} mt-2 min-h-40 resize-y`}
                  {...proprietesChamp("message")}
                />
                <MessageChamp id={idErreur("message")} texte={messageErreur("message")} />
              </div>

              <div aria-live="assertive" role="alert">
                {etat.nom === "erreur-saisie" ? (
                  <p className="border-l-2 border-blueprint pl-4 text-sm leading-relaxed text-ink">
                    Le formulaire n&apos;est pas complet. Les champs signalés attendent une
                    correction.
                  </p>
                ) : null}

                {etat.nom === "erreur-reseau" ? (
                  <p className="border-l-2 border-blueprint pl-4 text-sm leading-relaxed text-ink">
                    L&apos;envoi n&apos;a pas abouti. Réessayez dans un instant, ou écrivez-nous à{" "}
                    <a
                      className="underline decoration-blueprint decoration-2 underline-offset-4"
                      href={LIEN_EMAIL}
                    >
                      {COORDONNEES.email}
                    </a>
                    .
                  </p>
                ) : null}

                {etat.nom === "erreur-configuration" ? (
                  <p className="border-l-2 border-blueprint pl-4 text-sm leading-relaxed text-ink">
                    Le formulaire est momentanément hors service. Écrivez-nous à{" "}
                    <a
                      className="underline decoration-blueprint decoration-2 underline-offset-4"
                      href={LIEN_EMAIL}
                    >
                      {COORDONNEES.email}
                    </a>{" "}
                    ou appelez le {COORDONNEES.telephone.affichage}.
                  </p>
                ) : null}
              </div>

              <EtudeSubmit
                className="w-full sm:w-auto sm:justify-self-start"
                pending={etat.nom === "envoi"}
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
