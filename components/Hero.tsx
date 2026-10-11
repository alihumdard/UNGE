import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import PillButton from "./PillButton";
import { HERO } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1722]">
      <div
        className="absolute inset-0 bg-cover bg-center md:inset-y-0 md:right-20 md:left-auto md:w-[62%] md:bg-right"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      <div className="absolute inset-0 bg-[#0d1722]/40 md:bg-gradient-to-r md:from-[#0d1722] md:via-[#0d1722]/85 md:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 pt-32 md:px-10 md:pb-20 md:pt-28 lg:px-12">
        <SectionIndex n={HERO.index} />
        <TwoToneHeading
          white={HERO.white}
          accent={HERO.accent}
          className="mt-6 text-[clamp(2.4rem,5.4vw,6rem)]"
        />
        <div className="mt-10 md:mt-14"><PillButton label={HERO.cta} href="#ciencia" /></div>
      </div>
    </section>
  );
}
