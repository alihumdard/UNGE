import Logo from "./Logo";
import { NAV, CONTACTO } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0a1017] text-white">
      {/* Top divider */}
      <div className="h-px bg-white/10" />

      {/* Main content */}
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10 lg:gap-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-[0.9rem] font-light leading-[1.6] text-white/50">
              Investigación aplicada para generar evidencia y soluciones que mejoren la vida de las personas.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <span className="mb-1 text-[0.7rem] font-light tracking-[0.2em] text-white/30 uppercase">Secciones</span>
            {NAV.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="text-[0.9rem] font-light tracking-wide text-white/60 transition hover:text-white"
              >
                {i.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="mb-1 text-[0.7rem] font-light tracking-[0.2em] text-white/30 uppercase">Contacto</span>
            <a href={`mailto:${CONTACTO.email}`} className="text-[0.9rem] font-light text-white/60 transition hover:text-white">
              {CONTACTO.email}
            </a>
            <a href="#contacto" className="text-[0.9rem] font-light text-white/60 transition hover:text-white">
              Contacto
            </a>

            <div className="mt-2 flex items-center gap-3">
              <a
                href={CONTACTO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                  <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.692 6.476L2.667 29.333l7.025-1.843a13.26 13.26 0 0 0 6.312 1.61h.006c7.363 0 13.333-5.97 13.333-13.333s-5.976-13.1-13.339-13.1Zm0 24.399h-.005a11.03 11.03 0 0 1-5.618-1.538l-.403-.24-4.169 1.093 1.113-4.065-.263-.417a11.02 11.02 0 0 1-1.69-5.899c0-6.097 4.962-11.059 11.065-11.059 2.956 0 5.735 1.152 7.826 3.245a10.985 10.985 0 0 1 3.238 7.82c0 6.097-4.962 11.06-11.094 11.06Zm6.067-8.284c-.332-.166-1.966-.97-2.271-1.081-.305-.111-.527-.166-.748.167-.222.332-.86 1.08-1.054 1.302-.194.222-.389.25-.721.083-.332-.167-1.403-.517-2.671-1.648-.987-.88-1.654-1.967-1.848-2.3-.194-.332-.02-.511.146-.677.15-.15.332-.389.499-.583.166-.195.221-.333.332-.556.11-.222.055-.416-.028-.583-.083-.166-.748-1.803-1.025-2.47-.27-.65-.545-.562-.748-.572-.194-.009-.416-.011-.638-.011s-.583.083-.888.416c-.305.332-1.164 1.137-1.164 2.773s1.192 3.218 1.358 3.44c.167.222 2.346 3.582 5.685 5.023.794.343 1.414.548 1.898.701.797.254 1.523.218 2.097.132.64-.096 1.966-.804 2.244-1.581.277-.777.277-1.443.194-1.581-.083-.139-.305-.222-.637-.389Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ungecultivos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white hover:text-white"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px bg-white/10" />
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-6 py-6 text-[0.75rem] font-light text-white/30 md:flex-row md:px-10 lg:px-12">
        <span>© {new Date().getFullYear()} UNGE. Todos los derechos reservados.</span>
        <div className="flex gap-6">
          <a href="/aviso-legal" className="transition hover:text-white/60">Aviso legal</a>
          <a href="/politica-privacidad" className="transition hover:text-white/60">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}
