import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { INVERNADEROS } from "@/data/content";

export default function Invernaderos() {
  return (
    <section id="invernaderos" className="relative overflow-hidden bg-[#10161d]">
      {/* Site footage runs behind the whole section */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/cultivo.mp4"
        poster="/video/cultivo-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#10161d] via-[#10161d]/15 via-30% to-[#10161d]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44 xl:px-12">
        <SectionIndex n={INVERNADEROS.index} />

        <TwoToneHeading
          inline
          white={INVERNADEROS.white}
          accent={INVERNADEROS.accent}
          className="mt-5 text-[clamp(2.2rem,4.8vw,5.4rem)] leading-[0.95] md:mt-6"
        />

        {/* Lead paragraph sits wide and alone, so the footage stays visible
            around it rather than being boxed in by a column of copy */}
        <p className="mt-8 max-w-[34ch] text-[clamp(1.3rem,2vw,2.3rem)] font-light leading-[1.3] tracking-[0.01em] text-white md:mt-10">
          {INVERNADEROS.subtitle}
        </p>

        <p className="mt-6 max-w-[62ch] text-[clamp(0.95rem,1.05vw,1.1rem)] font-light leading-[1.7] tracking-[0.01em] text-white/55 md:mt-8">
          {INVERNADEROS.text.join(" ")}
        </p>

        {/* Grilla de cuatro capacidades */}
        <div className="mt-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {INVERNADEROS.items.map((it) => (
            <div
              key={it.n}
              className="flex min-h-[220px] flex-col bg-[#10161d]/85 p-6 backdrop-blur-md md:min-h-[260px] md:p-7 xl:p-8"
            >
              <span className="text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/45">
                {it.n}
              </span>
              <div className="mb-4 mt-3.5 h-px w-7 bg-white/50" />
              <h3 className="font-heading text-[clamp(1.05rem,1.15vw,1.3rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
                {it.title}
              </h3>
              <p className="mt-2.5 text-[clamp(0.88rem,0.92vw,0.98rem)] font-light leading-[1.6] tracking-[0.01em] text-white/65">
                {it.text.join(" ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 md:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-[52ch] text-[clamp(1rem,1.2vw,1.3rem)] font-light italic leading-[1.55] tracking-[0.01em] text-white/80">
            {INVERNADEROS.cierre}
          </p>

          <div className="flex flex-wrap gap-3 lg:shrink-0">
            {INVERNADEROS.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
