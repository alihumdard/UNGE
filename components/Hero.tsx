import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { HERO } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1722]">
      <div
        className="absolute inset-0 bg-cover bg-[80%_center] md:bg-right"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      <div className="absolute inset-0 bg-[#0d1722]/40 md:bg-gradient-to-r md:from-[#0d1722] md:via-[#0d1722]/70 md:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 pb-14 pt-32 md:px-8 md:pb-16 md:pt-36 lg:px-10 lg:pt-40 xl:px-12">
        <SectionIndex n={HERO.index} />
        <TwoToneHeading
          white={HERO.white}
          accent={HERO.accent}
          className="mt-5 text-[clamp(2.35rem,5.85vw,6.35rem)] leading-[0.95] md:mt-6"
        />
        <div className="mt-8 md:mt-10"><PillButton label={HERO.cta} href="#ciencia" /></div>
      </div>
    </section>
  );
}
