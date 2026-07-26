/* Intention primaire, une seule identité, un seul libellé.
 *
 * Sur fond sombre, le bloc encre du site clair disparaîtrait. L'action prend
 * la couleur du bus : bloc blueprint plein, texte encre — 7.9:1. C'est le
 * seul aplat saturé de la page, donc le seul endroit où l'œil va d'abord. */

import type { ReactNode } from "react";

const SURFACE =
  "group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden bg-blueprint px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-encre transition-transform duration-200 active:translate-y-px motion-reduce:transition-none";

const LABEL = "Demander une étude";

function Contenu({ children = LABEL }: { children?: ReactNode }) {
  return (
    <>
      {/* Balayage clair au survol : le bloc s'éclaircit depuis la gauche
       * plutôt que de changer de teinte d'un coup. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-chalk transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
      />
      <span className="relative">{children}</span>
    </>
  );
}

export function EtudeCta({ href = "#contact", className }: { href?: string; className?: string }) {
  return (
    <a className={[SURFACE, className].filter(Boolean).join(" ")} href={href}>
      <Contenu />
    </a>
  );
}

export function EtudeSubmit({
  pending = false,
  className,
}: {
  pending?: boolean;
  className?: string;
}) {
  return (
    <button
      aria-busy={pending || undefined}
      className={[SURFACE, "disabled:opacity-60", className].filter(Boolean).join(" ")}
      disabled={pending}
      type="submit"
    >
      <Contenu>{pending ? "Envoi en cours…" : LABEL}</Contenu>
    </button>
  );
}
