"use client";
import { useState } from "react";
import SectionIndex from "./SectionIndex";
import TwoToneHeading from "./TwoToneHeading";
import { CONTACTO } from "@/data/content";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSending(true);
    const formData = new FormData(form);
    const subject = encodeURIComponent(`Contacto UNGE - ${formData.get("motivo")}`);
    const body = encodeURIComponent(
      `Nombre y apellido: ${formData.get("nombre")}\n` +
      `Organización: ${formData.get("organizacion") || "-"}\n` +
      `Correo electrónico: ${formData.get("email")}\n` +
      `Teléfono: ${formData.get("telefono") || "-"}\n` +
      `Motivo de contacto: ${formData.get("motivo")}\n\n` +
      `Mensaje:\n${formData.get("mensaje")}`
    );
    window.location.href = `mailto:${CONTACTO.email}?subject=${subject}&body=${body}`;
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="bg-[#0d1722] py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">
        <SectionIndex n={CONTACTO.index} />
        <TwoToneHeading
          white={CONTACTO.white}
          accent={CONTACTO.accent}
          className="mt-6 text-[clamp(2rem,3.8vw,3.6rem)] leading-[0.98]"
        />
        <p className="mt-5 max-w-lg text-[clamp(1.15rem,1.7vw,1.65rem)] font-light leading-[1.5] text-white/95">
          {CONTACTO.subtitle}
        </p>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 md:mt-20 md:grid-cols-[1.4fr_1fr] md:gap-10 lg:gap-14">
          {/* Form */}
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <p className="max-w-sm text-[1.05rem] font-light leading-[1.6] text-white/90">
                  {CONTACTO.confirmation}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.8rem] font-light text-white/60">Nombre y apellido *</span>
                    <input name="nombre" type="text" required className="rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white outline-none transition placeholder:text-white/30 focus:border-accent focus:bg-white/[0.07]" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.8rem] font-light text-white/60">Organización (opcional)</span>
                    <input name="organizacion" type="text" className="rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white outline-none transition placeholder:text-white/30 focus:border-accent focus:bg-white/[0.07]" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.8rem] font-light text-white/60">Correo electrónico *</span>
                    <input name="email" type="email" required className="rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white outline-none transition placeholder:text-white/30 focus:border-accent focus:bg-white/[0.07]" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.8rem] font-light text-white/60">Teléfono (opcional)</span>
                    <input name="telefono" type="tel" className="rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white outline-none transition placeholder:text-white/30 focus:border-accent focus:bg-white/[0.07]" />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-[0.8rem] font-light text-white/60">Motivo de contacto *</span>
                  <select name="motivo" required defaultValue="" className="rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white outline-none transition focus:border-accent focus:bg-white/[0.07] [&>option]:bg-[#0d1722]">
                    <option value="" disabled>Seleccionar...</option>
                    {CONTACTO.motivos.map((m) => (<option key={m} value={m}>{m}</option>))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[0.8rem] font-light text-white/60">Mensaje *</span>
                  <textarea name="mensaje" required rows={4} className="resize-none rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white outline-none transition placeholder:text-white/30 focus:border-accent focus:bg-white/[0.07]" />
                </label>

                <label className="flex cursor-pointer items-center gap-3 text-[0.8rem] font-light leading-[1.4] text-white/70">
                  <input name="privacidad" type="checkbox" required className="h-4 w-4 shrink-0 cursor-pointer rounded-sm border-white/40 bg-transparent accent-white" />
                  <span>Acepto la política de privacidad de UNGE.</span>
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="group mt-2 inline-flex w-fit items-center gap-6 rounded-full border border-white/70 bg-white/5 px-6 py-3.5 text-[0.8rem] font-light tracking-wide text-white transition hover:bg-white/10 disabled:opacity-60"
                >
                  <span>ENVIAR MENSAJE</span>
                  <svg width="48" height="10" viewBox="0 0 48 10" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden>
                    <path d="M0 5H46M42 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div className="flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="font-heading text-[1.1rem] font-bold uppercase leading-tight text-white">
              Contacto directo
            </h3>
            <p className="mt-3 text-[0.85rem] font-light leading-[1.5] text-white/60">
              También podés escribirnos directamente por correo o WhatsApp institucional.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M3.5 6.5L12 13L20.5 6.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[0.7rem] font-light tracking-[0.15em] text-white/40 uppercase">Correo institucional</span>
                <a href={`mailto:${CONTACTO.email}`} className="mt-1 block truncate text-[0.95rem] font-light text-white transition hover:text-accent">
                  {CONTACTO.email}
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                  <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.692 6.476L2.667 29.333l7.025-1.843a13.26 13.26 0 0 0 6.312 1.61h.006c7.363 0 13.333-5.97 13.333-13.333s-5.976-13.1-13.339-13.1Zm0 24.399h-.005a11.03 11.03 0 0 1-5.618-1.538l-.403-.24-4.169 1.093 1.113-4.065-.263-.417a11.02 11.02 0 0 1-1.69-5.899c0-6.097 4.962-11.059 11.065-11.059 2.956 0 5.735 1.152 7.826 3.245a10.985 10.985 0 0 1 3.238 7.82c0 6.097-4.962 11.06-11.094 11.06Zm6.067-8.284c-.332-.166-1.966-.97-2.271-1.081-.305-.111-.527-.166-.748.167-.222.332-.86 1.08-1.054 1.302-.194.222-.389.25-.721.083-.332-.167-1.403-.517-2.671-1.648-.987-.88-1.654-1.967-1.848-2.3-.194-.332-.02-.511.146-.677.15-.15.332-.389.499-.583.166-.195.221-.333.332-.556.11-.222.055-.416-.028-.583-.083-.166-.748-1.803-1.025-2.47-.27-.65-.545-.562-.748-.572-.194-.009-.416-.011-.638-.011s-.583.083-.888.416c-.305.332-1.164 1.137-1.164 2.773s1.192 3.218 1.358 3.44c.167.222 2.346 3.582 5.685 5.023.794.343 1.414.548 1.898.701.797.254 1.523.218 2.097.132.64-.096 1.966-.804 2.244-1.581.277-.777.277-1.443.194-1.581-.083-.139-.305-.222-.637-.389Z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[0.7rem] font-light tracking-[0.15em] text-white/40 uppercase">WhatsApp institucional</span>
                <a
                  href={CONTACTO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[0.95rem] font-light text-white transition hover:text-accent"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
