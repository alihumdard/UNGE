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
      <div className="mx-auto max-w-[1600px] px-6 pb-28 pt-28 md:px-10 md:pb-32 md:pt-36 lg:px-12 lg:pb-40 lg:pt-44 xl:px-14">
        <SectionIndex n={ECOSISTEMA.index} />

        <TwoToneHeading
          white={ECOSISTEMA.white}
          accent={ECOSISTEMA.accent}
          className="mt-5 text-[clamp(2.2rem,4.6vw,5rem)] leading-[0.98] md:mt-6"
        />

        {/* Subtitle + intro share one measured column so the eye reads top-down, not edge-to-edge */}
        <div className="mt-8 max-w-[52ch] md:mt-10">
          <p className="text-[clamp(1.25rem,1.6vw,1.75rem)] font-light leading-[1.4] tracking-[0.01em] text-white">
            {ECOSISTEMA.subtitle}
          </p>

          <p className="mt-6 text-[clamp(0.98rem,1.1vw,1.15rem)] font-light leading-[1.65] tracking-[0.01em] text-white/60">
            {ECOSISTEMA.text.join(" ")}
          </p>
        </div>

        {/* Cuatro bloques conectados */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 md:mt-20">
          {ECOSISTEMA.items.map((it) => (
            <div
              key={it.n}
              className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-[#0d1722] p-7 md:min-h-[340px] md:p-9 lg:min-h-[380px] lg:p-10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BG_BY_INDEX[it.n]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1722] via-[#0d1722]/75 to-[#0d1722]/25" />

              <div className="relative z-10">
                <span className="text-[0.95rem] font-light leading-none tracking-[0.12em] text-white/50">
                  {it.n}
                </span>
                <div className="mb-5 mt-4 h-px w-8 bg-white/60" />
                <h3 className="font-heading text-[clamp(1.15rem,1.55vw,1.65rem)] font-semibold uppercase leading-[1.15] tracking-[0.01em] text-white">
                  {it.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[clamp(0.95rem,1.05vw,1.1rem)] font-light leading-[1.6] tracking-[0.01em] text-white/70">
                  {it.text.join(" ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-[46ch] border-l-2 border-accent/50 pl-6 text-[clamp(1.1rem,1.4vw,1.5rem)] font-light italic leading-[1.5] tracking-[0.01em] text-white/85 md:mt-20 md:pl-8">
          {ECOSISTEMA.cierre}
        </p>

        <div className="mt-12 flex flex-wrap gap-4 md:mt-14">
          {ECOSISTEMA.buttons.map((b) => (
            <PillButton key={b.label} label={b.label} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
