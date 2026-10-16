import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { ECOSISTEMA } from "@/data/content";
import { IMAGES } from "@/lib/images";

const BG_BY_INDEX: Record<string, string> = {
  "01": IMAGES.ecosistemaCultivo,
  "02": IMAGES.ecosistemaCiencia,
  "03": IMAGES.ecosistemaCadena,
  "04": IMAGES.ecosistemaImpacto,
};

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="bg-[#0d1722]">
      <div className="mx-auto max-w-[1800px] px-6 pb-28 pt-28 md:px-8 md:pb-32 md:pt-36 lg:px-10 lg:pb-40 lg:pt-44 xl:px-12">
        <SectionIndex n={ECOSISTEMA.index} />

        {/* Heading left, supporting copy right: fills the measure instead of
            stacking everything in a narrow column on a wide screen */}
        <div className="mt-6 grid grid-cols-1 gap-x-px gap-y-8 md:mt-8 lg:grid-cols-4 lg:items-start">
          <TwoToneHeading
            white={ECOSISTEMA.white}
            accent={ECOSISTEMA.accent}
            className="text-[clamp(2.2rem,4.8vw,5.4rem)] leading-[0.95] lg:col-span-2"
          />

          <div className="lg:col-span-2 lg:pl-7 lg:pt-2 xl:pl-8">
            <p className="text-[clamp(1.2rem,1.45vw,1.6rem)] font-light leading-[1.45] tracking-[0.01em] text-white">
              {ECOSISTEMA.subtitle}
            </p>

            <p className="mt-5 text-[clamp(0.95rem,1.02vw,1.08rem)] font-light leading-[1.7] tracking-[0.01em] text-white/55">
              {ECOSISTEMA.text.join(" ")}
            </p>
          </div>
        </div>

        {/* Cuatro bloques conectados */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {ECOSISTEMA.items.map((it) => (
            <div
              key={it.n}
              className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-[#0d1722] p-7 md:min-h-[340px] md:p-9 lg:min-h-[420px] lg:p-7 xl:p-8"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BG_BY_INDEX[it.n]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1722] via-[#0d1722]/80 via-38% to-[#0d1722]/10" />

              <div className="relative z-10">
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
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-10 md:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <p className="max-w-[46ch] border-l-2 border-accent/50 pl-6 text-[clamp(1.05rem,1.3vw,1.4rem)] font-light italic leading-[1.5] tracking-[0.01em] text-white/85 md:pl-8">
            {ECOSISTEMA.cierre}
          </p>

          <div className="flex flex-wrap gap-4 lg:shrink-0">
            {ECOSISTEMA.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
