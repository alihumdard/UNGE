import type { Metadata } from "next";
import Link from "next/link";
import { INSTITUCIONAL, CONTACTO } from "@/data/content";

export const metadata: Metadata = {
  title: "Política de privacidad | UNGE",
  description:
    "Cómo se tratan los datos enviados a través del formulario de contacto de UNGE.",
};

export default function PoliticaPrivacidad() {
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
          Política de privacidad
        </h1>

        <div className="mt-12 max-w-[62ch] space-y-6 md:mt-14">
          <p className="text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.8] tracking-[0.01em] text-white/70">
            {INSTITUCIONAL.razonSocial} ({INSTITUCIONAL.cuit}) recibe los datos
            que las personas envían voluntariamente a través del formulario de
            contacto de este sitio.
          </p>

          <p className="text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.8] tracking-[0.01em] text-white/70">
            Los campos del formulario son: nombre y apellido, organización
            (opcional), correo electrónico, teléfono (opcional), motivo de
            contacto y mensaje. Esos datos se envían a {CONTACTO.email} y se
            utilizan únicamente para responder la consulta recibida.
          </p>

          <p className="text-[clamp(0.98rem,1.08vw,1.15rem)] font-light leading-[1.8] tracking-[0.01em] text-white/70">
            Para consultar, rectificar o solicitar la supresión de los datos
            enviados, se puede escribir a{" "}
            <a
              href={`mailto:${CONTACTO.email}`}
              className="text-white/85 underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
            >
              {CONTACTO.email}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
