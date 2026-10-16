import Image from "next/image";

export default function Logo({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center" aria-label="UNGE">
      <Image
        src="/images/logos/unge-primary.png"
        alt="UNGE"
        width={320}
        height={68}
        className={`h-9 w-auto transition-all duration-300 md:h-12 ${
          scrolled ? "lg:h-10" : "lg:h-14"
        }`}
        priority
      />
    </a>
  );
}
