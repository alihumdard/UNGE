import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { CRECER } from "@/data/content";

export default function Crecer() {
  return (
    <section id="impacto" className="bg-[#0f1c2a]">
      {/* Franja 1: Impacto social */}
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
          <SectionIndex n={CRECER.index} />
          <TwoToneHeading
            white={CRECER.white}
            accent={CRECER.accent}
            className="mt-6 text-[clamp(2rem,3.8vw,3.6rem)] leading-[0.95]"
          />
          <p className="mt-5 max-w-md text-[clamp(1.15rem,1.7vw,1.65rem)] font-light leading-[1.5] text-white/95">
            {CRECER.subtitle}
          </p>
          <p className="mt-3 max-w-xl text-[0.85rem] font-light leading-[1.5] text-white/70">
            {CRECER.text.map((l) => (<span key={l} className="block">{l}</span>))}
          </p>

          <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
            {CRECER.items.map((it) => (
              <div key={it.n} className="border-t border-white/15 pt-6">
                <span className="text-[0.95rem] font-light text-white/50">{it.n}</span>
                <h3 className="mt-4 font-heading text-[clamp(1.05rem,1.5vw,1.3rem)] font-bold uppercase leading-tight text-white">
                  {it.title}
                </h3>
                <p className="mt-3 text-[0.9rem] font-light leading-[1.5] text-white/80">
                  {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Franja 2: Impacto ambiental */}
      <div className="border-t border-white/10 bg-[#0d1722] py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
          <h3 className="font-heading text-[clamp(1.3rem,2.2vw,2rem)] font-bold uppercase leading-tight text-white">
            {CRECER.ambiental.title}
          </h3>
          <p className="mt-4 max-w-xl text-[0.9rem] font-light leading-[1.5] text-white/80">
            {CRECER.ambiental.text.map((l) => (<span key={l} className="block">{l}</span>))}
          </p>

          <p className="mt-10 max-w-xl text-[clamp(1rem,1.4vw,1.3rem)] font-light italic leading-[1.5] text-white/80">
            &ldquo;{CRECER.cierre}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {CRECER.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
