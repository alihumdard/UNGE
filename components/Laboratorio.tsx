import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import { LAB } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Laboratorio() {
  return (
    <section id="innovacion" className="flex flex-col bg-[#10161d] md:grid md:min-h-screen md:grid-cols-2">
      {/* Left: image + text */}
      <div className="relative flex min-h-[55vh] items-center overflow-hidden md:min-h-screen">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${IMAGES.laboratorio})`, backgroundSize: "cover", backgroundPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a26]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a26]/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-1/3 border-t border-white/10" />
        <div className="pointer-events-none absolute inset-x-0 top-2/3 border-t border-white/10" />
        <div className="pointer-events-none absolute inset-y-0 left-1/4 border-l border-white/10" />

        <div className="relative z-10 w-full px-6 pb-12 pt-0 md:px-10 md:py-0 lg:px-12" style={{marginTop: "-15%"}}>
          <SectionIndex n={LAB.index} />
          <TwoToneHeading
            white={LAB.white}
            accent={LAB.accent}
            className="mt-5 text-[clamp(2rem,3.9vw,4.3rem)] leading-[1.05]"
          />
          <p className="mt-4 max-w-xs text-[clamp(1rem,1.4vw,1.45rem)] font-light leading-[1.5] text-white md:max-w-md md:leading-[1.2]">
            {LAB.text.map((l) => (<span key={l} className="block">{l}</span>))}
          </p>
        </div>
      </div>

      {/* Right: 3 rows */}
      <div className="grid grid-rows-3 divide-y divide-white/10 bg-[#10161d]">
        {LAB.items.map((it) => (
          <div key={it.n} className="grid grid-cols-[28%_1fr] items-center">
            <div className="flex h-full items-center justify-center border-r border-white/10 py-8 text-[clamp(2rem,3.2vw,3.4rem)] font-light text-white/95 md:py-0">
              <span>{it.n}</span>
            </div>
            <div className="px-6 py-6 md:px-[11%] md:py-0">
              <div className="mb-3 h-px w-8 bg-white/80" />
              <h3 className="font-heading text-[clamp(1rem,1.9vw,2rem)] font-bold uppercase leading-tight text-white">{it.title}</h3>
              <p className="mt-2 text-[clamp(0.82rem,1.1vw,1.15rem)] font-light leading-[1.4] text-white/90">
                {it.text.map((l) => (<span key={l} className="block">{l}</span>))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
