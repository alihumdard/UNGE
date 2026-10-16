import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { ECOSISTEMA } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="bg-[#0d1722] py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
        <SectionIndex n={ECOSISTEMA.index} />
        <TwoToneHeading
          white={ECOSISTEMA.white}
          accent={ECOSISTEMA.accent}
          className="mt-6 text-[clamp(2rem,3.8vw,3.6rem)] leading-[0.95]"
        />
        <p className="mt-5 max-w-md text-[clamp(1.05rem,1.5vw,1.45rem)] font-light leading-[1.5] text-white/95">
          {ECOSISTEMA.subtitle}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 md:mt-20">
          {ECOSISTEMA.items.map((it) => {
            const bgByIndex: Record<string, string> = {
              "01": IMAGES.ecosistemaCultivo,
              "02": IMAGES.ecosistemaCiencia,
              "03": IMAGES.ecosistemaCadena,
              "04": IMAGES.ecosistemaImpacto,
            };
            return (
              <div
                key={it.n}
                className="relative flex min-h-[260px] flex-col justify-end overflow-hidden bg-[#0d1722] p-8 md:min-h-[320px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgByIndex[it.n]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1722] via-[#0d1722]/70 to-[#0d1722]/20" />
                <div className="relative z-10">
                  <span className="text-[0.95rem] font-light text-white/50">{it.n}</span>
                  <div className="mt-6 h-px w-8 bg-white/80" />
                  <h3 className="mt-4 font-heading text-[clamp(1.1rem,1.6vw,1.5rem)] font-bold uppercase leading-tight text-white">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] font-light leading-[1.5] text-white/80">
                    {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 max-w-xl text-[clamp(1rem,1.4vw,1.3rem)] font-light italic leading-[1.5] text-white/80 md:mt-16">
          &ldquo;{ECOSISTEMA.cierre}&rdquo;
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {ECOSISTEMA.buttons.map((b) => (
            <PillButton key={b.label} label={b.label} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
