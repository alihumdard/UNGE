export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="UNGE">
      <svg width="50" height="34" viewBox="0 0 50 34" fill="none" aria-hidden>
        <path d="M2 3 L16 17 L2 31" stroke="#8d9097" strokeWidth="6" strokeLinejoin="miter" />
        <path d="M2 31 C14 31 18 17 25 17 S36 3 48 3" stroke="#8d9097" strokeWidth="6" />
        <path d="M48 31 L34 17 L48 3" stroke="#c9ccd2" strokeWidth="6" />
      </svg>
      <span className="font-heading text-[2rem] font-bold leading-none tracking-[0.18em] text-white">
        UNGE<sup className="ml-0.5 align-super text-[0.7rem] tracking-normal">®</sup>
      </span>
    </a>
  );
}
