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
    <section id="produccion" className="bg-[#0f1c2a] py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
        <SectionIndex n={ENTORNOS.index} />
        <TwoToneHeading
          white={ENTORNOS.white}
          accent={ENTORNOS.accent}
          className="mt-6 text-[clamp(2rem,3.8vw,3.6rem)] leading-[0.95]"
        />
        <p className="mt-5 max-w-md text-[clamp(1.05rem,1.5vw,1.45rem)] font-light leading-[1.5] text-white/95">
          {ENTORNOS.subtitle}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          {ENTORNOS.items.map((it) => (
            <div key={it.n} className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BG_BY_INDEX[it.n]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2a] via-[#0f1c2a]/60 to-transparent" />
              <div className="relative z-10 p-7">
                <span className="text-[0.95rem] font-light text-white/60">{it.n}</span>
                <div className="mt-4 h-px w-8 bg-white/80" />
                <h3 className="mt-4 font-heading text-[clamp(1.1rem,1.6vw,1.4rem)] font-bold uppercase leading-tight text-white">
                  {it.title}
                </h3>
                <p className="mt-3 text-[0.9rem] font-light leading-[1.5] text-white/85">
                  {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[0.9rem] font-light leading-[1.5] text-white/70">
          {ENTORNOS.text.map((l) => (<span key={l} className="block">{l}</span>))}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {ENTORNOS.buttons.map((b) => (
            <PillButton key={b.label} label={b.label} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
