import { Wordmark } from "../brand/logo";
import {
  COORDONNEES,
  LIEN_EMAIL,
  LIEN_TELEPHONE,
  RESEAUX_SOCIAUX,
  LIEN_WHATSAPP,
} from "../../lib/coordonnees";

const LIEN_PIED =
  "text-graphite transition-colors duration-200 hover:text-chalk hover:underline decoration-blueprint decoration-1 underline-offset-4 motion-reduce:transition-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-encre text-graphite" id="site-footer">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-6 md:px-10 md:py-16">
        {/* Grille Principale : Minimaliste sur Mobile, Complète sur Desktop */}
        <div className="grid gap-6 md:gap-12 lg:grid-cols-12">
          {/* Colonne 1 : Brand */}
          <div className="lg:col-span-5">
            <Wordmark className="text-chalk" />
            <p className="hidden md:block mt-4 max-w-[44ch] text-sm leading-relaxed text-graphite">
              Intégrateur domotique certifié KNX Partner au Maroc. Infrastructure filaire ouverte
              (ISO/IEC 14543-3) pour villas, hôtels et tertiaire.
            </p>
            {/* CTA Desktop uniquement */}
            <div className="hidden md:flex mt-6 items-center gap-4">
              <a
                className="inline-flex items-center gap-2 border border-blueprint/40 bg-blueprint/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-blueprint transition-colors hover:border-blueprint hover:bg-blueprint/20"
                href="#contact"
              >
                Demander une étude
              </a>
              <a
                className="inline-flex items-center gap-2 border border-rule bg-ardoise/40 px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-chalk transition-colors hover:border-blueprint/60"
                href={LIEN_TELEPHONE}
              >
                {COORDONNEES.telephone.affichage}
              </a>
            </div>
          </div>

          {/* Colonne 2 : Solutions (Desktop Only ou Super Compact Mobile) */}
          <div className="hidden md:block lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-blueprint font-semibold">
              Solutions & Guides
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className={LIEN_PIED} href="#solutions">
                  Éclairage DALI-2 & Gradation
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
                  Hypervision Murale & Sécurité
                </a>
              </li>
              <li>
                <a className={LIEN_PIED} href="/blog">
                  Blog & Guides Domotiques
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Réseaux Sociaux (RS) */}
          <div className="lg:col-span-3">
            <h3 className="hidden md:block font-mono text-xs uppercase tracking-[0.18em] text-blueprint font-semibold">
              Contact & Réseaux Sociaux
            </h3>
            <address className="not-italic space-y-1.5 md:space-y-3 text-xs md:text-sm text-graphite">
              <p className="text-graphite">
                {COORDONNEES.adresse.rue}, {COORDONNEES.adresse.ville} — {COORDONNEES.adresse.pays}
              </p>
              <p className="flex items-center gap-4 pt-1 font-mono text-xs">
                <a className="text-chalk hover:text-blueprint transition-colors" href={LIEN_EMAIL}>
                  {COORDONNEES.email}
                </a>
                <span>·</span>
                <a
                  className="text-chalk hover:text-blueprint transition-colors"
                  href={LIEN_TELEPHONE}
                >
                  {COORDONNEES.telephone.affichage}
                </a>
              </p>
              <p className="pt-1 font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                KNX Partner
              </p>
            </address>

            {/* Liens Réseaux Sociaux (RS) */}
            <div className="mt-3 md:mt-4 flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-graphite">
              <a
                className="hover:text-blueprint transition-colors"
                href={RESEAUX_SOCIAUX.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                className="hover:text-blueprint transition-colors"
                href={RESEAUX_SOCIAUX.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                className="text-emerald-400 hover:text-chalk transition-colors font-medium"
                href={LIEN_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Copyright Line */}
        <div className="mt-5 md:mt-10 border-t border-rule/40 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 font-mono text-[0.65rem] md:text-xs text-graphite text-center md:text-left">
          <p>© {new Date().getFullYear()} KNX MAROC. Standard ISO/IEC 14543-3.</p>
          <p>
            Intégrateur Domotique <span className="text-emerald-400 font-semibold">KNX</span> ·
            Rabat · Casablanca · Marrakech · Tanger · Agadir
          </p>
        </div>
      </div>
    </footer>
  );
}
