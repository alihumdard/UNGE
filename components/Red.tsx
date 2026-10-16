import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { RED } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Red() {
  return (
    <section id="red" className="bg-[#0f1c2a]">
      {/* Split screen: a standing image column against the copy, so this
          section reads differently from the banded layouts above it */}
      <div className="lg:grid lg:grid-cols-[minmax(0,34%)_1fr]">
        <div
          className="relative h-[260px] bg-cover bg-center md:h-[340px] lg:h-auto"
          style={{ backgroundImage: `url(${IMAGES.red})` }}
          role="img"
          aria-label="Suelo preparado en el nodo de cultivo"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1c2a] lg:bg-gradient-to-r lg:from-[#0f1c2a]/35 lg:via-transparent lg:to-[#0f1c2a]" />
        </div>

        <div className="px-6 pb-14 pt-14 md:px-8 md:pb-16 md:pt-16 lg:py-20 lg:pl-12 lg:pr-10 xl:py-24 xl:pl-16 xl:pr-12">
          <div className="mx-auto max-w-[1400px] lg:mx-0">
            <SectionIndex n={RED.index} />

            <TwoToneHeading
              white={RED.white}
              accent={RED.accent}
              className="mt-5 text-[clamp(2.2rem,3.6vw,4.2rem)] leading-[0.98] md:mt-6"
            />

            <p className="mt-7 max-w-[52ch] text-[clamp(1.25rem,1.6vw,1.8rem)] font-light leading-[1.35] tracking-[0.01em] text-white md:mt-8">
              {RED.subtitle}
            </p>

            <p className="mt-5 max-w-[72ch] text-[clamp(0.95rem,1.02vw,1.08rem)] font-light leading-[1.7] tracking-[0.01em] text-white/55">
              {RED.text.join(" ")}
            </p>

            {/* Categorias apiladas: cada vinculo es una fila, no una tarjeta */}
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10 md:mt-12">
              {RED.items.map((it) => (
                <div
                  key={it.n}
                  className="grid grid-cols-[auto_1fr] gap-x-5 py-6 md:gap-x-8 md:py-7"
                >
                  <span className="pt-1 text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/40">
                    {it.n}
                  </span>

                  <div>
                    <h3 className="font-heading text-[clamp(1.05rem,1.25vw,1.4rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
                      {it.title}
                    </h3>
                    <p className="mt-2 max-w-[68ch] text-[clamp(0.92rem,0.98vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-white/65">
                      {it.text.join(" ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[64ch] text-[clamp(1.05rem,1.25vw,1.4rem)] font-light italic leading-[1.55] tracking-[0.01em] text-white/80 md:mt-12">
              {RED.cierre}
            </p>

            {/* CTA destacado orientado a alianzas */}
            {/* Primary action carries a hairline accent border rather than a
                filled block, which sat too hot against the dark field */}
            {/* Compact pair: both fit one row, the primary marked by colour
                rather than by size or a filled block */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-12">
              <a
                href={RED.buttons[0].href}
                className="group inline-flex items-center gap-3 border-b border-accent pb-2 text-[0.78rem] font-light leading-none tracking-[0.1em] text-accent transition hover:gap-4 sm:text-[0.82rem]"
              >
                <span className="whitespace-nowrap">{RED.buttons[0].label}</span>
                <svg width="26" height="8" viewBox="0 0 26 8" fill="none" className="shrink-0" aria-hidden>
                  <path d="M0 4h24M21 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>

              <a
                href={RED.buttons[1].href}
                className="group inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[0.78rem] font-light leading-none tracking-[0.1em] text-white/70 transition hover:gap-4 hover:border-white/60 hover:text-white sm:text-[0.82rem]"
              >
                <span className="whitespace-nowrap">{RED.buttons[1].label}</span>
                <svg width="26" height="8" viewBox="0 0 26 8" fill="none" className="shrink-0" aria-hidden>
                  <path d="M0 4h24M21 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
