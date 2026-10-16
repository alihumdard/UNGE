export default function PillButton({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      // Full width on phones: the Spanish labels are long enough that a
      // nowrap inline pill pushed past the viewport edge.
      className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-white/70 px-5 py-4 text-[0.78rem] font-light leading-[1.3] tracking-[0.06em] text-white transition hover:bg-white/10 sm:w-auto sm:justify-start sm:gap-5 sm:px-7 sm:py-[1.35rem] sm:text-[0.9rem] sm:leading-none sm:tracking-[0.08em]"
    >
      <span className="sm:whitespace-nowrap">{label}</span>
      <svg
        width="28"
        height="10"
        viewBox="0 0 90 10"
        fill="none"
        className="w-[28px] shrink-0 transition-transform group-hover:translate-x-1 sm:w-[90px]"
        aria-hidden
      >
        <path d="M0 5H88M84 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </a>
  );
}
