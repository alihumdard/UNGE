"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { NAV } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll, and let Escape close the menu
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Sticky top bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg backdrop-blur-md" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(13, 23, 34, 0.9)" : "transparent" }}
      >
        <div
          className={`mx-auto flex max-w-[1800px] items-center px-6 py-5 transition-all duration-300 md:px-8 md:py-7 lg:px-10 xl:px-12 ${
            scrolled ? "lg:py-4" : "lg:py-9"
          }`}
        >
          <Logo scrolled={scrolled} />

          {/* Desktop nav */}
          <nav className="mt-1.5 hidden items-center gap-8 lg:ml-20 lg:flex lg:gap-9 xl:ml-28 xl:gap-10">
            <ul className="flex items-center gap-8 text-[1.05rem] font-light tracking-[0.04em] text-white lg:gap-9 xl:gap-10">
              {NAV.map((i) => (
                <li key={i.label}>
                  <a href={i.href} className="transition hover:text-accent">{i.label}</a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="group ml-4 inline-flex items-center gap-5 rounded-full border border-white/70 px-7 py-[1.15rem] text-[1rem] font-light leading-none tracking-[0.06em] text-white transition hover:bg-white/10 lg:ml-8 xl:ml-10"
            >
              CONTACTO
              <svg width="62" height="10" viewBox="0 0 62 10" fill="none" className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden>
                <path d="M0 5H60M56 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </nav>

          {/* Hamburger button — always right */}
          {/* 44px touch target, with the bars centred inside it */}
          <button
            className="relative -mr-1 ml-auto flex h-12 w-12 items-center justify-center lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="flex w-8 flex-col gap-[7px]">
              <span className={`block h-0.5 w-8 origin-center rounded-full bg-white transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-8 rounded-full bg-white transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`block h-0.5 w-8 origin-center rounded-full bg-white transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ backgroundColor: "#0d1722" }}
        aria-hidden={!open}
      >
        <div className="px-6 pb-16 pt-28">
          <ul className="flex flex-col text-[1.15rem] font-light tracking-[0.12em] text-white">
            {NAV.map((i) => (
              <li key={i.label}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block border-b border-white/10 py-5 transition hover:text-accent"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/70 px-7 py-4 text-[0.85rem] font-light tracking-[0.08em] text-white transition hover:bg-white/10"
          >
            <span>CONTACTO</span>
            <svg width="34" height="10" viewBox="0 0 48 10" fill="none" className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden>
              <path d="M0 5H46M42 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
