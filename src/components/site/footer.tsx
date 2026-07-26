import { Wordmark } from "../brand/logo";
import { COORDONNEES, LIEN_EMAIL, LIEN_TELEPHONE } from "../../lib/coordonnees";

const LIEN_PIED =
  "text-graphite transition-colors duration-200 hover:text-chalk hover:underline decoration-blueprint decoration-1 underline-offset-4 motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-encre text-graphite" id="site-footer">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-8 md:px-10 md:py-20">
        {/* Grille Principale : Tiny & Ultra-Compacte sur Mobile */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Colonne 1 : Brand & Mission */}
          <div className="lg:col-span-5">
            <Wordmark className="text-chalk" />
            <p className="mt-3 md:mt-5 max-w-[44ch] text-xs leading-relaxed md:text-base text-graphite">
              Intégrateur domotique certifié KNX Partner au Maroc. Nous concevons, programmons et
              déployons des infrastructures filaires ouvertes (ISO/IEC 14543-3) pour villas
              d&apos;exception, hôtels et tertiaire.
            </p>
            <div className="mt-4 md:mt-7 flex flex-wrap items-center gap-2.5 md:gap-4">
              <a
                className="inline-flex items-center gap-2 border border-blueprint/40 bg-blueprint/10 px-3.5 py-1.5 md:px-5 md:py-2.5 font-mono text-[0.68rem] md:text-xs uppercase tracking-[0.14em] text-blueprint transition-colors hover:border-blueprint hover:bg-blueprint/20"
                href="#contact"
              >
                Demander une étude
              </a>
              <a
                className="inline-flex items-center gap-2 border border-rule bg-ardoise/40 px-3.5 py-1.5 md:px-5 md:py-2.5 font-mono text-[0.68rem] md:text-xs uppercase tracking-[0.14em] text-chalk transition-colors hover:border-blueprint/60"
                href={LIEN_TELEPHONE}
              >
                {COORDONNEES.telephone.affichage}
              </a>
            </div>
          </div>

          {/* Colonne 2 : Expertises & Solutions */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[0.68rem] md:text-xs uppercase tracking-[0.18em] text-blueprint font-semibold">
              Expertises & Solutions
            </h3>
            <ul className="mt-3 md:mt-5 grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 text-xs md:text-base">
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Éclairage DALI-2
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Climatisation CVC VRF
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Stores Bioclimatiques
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Hypervision Murale
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Sécurité Biométrique
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="/blog">
                  Blog & Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Siège Social & Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[0.68rem] md:text-xs uppercase tracking-[0.18em] text-blueprint font-semibold">
              Siège Social & Contact
            </h3>
            <address className="mt-3 md:mt-5 not-italic space-y-2 md:space-y-3.5 text-xs md:text-sm leading-relaxed text-graphite">
              <p className="text-graphite">
                {COORDONNEES.adresse.rue}, {COORDONNEES.adresse.quartier},{" "}
                {COORDONNEES.adresse.ville} — {COORDONNEES.adresse.pays}
              </p>
              <p>
                <a className="text-graphite hover:text-chalk transition-colors" href={LIEN_EMAIL}>
                  {COORDONNEES.email}
                </a>
              </p>
              <p className="pt-1 font-mono text-[0.65rem] md:text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                KNX Partner
              </p>
            </address>
          </div>
        </div>

        {/* Ligne Unique de Fin de Page (Tiny Mobile Bar) */}
        <div className="mt-6 md:mt-12 border-t border-rule/50 pt-4 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-2 font-mono text-[0.65rem] md:text-xs text-graphite text-center md:text-left">
          <p>© {new Date().getFullYear()} KNX MAROC. Standard ISO/IEC 14543-3.</p>
          <p>
            Intégrateur Domotique <span className="text-emerald-400 font-semibold">KNX</span>{" "}
            Certifié · Rabat · Casablanca · Marrakech · Tanger · Agadir
          </p>
        </div>
      </div>
    </footer>
  );
}
