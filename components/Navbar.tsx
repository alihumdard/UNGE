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

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Sticky top bar */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0d1722]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10 lg:px-12">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex lg:gap-9">
            <ul className="flex items-center gap-8 text-[0.85rem] font-light tracking-wide text-white">
              {NAV.map((i) => (
                <li key={i.label}>
                  <a href={i.href} className="transition hover:text-accent">{i.label}</a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-5 rounded-full border border-white/70 px-6 py-3.5 text-[0.85rem] font-light tracking-wide text-white transition hover:bg-white/10"
            >
              CONTACTO
              <svg width="48" height="10" viewBox="0 0 48 10" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden>
                <path d="M0 5H46M42 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </nav>

          {/* Hamburger button — always right */}
          <button
            className="ml-auto flex flex-col gap-[5px] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#0d1722] transition-all duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-24 pb-12">
          <ul className="flex flex-col gap-7 text-[1.1rem] font-light tracking-widest text-white">
            {NAV.map((i) => (
              <li key={i.label}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 pb-5 transition hover:text-accent"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-white/70 px-6 py-3 text-[0.85rem] tracking-wide text-white transition hover:bg-white/10"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </>
  );
}
