import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import { PRODUCTOS } from "@/data/content";

export default function Productos() {
  return (
    <section id="productos" className="bg-[#0f1c2a]">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44 xl:px-12">
        <SectionIndex n={PRODUCTOS.index} />

        <div className="mt-5 grid grid-cols-1 gap-8 md:mt-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-14">
          <TwoToneHeading
            white={PRODUCTOS.white}
            accent={PRODUCTOS.accent}
            className="text-[clamp(2rem,4.2vw,4.8rem)] leading-[0.98]"
          />

          <p className="max-w-[46ch] text-[clamp(1.1rem,1.3vw,1.45rem)] font-light leading-[1.45] tracking-[0.01em] text-white lg:pb-3">
            {PRODUCTOS.subtitle}
          </p>
        </div>

        {/* Tres líneas, listadas. Sin precios ni oferta de venta. */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/15 pt-10 md:mt-14 md:grid-cols-3 md:gap-10 md:pt-12">
          {PRODUCTOS.items.map((it) => (
            <div key={it.n}>
              <span className="text-[0.8rem] font-light leading-none tracking-[0.14em] text-white/45">
                {it.n}
              </span>

              <h3 className="mt-4 font-heading text-[clamp(1.05rem,1.3vw,1.45rem)] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
                {it.title}
              </h3>

              {it.nota ? (
                <p className="mt-2 text-[0.85rem] font-light leading-[1.5] tracking-[0.01em] text-white/45">
                  {it.nota}
                </p>
              ) : null}

              <ul className="mt-4 flex flex-col gap-2.5">
                {it.lista.map((line) => (
                  <li
                    key={line}
                    className="grid grid-cols-[auto_1fr] gap-3 text-[clamp(0.92rem,0.98vw,1.05rem)] font-light leading-[1.65] tracking-[0.01em] text-white/65"
                  >
                    <span className="mt-[0.6em] h-px w-3 shrink-0 bg-white/40" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
