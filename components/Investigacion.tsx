import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { INVESTIGACION } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Investigacion() {
  return (
    <section id="investigacion" className="bg-[#0d1722]">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44 xl:px-12">
        <SectionIndex n={INVESTIGACION.index} />

        {/* Copy and image share the masthead row: the footage anchors the
            section without the full-width band that pushed everything down */}
        <div className="mt-5 grid grid-cols-1 gap-8 md:mt-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-10 xl:gap-12">
          <div>
            <TwoToneHeading
              inline
              white={INVESTIGACION.white}
              accent={INVESTIGACION.accent}
              className="text-[clamp(2.2rem,4.8vw,5.4rem)] leading-[0.95]"
            />

            <p className="mt-6 max-w-[34ch] text-[clamp(1.3rem,2vw,2.3rem)] font-light leading-[1.3] tracking-[0.01em] text-white md:mt-8">
              {INVESTIGACION.subtitle}
            </p>

            <p className="mt-5 max-w-[58ch] text-[clamp(0.95rem,1.02vw,1.08rem)] font-light leading-[1.7] tracking-[0.01em] text-white/55">
              {INVESTIGACION.text.join(" ")}
            </p>
          </div>

          <div
            className="h-[200px] bg-cover bg-center md:h-[260px] lg:h-[300px] xl:h-[340px]"
            style={{ backgroundImage: `url(${IMAGES.investigacion})` }}
            role="img"
            aria-label="Lotes en seguimiento"
          />
        </div>

        {/* Tres ejes, en columnas. Seccion breve: sin tarjetas con imagen */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/15 pt-10 md:mt-14 md:grid-cols-3 md:gap-10 md:pt-12">
          {INVESTIGACION.items.map((it) => (
            <div key={it.n}>
              <span className="text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/45">
                {it.n}
              </span>
              <h3 className="mt-4 font-heading text-[clamp(1.05rem,1.3vw,1.45rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
                {it.title}
              </h3>
              <p className="mt-3 max-w-[42ch] text-[clamp(0.92rem,0.98vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-white/65">
                {it.text.join(" ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 md:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-[58ch] text-[clamp(0.95rem,1.05vw,1.1rem)] font-light leading-[1.65] tracking-[0.01em] text-white/50">
            {INVESTIGACION.cierre}
          </p>

          <div className="flex flex-wrap gap-3 lg:shrink-0">
            {INVESTIGACION.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
