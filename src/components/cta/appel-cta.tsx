/* Intention secondaire : appeler. Le numéro est affiché, pas caché derrière un
 * verbe — un prospect qui hésite veut voir qui il compose avant de composer. */

import { COORDONNEES, LIEN_TELEPHONE } from "../../lib/coordonnees";

export function AppelCta({ className }: { className?: string }) {
  return (
    <a
      className={[
        "group inline-flex min-h-11 items-center justify-between gap-8 border border-rule-strong px-6 py-4",
        "font-mono text-xs tracking-[0.06em] text-ink",
        "transition-colors duration-200 hover:border-blueprint hover:text-blueprint active:translate-y-px motion-reduce:transition-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={LIEN_TELEPHONE}
    >
      {COORDONNEES.telephone.affichage}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 motion-reduce:transition-none"
      >
        &gt;
      </span>
    </a>
  );
}
