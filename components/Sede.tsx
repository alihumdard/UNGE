import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import { SEDE } from "@/data/content";
import { IMAGES } from "@/lib/images";

export default function Sede() {
  return (
    <section id="sede" className="bg-[#0d1722]">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44 xl:px-12">
        <SectionIndex n={SEDE.index} />

        <div className="mt-6 grid grid-cols-1 gap-10 md:mt-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <TwoToneHeading
              white={SEDE.white}
              accent={SEDE.accent}
              className="text-[clamp(2rem,4.2vw,4.8rem)] leading-[0.98]"
            />

            <p className="mt-5 max-w-[46ch] text-[clamp(1.1rem,1.3vw,1.45rem)] font-light leading-[1.45] tracking-[0.01em] text-white">
              {SEDE.subtitle}
            </p>
          </div>

          <div
            className="h-[240px] w-full max-w-[720px] justify-self-end rounded-2xl bg-cover bg-no-repeat sm:h-[300px] lg:h-[360px] xl:h-[400px]"
            style={{
              backgroundImage: `url(${IMAGES.sede})`,
              backgroundPosition: "center 65%",
            }}
            role="img"
            aria-label="Sede social de UNGE en un evento comunitario"
          />
        </div>

        {/* Espacio social y comunitario */}
        <div className="mt-12 border-t border-white/15 pt-10 md:mt-14 md:pt-12">
          <h3 className="font-heading text-[clamp(1.2rem,1.7vw,1.9rem)] font-semibold uppercase leading-[1.15] tracking-[0.01em] text-white">
            {SEDE.social.title}
          </h3>

          <p className="mt-5 max-w-[70ch] text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.75] tracking-[0.01em] text-white/60">
            {SEDE.social.text}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {SEDE.social.items.map((it) => (
              <div key={it.n}>
                <span className="text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/45">
                  {it.n}
                </span>
                <h4 className="mt-4 font-heading text-[clamp(1rem,1.2vw,1.3rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
                  {it.title}
                </h4>
                <p className="mt-3 max-w-[44ch] text-[clamp(0.92rem,0.98vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-white/65">
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Área de salud y dispensario */}
        <div className="mt-14 border-t border-white/15 pt-10 md:mt-16 md:pt-12">
          <h3 className="font-heading text-[clamp(1.2rem,1.7vw,1.9rem)] font-semibold uppercase leading-[1.15] tracking-[0.01em] text-white">
            {SEDE.salud.title}
          </h3>

          <p className="mt-3 text-[clamp(1rem,1.2vw,1.3rem)] font-light leading-[1.45] tracking-[0.01em] text-white/85">
            {SEDE.salud.subtitle}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-14 gap-y-5 lg:grid-cols-2 xl:gap-x-16">
            <p className="text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.75] tracking-[0.01em] text-white/60">
              {SEDE.salud.text}
            </p>
            <p className="text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.75] tracking-[0.01em] text-white/60">
              {SEDE.salud.equipo}
            </p>
          </div>

          <p className="mt-12 text-[0.75rem] font-light uppercase leading-none tracking-[0.16em] text-white/40 md:mt-14">
            {SEDE.salud.ejesTitle}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {SEDE.salud.ejes.map((it) => (
              <div key={it.n}>
                <span className="text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/45">
                  {it.n}
                </span>
                <h4 className="mt-4 font-heading text-[clamp(1rem,1.2vw,1.3rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
                  {it.title}
                </h4>
                <p className="mt-3 max-w-[44ch] text-[clamp(0.92rem,0.98vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-white/65">
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
