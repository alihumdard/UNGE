import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { NOSOTROS } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Nosotros() {
  // "Cultivar conocimiento. Conectar capacidades. Generar impacto."
  const manifiesto = NOSOTROS.cierre
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);

  const parrafos = NOSOTROS.text
    .join("\n")
    .split("\n\n")
    .map((p) => p.replace(/\n/g, " ").trim())
    .filter(Boolean);

  return (
    <section id="nosotros" className="bg-[#0d1722]">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44 xl:px-12">
        <SectionIndex n={NOSOTROS.index} />

        <TwoToneHeading
          white={NOSOTROS.white}
          accent={NOSOTROS.accent}
          className="mt-5 text-[clamp(2.2rem,4.8vw,5.4rem)] leading-[0.95] md:mt-6"
        />

        {/* Editorial: lead statement over a rule, body text in two columns
            below it, the way a feature opener sets up a longer read */}
        <p className="mt-8 max-w-[44ch] text-[clamp(1.3rem,2vw,2.3rem)] font-light leading-[1.3] tracking-[0.01em] text-white md:mt-10">
          {NOSOTROS.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-y-8 border-t border-white/15 pt-10 md:mt-14 md:pt-12 lg:grid-cols-3 lg:gap-x-14 xl:gap-x-16">
          {parrafos.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.8] tracking-[0.01em] text-white/65"
            >
              {p}
            </p>
          ))}

          <div
            className="h-[200px] w-full bg-cover bg-no-repeat sm:h-[240px] lg:h-auto lg:min-h-[220px]"
            style={{
              backgroundImage: `url(${IMAGES.nosotros})`,
              backgroundPosition: "center 55%",
            }}
            role="img"
            aria-label="Nodo de cultivo de UNGE"
          />
        </div>

        {/* Cierre editorial as three declared positions, not one italic line */}
        <div className="mt-10 grid grid-cols-1 gap-y-px sm:grid-cols-3 md:mt-12 lg:gap-x-14 xl:gap-x-16">
          {manifiesto.map((frase, i) => (
            <div
              key={frase}
              className="border-t border-white/15 py-6 pr-6 md:py-7"
            >
              <span className="block text-[0.75rem] font-light leading-none tracking-[0.16em] text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-heading text-[clamp(1.15rem,1.6vw,1.8rem)] font-semibold uppercase leading-[1.15] tracking-[0.01em] text-white">
                {frase}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:mt-12">
          {NOSOTROS.buttons.map((b) => (
            <PillButton key={b.label} label={b.label} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
