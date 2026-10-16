import Logo from "./Logo";
import { FOOTER_LINKS, CONTACTO } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1017] text-white">
      <div className="mx-auto max-w-[1800px] px-6 py-12 md:px-8 md:py-20 lg:px-10 xl:px-12">
        {/* Brand sits on its own line on narrow screens; the three link
            groups stay side by side from the smallest breakpoint up */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10 xl:gap-14">
          <div className="flex flex-col gap-5">
            <Logo className="h-10 w-auto md:h-11" priority={false} />

            <p className="max-w-[34ch] text-[0.92rem] font-light leading-[1.7] tracking-[0.01em] text-white/45">
              Investigación aplicada para generar evidencia y soluciones que
              mejoren la vida de las personas.
            </p>

            <div className="mt-1 flex items-center gap-3">
              <a
                href={CONTACTO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/55 transition hover:border-white/60 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                  <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.692 6.476L2.667 29.333l7.025-1.843a13.26 13.26 0 0 0 6.312 1.61h.006c7.363 0 13.333-5.97 13.333-13.333s-5.976-13.1-13.339-13.1Zm0 24.399h-.005a11.03 11.03 0 0 1-5.618-1.538l-.403-.24-4.169 1.093 1.113-4.065-.263-.417a11.02 11.02 0 0 1-1.69-5.899c0-6.097 4.962-11.059 11.065-11.059 2.956 0 5.735 1.152 7.826 3.245a10.985 10.985 0 0 1 3.238 7.82c0 6.097-4.962 11.06-11.094 11.06Zm6.067-8.284c-.332-.166-1.966-.97-2.271-1.081-.305-.111-.527-.166-.748.167-.222.332-.86 1.08-1.054 1.302-.194.222-.389.25-.721.083-.332-.167-1.403-.517-2.671-1.648-.987-.88-1.654-1.967-1.848-2.3-.194-.332-.02-.511.146-.677.15-.15.332-.389.499-.583.166-.195.221-.333.332-.556.11-.222.055-.416-.028-.583-.083-.166-.748-1.803-1.025-2.47-.27-.65-.545-.562-.748-.572-.194-.009-.416-.011-.638-.011s-.583.083-.888.416c-.305.332-1.164 1.137-1.164 2.773s1.192 3.218 1.358 3.44c.167.222 2.346 3.582 5.685 5.023.794.343 1.414.548 1.898.701.797.254 1.523.218 2.097.132.64-.096 1.966-.804 2.244-1.581.277-.777.277-1.443.194-1.581-.083-.139-.305-.222-.637-.389Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ungecultivos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/55 transition hover:border-white/60 hover:text-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Three link groups: a row of three even on phones */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-8 lg:col-span-3 lg:grid-cols-3 lg:gap-10 xl:gap-14">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <span className="text-[0.68rem] font-light uppercase leading-none tracking-[0.18em] text-white/35">
                  {group.title}
                </span>

                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[0.85rem] font-light leading-[1.45] tracking-[0.01em] text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:mt-16">
          <a
            href={`mailto:${CONTACTO.email}`}
            className="text-[clamp(1rem,1.3vw,1.35rem)] font-light tracking-[0.01em] text-white/80 transition hover:text-white"
          >
            {CONTACTO.email}
          </a>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 self-start border-b border-white/30 pb-1.5 text-[0.78rem] font-light leading-none tracking-[0.1em] text-white/70 transition hover:gap-4 hover:border-white/60 hover:text-white sm:self-auto"
          >
            <span>ESCRIBINOS</span>
            <svg width="26" height="8" viewBox="0 0 26 8" fill="none" className="shrink-0" aria-hidden>
              <path d="M0 4h24M21 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-3 px-6 py-6 text-[0.75rem] font-light text-white/30 md:flex-row md:px-8 lg:px-10 xl:px-12">
          <span>© {new Date().getFullYear()} UNGE. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="/aviso-legal" className="transition hover:text-white/60">Aviso legal</a>
            <a href="/politica-privacidad" className="transition hover:text-white/60">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
