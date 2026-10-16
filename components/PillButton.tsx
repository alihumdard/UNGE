export default function PillButton({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-white/70 px-4 py-2.5 text-[0.68rem] font-light tracking-wide text-white transition hover:bg-white/10 sm:gap-5 sm:px-5 sm:py-3 sm:text-[0.78rem]"
    >
      <span className="whitespace-nowrap">{label}</span>
      <svg width="40" height="10" viewBox="0 0 68 10" fill="none" className="shrink-0 transition-transform group-hover:translate-x-1 sm:w-[68px]" aria-hidden>
        <path d="M0 5H66M62 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </a>
  );
}
