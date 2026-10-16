import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { ENTORNOS } from "@/data/content";
import { IMAGES } from "@/lib/images";

const BG_BY_INDEX: Record<string, string> = {
  "01": IMAGES.entornoExterior,
  "02": IMAGES.entornoIndoor,
  "03": IMAGES.entornoBoutique,
};

export default function Entornos() {
  return (
    <section id="produccion" className="bg-[#0f1c2a]">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44 xl:px-12">
        <SectionIndex n={ENTORNOS.index} />

        {/* Editorial masthead: heading over a rule, subtitle and count sharing
            the baseline row. Deliberately not the split column of section 04. */}
        <TwoToneHeading
          inline
          white={ENTORNOS.white}
          accent={ENTORNOS.accent}
          className="mt-5 text-[clamp(2.2rem,4.8vw,5.4rem)] leading-[0.95] md:mt-6"
        />

        <div className="mt-10 flex flex-col gap-6 border-t border-white/20 pt-6 md:mt-12 md:flex-row md:items-baseline md:justify-between md:gap-12 md:pt-7">
          <p className="text-[clamp(1.05rem,1.35vw,1.5rem)] font-light leading-[1.45] tracking-[0.01em] text-white xl:whitespace-nowrap">
            {ENTORNOS.subtitle}
          </p>

          <span className="shrink-0 text-[0.8rem] font-light uppercase leading-none tracking-[0.18em] text-white/40">
            {ENTORNOS.items.length} nodos
          </span>
        </div>

        {/* Tres tarjetas numeradas */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {ENTORNOS.items.map((it) => (
            <div
              key={it.n}
              className="relative flex min-h-[380px] flex-col justify-end overflow-hidden md:min-h-[460px] lg:min-h-[520px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BG_BY_INDEX[it.n]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2a] via-[#0f1c2a]/70 to-[#0f1c2a]/15" />

              <div className="relative z-10 p-7 md:p-8 lg:p-9">
                <span className="text-[0.95rem] font-light leading-none tracking-[0.12em] text-white/50">
                  {it.n}
                </span>
                <div className="mb-5 mt-4 h-px w-8 bg-white/60" />
                <h3 className="font-heading text-[clamp(1.1rem,1.4vw,1.45rem)] font-semibold uppercase leading-[1.25] tracking-[0.01em] text-white">
                  {it.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[clamp(0.95rem,1.05vw,1.1rem)] font-light leading-[1.6] tracking-[0.01em] text-white/70">
                  {it.text.join(" ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing band: rationale on the left, the two next steps on the
            right, sharing one rule so the section ends on a line, not a gap */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 md:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-[58ch] text-[clamp(0.95rem,1.05vw,1.1rem)] font-light leading-[1.6] tracking-[0.01em] text-white/60">
            {ENTORNOS.text.join(" ")}
          </p>

          <div className="flex flex-wrap gap-3 lg:shrink-0">
            {ENTORNOS.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
