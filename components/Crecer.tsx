import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { CRECER } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Crecer() {
  return (
    <section id="impacto" className="bg-[#0f1c2a]">
      {/* Franja 1 · Impacto social — the three steps read as a sequence, so
          they run as a connected horizontal track rather than loose columns */}
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pt-44 xl:px-12">
        <SectionIndex n={CRECER.index} />

        <div className="mt-5 grid grid-cols-1 gap-8 md:mt-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-14">
          <TwoToneHeading
            white={CRECER.white}
            accent={CRECER.accent}
            className="text-[clamp(2.2rem,4.8vw,5.4rem)] leading-[0.95]"
          />

          <p className="max-w-[46ch] text-[clamp(1.1rem,1.3vw,1.45rem)] font-light leading-[1.45] tracking-[0.01em] text-white lg:pb-3">
            {CRECER.subtitle}
          </p>
        </div>

        <p className="mt-8 max-w-[74ch] text-[clamp(0.95rem,1.02vw,1.08rem)] font-light leading-[1.7] tracking-[0.01em] text-white/55 md:mt-10">
          {CRECER.text.join(" ")}
        </p>

        {/* Pasos conectados por una línea de avance */}
        <div className="relative mt-14 md:mt-20">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/15 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {CRECER.items.map((it) => (
              <div key={it.n} className="relative">
                {/* Dot sits beside the number on phones, where there is no
                    track to anchor it, and above it once the track appears */}
                <div className="flex items-center gap-3 md:block">
                  <span className="block h-3 w-3 shrink-0 rounded-full border border-accent bg-[#0f1c2a] md:h-3.5 md:w-3.5" />

                  <span className="block text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/45 md:mt-6">
                    {it.n}
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-[clamp(1.05rem,1.3vw,1.45rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white md:mt-4">
                  {it.title}
                </h3>

                <p className="mt-3 max-w-[44ch] text-[clamp(0.92rem,0.98vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-white/65">
                  {it.text.join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Franja 2 · Impacto ambiental — full-bleed land, since this is the
          part of the model that is literally about the land */}
      <div className="relative mt-16 overflow-hidden md:mt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${IMAGES.crecerAmbiental})`,
            backgroundPosition: "center 38%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1722] via-[#0d1722]/70 via-40% to-[#0d1722]/15" />

        <div className="relative z-10 mx-auto max-w-[1800px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
          <div className="max-w-[62ch]">
            <h3 className="font-heading text-[clamp(1.45rem,2.4vw,2.6rem)] font-semibold uppercase leading-[1.1] tracking-[0.01em] text-white">
              {CRECER.ambiental.title}
            </h3>

            <p className="mt-6 text-[clamp(1rem,1.15vw,1.2rem)] font-light leading-[1.7] tracking-[0.01em] text-white/80">
              {CRECER.ambiental.text.join(" ")}
            </p>

            <p className="mt-4 text-[clamp(0.85rem,0.92vw,0.95rem)] font-light leading-[1.6] tracking-[0.01em] text-white/45">
              {CRECER.ambiental.nota}
            </p>
          </div>
        </div>
      </div>

      {/* Cierre */}
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16 lg:px-10 lg:pb-24 xl:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-[56ch] text-[clamp(1.05rem,1.25vw,1.4rem)] font-light italic leading-[1.55] tracking-[0.01em] text-white/80">
            {CRECER.cierre}
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap lg:shrink-0">
            {CRECER.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
