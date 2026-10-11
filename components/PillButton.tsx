export default function PillButton({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-6 rounded-full border border-white/70 px-4 py-3 text-[0.8rem] font-light tracking-wide text-white transition hover:bg-white/10 sm:px-5"
    >
      <span>{label}</span>
      <svg width="68" height="10" viewBox="0 0 68 10" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden>
        <path d="M0 5H66M62 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </a>
  );
}
