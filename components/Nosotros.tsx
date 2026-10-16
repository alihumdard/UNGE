import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { NOSOTROS } from "@/data/content";

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-[#0d1722] py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10 lg:px-12">
        <SectionIndex n={NOSOTROS.index} />
        <TwoToneHeading
          white={NOSOTROS.white}
          accent={NOSOTROS.accent}
          className="mt-6 text-[clamp(2rem,3.8vw,3.6rem)] leading-[0.98]"
        />
        <p className="mt-6 text-[clamp(1.15rem,1.7vw,1.65rem)] font-light leading-[1.5] text-white/95">
          {NOSOTROS.subtitle}
        </p>

        <div className="mt-8 max-w-2xl text-[0.95rem] font-light leading-[1.7] text-white/80">
          {NOSOTROS.text.map((l, i) =>
            l === "" ? <br key={i} /> : <span key={i} className="block">{l}</span>
          )}
        </div>

        <p className="mt-10 text-[clamp(1.1rem,1.6vw,1.4rem)] font-light italic leading-[1.5] text-white/90">
          &ldquo;{NOSOTROS.cierre}&rdquo;
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {NOSOTROS.buttons.map((b) => (
            <PillButton key={b.label} label={b.label} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
