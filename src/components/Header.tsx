"use client";

import { ArrowRight, Menu } from "lucide-react";

const navItems = [
  {
    label: "CIENCIA",
    href: "/ciencia",
  },
  {
    label: "PRODUCTOS",
    href: "/productos",
  },
  {
    label: "INNOVACIÓN",
    href: "/innovacion",
  },
  {
    label: "NOSOTROS",
    href: "/nosotros",
  },
  {
    label: "CONTACTO",
    href: "/contacto",
  },
];

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-white"
          aria-label="UNGE Home"
        >
          <span className="mr-[5px] text-[26px] font-light leading-none">
            X
          </span>

          <span className="text-[22px] font-medium tracking-[5px]">
            UNGE
          </span>

          <span className="ml-[2px] self-start text-[7px]">
            ®
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-[9px]
                font-medium
                tracking-[0.3px]
                text-white/80
                transition-colors
                duration-300
                hover:text-[#9fcafa]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-5">

          {/* Contact */}
          <a
            href="/contacto"
            className="
              hidden
              h-[42px]
              items-center
              gap-3
              rounded-full
              border
              border-white/70
              px-5
              text-[9px]
              font-medium
              tracking-[1px]
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#06141b]
              sm:flex
            "
          >
            <span>CONTACTO</span>

            <ArrowRight
              size={14}
              strokeWidth={1.5}
            />
          </a>

          {/* Languages */}
          <div className="hidden items-center gap-2 text-[9px] md:flex">
            <span className="text-white">
              ES
            </span>

            <span className="text-white/30">
              |
            </span>

            <span className="text-white/45">
              EN
            </span>
          </div>

          {/* Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Menu
              size={20}
              strokeWidth={1.3}
            />
          </button>

        </div>
      </div>
    </header>
  );
}