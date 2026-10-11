import Logo from "./Logo";
import { NAV } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0a1017] text-white">
      {/* Top divider */}
      <div className="h-px bg-white/10" />

      {/* Main content */}
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_auto] md:gap-16 lg:gap-24">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-[0.85rem] font-light leading-[1.6] text-white/50">
              Investigación aplicada para generar evidencia y soluciones que mejoren la vida de las personas.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <span className="mb-2 text-[0.7rem] font-light tracking-[0.2em] text-white/30 uppercase">Secciones</span>
            {NAV.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="text-[0.85rem] font-light tracking-wide text-white/60 transition hover:text-white"
              >
                {i.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="mb-2 text-[0.7rem] font-light tracking-[0.2em] text-white/30 uppercase">Contacto</span>
            <a href="mailto:contacto@unge.com" className="text-[0.85rem] font-light text-white/60 transition hover:text-white">
              contacto@unge.com
            </a>
            <a href="#contacto" className="mt-4 inline-flex w-fit items-center gap-4 rounded-full border border-white/20 px-5 py-3 text-[0.8rem] font-light tracking-wide text-white/70 transition hover:border-white/50 hover:text-white">
              CONTACTO
              <svg width="36" height="8" viewBox="0 0 36 8" fill="none" aria-hidden>
                <path d="M0 4H34M30 1l4 3-4 3" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px bg-white/10" />
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-6 py-6 text-[0.75rem] font-light text-white/30 md:flex-row md:px-10 lg:px-12">
        <span>© {new Date().getFullYear()} UNGE. Todos los derechos reservados.</span>
        <span className="tracking-wide">Cannabis Medicinal · Ciencia · Salud</span>
      </div>
    </footer>
  );
}
