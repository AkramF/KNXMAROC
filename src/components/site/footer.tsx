import { Wordmark } from "../brand/logo";
import { COORDONNEES, LIEN_EMAIL, LIEN_TELEPHONE } from "../../lib/coordonnees";

const LIEN_PIED =
  "text-graphite transition-colors duration-200 hover:text-chalk hover:underline decoration-blueprint decoration-1 underline-offset-4 motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-encre text-graphite" id="site-footer">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-16 md:px-10 md:py-24">
        {/* Grille Principale 3 Colonnes Équilibrée */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Colonne 1 : Brand & Mission */}
          <div className="lg:col-span-5">
            <Wordmark className="text-chalk" />
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-graphite">
              Intégrateur domotique certifié KNX Partner au Maroc. Nous concevons, programmons et
              déployons des infrastructures filaires ouvertes (ISO/IEC 14543-3) pour villas
              d&apos;exception, hôtels de prestige et bâtiments tertiaires.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 border border-blueprint/40 bg-blueprint/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-blueprint transition-colors hover:border-blueprint hover:bg-blueprint/20"
                href="#contact"
              >
                Demander une étude
              </a>
              <a
                className="inline-flex items-center gap-2 border border-rule bg-ardoise/40 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-chalk transition-colors hover:border-blueprint/60"
                href={LIEN_TELEPHONE}
              >
                {COORDONNEES.telephone.affichage}
              </a>
            </div>
          </div>

          {/* Colonne 2 : Expertises & Solutions */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-blueprint font-semibold">
              Expertises & Solutions
            </h3>
            <ul className="mt-6 space-y-3 text-base">
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Éclairage DALI-2 & Gradation
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Climatisation & CVC VRF
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Stores Bioclimatiques
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Hypervision Tactile Mural
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Sécurité & Accès Biométrique
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Audio Multiroom Haute-Fidélité
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Siège Social & Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-blueprint font-semibold">
              Siège Social & Contact
            </h3>
            <address className="mt-6 not-italic space-y-3.5 text-sm leading-relaxed text-graphite">
              <p className="text-graphite">
                {COORDONNEES.adresse.rue}
                <br />
                {COORDONNEES.adresse.quartier}, {COORDONNEES.adresse.ville} —{" "}
                {COORDONNEES.adresse.pays}
              </p>
              <p>
                <a className="text-graphite hover:text-chalk transition-colors" href={LIEN_EMAIL}>
                  {COORDONNEES.email}
                </a>
              </p>
              <p className="pt-2 font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Partenaire Certifié KNX Partner
              </p>
            </address>
          </div>
        </div>

        {/* Ligne Unique de Fin de Page */}
        <div className="mt-14 border-t border-rule/50 pt-8 flex flex-col items-center justify-between gap-4 font-mono text-xs sm:text-sm text-graphite sm:flex-row">
          <p>© {new Date().getFullYear()} KNX MAROC. Standard ISO/IEC 14543-3.</p>
          <p className="text-center sm:text-right">
            Intégrateur Domotique <span className="text-emerald-400 font-semibold">KNX</span>{" "}
            Certifié · Rabat · Casablanca · Marrakech · Tanger · Agadir
          </p>
        </div>
      </div>
    </footer>
  );
}
