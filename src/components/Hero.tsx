import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#06141b]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-[#031017]/45" />

      {/* Left dark gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#031017]/95
          via-[#031017]/70
          to-[#031017]/10
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-[#06141b]
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1440px]
          items-center
          px-6
          pb-20
          pt-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="max-w-[650px]">

          {/* Section Number */}
          <div
            className="
              mb-5
              text-[10px]
              font-medium
              tracking-[0.5px]
              text-white/80
              sm:text-[11px]
            "
          >
            [01]
          </div>

          {/* Main Heading */}
          <h1
            className="
              max-w-[700px]
              text-[46px]
              font-semibold
              uppercase
              leading-[0.91]
              tracking-[-2.5px]
              text-white

              sm:text-[55px]

              md:text-[65px]

              lg:text-[74px]

              xl:text-[78px]
            "
          >
            <span className="block">
              CANNABIS
            </span>

            <span className="block">
              MEDICINAL,
            </span>

            <span className="block text-[#9fcafa]">
              CIENCIA,
            </span>

            <span className="block text-[#9fcafa]">
              SALUD E
            </span>

            <span className="block text-[#9fcafa]">
              INNOVACIÓN
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-[420px]
              text-[12px]
              leading-[1.55]
              text-white/75

              sm:text-[13px]

              md:text-[14px]
            "
          >
            Desarrollamos conocimiento y productos para un futuro
            más saludable, conectando la ciencia con el bienestar
            de las personas.
          </p>

          {/* CTA */}
          <a
            href="/nosotros"
            className="
              mt-7
              inline-flex
              h-[43px]
              items-center
              gap-4
              rounded-full
              border
              border-white/75
              px-5
              text-[9px]
              font-medium
              tracking-[1px]
              text-white
              transition-all
              duration-300

              hover:bg-white
              hover:text-[#06141b]
            "
          >
            <span>
              CONOCER UNGE
            </span>

            <ArrowRight
              size={15}
              strokeWidth={1.5}
            />
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-8
          right-7
          z-20
          hidden
          items-center
          gap-3
          text-white/75
          md:flex
        "
      >
        <span
          className="
            text-[8px]
            tracking-[0.5px]
          "
        >
          SCROLL
        </span>

        <ArrowDown
          size={14}
          strokeWidth={1.2}
        />
      </div>

    </section>
  );
}