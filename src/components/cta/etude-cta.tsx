/* Intention primaire, une seule identité, un seul libellé. Bloc encre, filet
 * blueprint qui se trace sous le label. Rendu en lien dans le chrome de la
 * page et en bouton de soumission du formulaire. Aucun autre contrôle du site
 * n'emprunte ce style. */

import type { ReactNode } from "react";

const SURFACE =
  "group inline-flex min-h-11 items-center gap-3 bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-transform duration-200 active:translate-y-px motion-reduce:transition-none";

const LABEL = "Demander une étude";

function Label({ children = LABEL }: { children?: ReactNode }) {
  return (
    <span className="relative">
      {children}
      <span
        aria-hidden="true"
        className="absolute -bottom-1.5 left-0 h-px w-0 bg-blueprint transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full motion-reduce:transition-none"
      />
    </span>
  );
}

export function EtudeCta({ href = "#contact", className }: { href?: string; className?: string }) {
  return (
    <a className={[SURFACE, className].filter(Boolean).join(" ")} href={href}>
      <Label />
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
      className={[SURFACE, "justify-center disabled:opacity-60", className]
        .filter(Boolean)
        .join(" ")}
      disabled={pending}
      type="submit"
    >
      <Label>{pending ? "Envoi en cours…" : LABEL}</Label>
    </button>
  );
}
