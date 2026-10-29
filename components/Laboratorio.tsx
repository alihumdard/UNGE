import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import { LAB } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Laboratorio() {
  return (
    <section id="innovacion" className="flex flex-col bg-[#10161d] md:grid md:min-h-screen md:grid-cols-2">
      {/* Left: image + text */}
      <div className="relative flex min-h-[55vh] items-start overflow-hidden md:min-h-screen">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${IMAGES.laboratorio})`, backgroundSize: "cover", backgroundPosition: "20% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a26]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a26]/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-1/3 border-t border-white/10" />
        <div className="pointer-events-none absolute inset-x-0 top-2/3 border-t border-white/10" />
        <div className="pointer-events-none absolute inset-y-0 left-1/4 border-l border-white/10" />

        <div className="relative z-10 w-full px-6 pb-28 pt-28 md:px-8 md:pb-32 md:pt-36 lg:px-10 lg:pb-40 lg:pt-44 xl:px-12">
          <SectionIndex n={LAB.index} />
          <TwoToneHeading
            white={LAB.white}
            accent={LAB.accent}
            className="mt-6 text-[clamp(2.5rem,4.8vw,5.3rem)] leading-[1.02]"
          />
          <p className="mt-5 max-w-sm text-[clamp(1.5rem,2.1vw,2.25rem)] font-light leading-[1.25] tracking-[0.02em] text-white md:max-w-lg">
            {LAB.text.map((l) => (<span key={l} className="block">{l}</span>))}
          </p>
        </div>
      </div>

      {/* Right: 3 rows */}
      <div className="grid grid-rows-3 divide-y divide-white/10 bg-[#10161d]">
        {LAB.items.map((it) => (
          <div key={it.n} className="grid grid-cols-[28%_1fr] items-start md:items-center">
            <div className="flex h-full items-start justify-center border-r border-white/10 pt-8 text-[clamp(2.5rem,4vw,4.2rem)] font-light text-white md:items-center md:py-0">
              <span>{it.n}</span>
            </div>
            <div className="px-6 py-6 md:px-[11%] md:py-0">
              <div className="mb-6 h-0.5 w-10 bg-white" />
              <h3 className="font-heading text-[clamp(1.45rem,2.7vw,2.9rem)] font-semibold uppercase leading-tight tracking-[-0.01em] text-white">{it.title}</h3>
              <p className="mt-2.5 text-[clamp(1.5rem,2.1vw,2.25rem)] font-light leading-[1.25] tracking-[0.02em] text-white">
                {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
