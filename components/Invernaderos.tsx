import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { INVERNADEROS } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Invernaderos() {
  return (
    <section className="flex flex-col bg-[#10161d] md:grid md:min-h-screen md:grid-cols-2">
      <div className="relative flex min-h-[70vh] items-center overflow-hidden md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.invernaderos})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10161d]/90 via-[#10161d]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10161d]/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-6 py-16 md:px-10 lg:px-12">
          <SectionIndex n={INVERNADEROS.index} />
          <TwoToneHeading
            white={INVERNADEROS.white}
            accent={INVERNADEROS.accent}
            className="mt-5 text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.15]"
          />
          <p className="mt-8 max-w-xs text-[clamp(1.15rem,1.7vw,1.65rem)] font-light leading-[1.5] text-white md:max-w-md">
            {INVERNADEROS.subtitle}
          </p>
          <p className="mt-4 max-w-xs text-[0.85rem] font-light leading-[1.5] text-white/75 md:max-w-sm">
            {INVERNADEROS.text.map((l) => (<span key={l} className="block">{l}</span>))}
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[#10161d]">
        <div className="grid grid-cols-1 gap-px divide-white/10 bg-white/10 sm:grid-cols-2">
          {INVERNADEROS.items.map((it) => (
            <div key={it.n} className="flex flex-col justify-center bg-[#10161d] p-8">
              <span className="text-[0.95rem] font-light text-white/50">{it.n}</span>
              <div className="mt-4 h-px w-8 bg-white/80" />
              <h3 className="mt-4 font-heading text-[clamp(1rem,1.5vw,1.4rem)] font-bold uppercase leading-tight text-white">
                {it.title}
              </h3>
              <p className="mt-3 text-[0.85rem] font-light leading-[1.4] text-white/85">
                {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
              </p>
            </div>
          ))}
        </div>

        <div className="p-8 py-10 md:py-12">
          <p className="max-w-md text-[0.9rem] font-light italic leading-[1.5] text-white/80">
            &ldquo;{INVERNADEROS.cierre}&rdquo;
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {INVERNADEROS.buttons.map((b) => (
              <PillButton key={b.label} label={b.label} href={b.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
