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
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2a] via-[#0f1c2a]/92 to-[#0f1c2a]/60 md:via-[#0f1c2a] md:via-45% md:to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-16 md:px-10 md:py-0 lg:px-12">
        <SectionIndex n={CIENCIA.index} />
        <TwoToneHeading
          white={CIENCIA.white}
          accent={CIENCIA.accent}
          className="mt-6 text-[clamp(3rem,6.6vw,7.2rem)] leading-[0.92]"
        />
        <p className="mt-5 max-w-sm text-[clamp(0.95rem,1.25vw,1.25rem)] font-light leading-[1.5] text-white/95 md:mt-8 md:max-w-md md:leading-[1.2]">
          {CIENCIA.text.map((l) => (<span key={l} className="block">{l}</span>))}
        </p>
      </div>
    </section>
  );
}
