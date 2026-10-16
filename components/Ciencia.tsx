import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import { CIENCIA } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Ciencia() {
  return (
    <section id="ciencia" className="relative flex min-h-[50vh] items-stretch overflow-hidden bg-[#0f1c2a] md:min-h-screen">
      <div
        className="absolute inset-y-0 right-0 w-full bg-cover bg-center md:bg-left md:w-[52%]"
        style={{ backgroundImage: `url(${IMAGES.ciencia})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2a] via-[#0f1c2a]/75 to-[#0f1c2a]/25 md:via-[#0f1c2a] md:via-45% md:to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col px-6 pb-28 pt-44 md:px-8 md:pb-32 md:pt-48 lg:px-10 lg:pb-40 lg:pt-56 xl:px-12">
        <SectionIndex n={CIENCIA.index} />
        <TwoToneHeading
          white={CIENCIA.white}
          accent={CIENCIA.accent}
          className="mt-5 text-[clamp(2.8rem,6.9vw,7.5rem)] leading-[0.95] md:mt-6"
        />
        <p className="mt-5 max-w-md text-[clamp(1.3rem,1.95vw,1.9rem)] font-light leading-[1.5] text-white/95 md:mt-8 md:max-w-lg md:leading-[1.3]">
          {CIENCIA.text.map((l) => (<span key={l} className="block">{l}</span>))}
        </p>
      </div>
    </section>
  );
}
