import type { Metadata } from "next";
import Link from "next/link";
import { INSTITUCIONAL, CONTACTO } from "@/data/content";

export const metadata: Metadata = {
  title: "Aviso legal | UNGE",
  description: "Datos institucionales de la Asociación Civil UNGE.",
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-[#0d1722]">
      <div className="mx-auto max-w-[1800px] px-6 pb-20 pt-24 md:px-8 md:pb-24 md:pt-28 lg:px-10 xl:px-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 border-b border-white/30 pb-1.5 text-[0.72rem] font-light leading-none tracking-[0.1em] text-white/70 transition hover:gap-4 hover:border-white/60 hover:text-white"
        >
          <svg width="18" height="8" viewBox="0 0 26 8" fill="none" className="shrink-0 rotate-180" aria-hidden>
            <path d="M0 4h24M21 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span>VOLVER AL INICIO</span>
        </Link>

        <h1 className="h-display mt-10 text-[clamp(2rem,3.6vw,3.6rem)] leading-[0.98] text-white md:mt-12">
          Aviso legal
        </h1>

        <dl className="mt-12 max-w-[56ch] divide-y divide-white/10 border-y border-white/10 md:mt-14">
          <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6 sm:py-6">
            <dt className="text-[0.75rem] font-light uppercase leading-none tracking-[0.16em] text-white/40">
              Razón social
            </dt>
            <dd className="text-[clamp(0.95rem,1.05vw,1.1rem)] font-light tracking-[0.01em] text-white/80">
              {INSTITUCIONAL.razonSocial}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6 sm:py-6">
            <dt className="text-[0.75rem] font-light uppercase leading-none tracking-[0.16em] text-white/40">
              CUIT
            </dt>
            <dd className="text-[clamp(0.95rem,1.05vw,1.1rem)] font-light tracking-[0.01em] text-white/80">
              {INSTITUCIONAL.cuit}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6 sm:py-6">
            <dt className="text-[0.75rem] font-light uppercase leading-none tracking-[0.16em] text-white/40">
              Personería jurídica (I.G.J. / IPJ)
            </dt>
            <dd className="text-[clamp(0.95rem,1.05vw,1.1rem)] font-light tracking-[0.01em] text-white/80">
              {INSTITUCIONAL.personeria}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6 sm:py-6">
            <dt className="text-[0.75rem] font-light uppercase leading-none tracking-[0.16em] text-white/40">
              Correo institucional
            </dt>
            <dd>
              <a
                href={`mailto:${CONTACTO.email}`}
                className="text-[clamp(0.95rem,1.05vw,1.1rem)] font-light tracking-[0.01em] text-white/80 transition hover:text-white"
              >
                {CONTACTO.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
