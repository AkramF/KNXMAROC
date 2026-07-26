/* Monogramme et logotype KNX MAROC. Une ligne de bus qui traverse deux nœuds.
 * Les traits prennent currentColor pour survivre au fond sombre comme au
 * fond clair d'une éventuelle impression. */

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 22V10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 16L14 10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 16L14 22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 16H27" className="text-blueprint" stroke="#7FA8E8" strokeWidth="1.6" />
      <circle cx="18" cy="16" fill="#7FA8E8" r="2" />
      <circle cx="27" cy="16" fill="#7FA8E8" r="2" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={["flex items-center gap-2.5 text-chalk", className].filter(Boolean).join(" ")}>
      <Monogram className="h-7 w-7 shrink-0" />
      <span className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.22em]">
        KNX Maroc
      </span>
    </span>
  );
}
