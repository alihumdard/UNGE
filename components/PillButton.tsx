export default function PillButton({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 rounded-full border border-white/70 px-6 py-[1.1rem] text-[0.8rem] font-light leading-none tracking-[0.08em] text-white transition hover:bg-white/10 sm:gap-5 sm:px-7 sm:py-[1.35rem] sm:text-[0.9rem]"
    >
      <span className="whitespace-nowrap">{label}</span>
      <svg width="48" height="10" viewBox="0 0 90 10" fill="none" className="shrink-0 transition-transform group-hover:translate-x-1 sm:w-[90px]" aria-hidden>
        <path d="M0 5H88M84 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </a>
  );
}
