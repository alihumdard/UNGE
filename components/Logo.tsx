import Image from "next/image";

export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center" aria-label="UNGE">
      <Image
        src="/images/logos/unge-primary.png"
        alt="UNGE"
        width={160}
        height={34}
        className="h-8 w-auto md:h-9"
        priority
      />
    </a>
  );
}
