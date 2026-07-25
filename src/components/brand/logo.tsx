/* Monogramme et logotype KNX MAROC. Une ligne de bus qui traverse deux nœuds. */

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#15181B" height="32" width="32" />
      <path d="M6 22V10" stroke="#FFFFFF" strokeWidth="1.6" />
      <path d="M6 16L14 10" stroke="#FFFFFF" strokeWidth="1.6" />
      <path d="M6 16L14 22" stroke="#FFFFFF" strokeWidth="1.6" />
      <path d="M18 16H27" stroke="#2E4A7D" strokeWidth="1.6" />
      <circle cx="18" cy="16" fill="#2E4A7D" r="2" />
      <circle cx="27" cy="16" fill="#2E4A7D" r="2" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={["flex items-center gap-2.5", className].filter(Boolean).join(" ")}>
      <Monogram className="h-7 w-7 shrink-0" />
      <span className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.22em] text-ink">
        KNX Maroc
      </span>
    </span>
  );
}
