import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { INVESTIGACION } from "@/data/content";

export default function Investigacion() {
  return (
    <section className="bg-[#0d1722] py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
        <SectionIndex n={INVESTIGACION.index} />
        <TwoToneHeading
          white={INVESTIGACION.white}
          accent={INVESTIGACION.accent}
          className="mt-5 text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.02]"
        />
        <p className="mt-4 max-w-md text-[clamp(1.15rem,1.7vw,1.65rem)] font-light leading-[1.5] text-white/90">
          {INVESTIGACION.subtitle}
        </p>
        <p className="mt-3 max-w-xl text-[0.85rem] font-light leading-[1.5] text-white/70">
          {INVESTIGACION.text.map((l) => (<span key={l} className="block">{l}</span>))}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {INVESTIGACION.items.map((it) => (
            <div key={it.n} className="border-t border-white/15 pt-5">
              <span className="text-[0.8rem] font-light text-white/40">{it.n}</span>
              <h3 className="mt-2 font-heading text-[0.95rem] font-bold uppercase tracking-wide text-white">
                {it.title}
              </h3>
              <p className="mt-3 text-[0.85rem] font-light leading-[1.5] text-white/70">
                {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {INVESTIGACION.buttons.map((b) => (
            <PillButton key={b.label} label={b.label} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
