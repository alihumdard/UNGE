import { ArrowRight } from "lucide-react";

const items = [
  {
    number: "01",
    title: "INVESTIGACIÓN",
    text: "Generamos evidencia a través de la ciencia.",
  },
  {
    number: "02",
    title: "TRAZABILIDAD",
    text: "Procesos transparentes y controlados.",
  },
  {
    number: "03",
    title: "IMPACTO REAL",
    text: "Soluciones que mejoran la vida de las personas.",
  },
];

export default function LaboratorySection() {
  return (
    <section className="w-full overflow-hidden border-t border-white/10 bg-[#061821] text-white">
      <div
        className="
          grid
          min-h-[300px]
          grid-cols-1

          md:grid-cols-[67%_33%]

          lg:min-h-[300px]
        "
      >
        {/* LEFT — 67% */}
        <div className="relative min-h-[300px] overflow-hidden">

          <img
            src="/images/laboratory.jpg"
            alt="Del laboratorio a la vida real"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061821]
              via-[#061821]/70
              to-[#061821]/10
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              px-7
              py-8

              sm:px-9

              lg:px-10
              xl:px-11
            "
          >
            <h2
              className="
                max-w-[430px]
                text-[34px]
                font-semibold
                uppercase
                leading-[0.9]
                tracking-[-1.5px]

                sm:text-[38px]

                lg:text-[42px]
              "
            >
              DEL LABORATORIO
              <br />
              A LA VIDA REAL
            </h2>

            <p
              className="
                mt-4
                max-w-[310px]
                text-[9px]
                leading-[1.45]
                text-white/75

                sm:text-[10px]

                lg:text-[11px]
              "
            >
              Desarrollamos conocimiento y productos que conectan
              la ciencia con el bienestar de las personas.
            </p>

            <a
              href="/nosotros"
              className="
                mt-4
                inline-flex
                h-[34px]
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-white/70
                px-4
                text-[7px]
                font-medium
                tracking-[0.8px]
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#061821]
              "
            >
              NUESTRA VISIÓN

              <ArrowRight
                size={12}
                strokeWidth={1.4}
              />
            </a>
          </div>
        </div>

        {/* RIGHT — 33% */}
        <div className="flex flex-col bg-[#061821]">

          {items.map((item, index) => (
            <div
              key={item.number}
              className={`
                flex
                flex-1
                items-center
                gap-5
                border-l
                border-white/10
                px-6
                py-3

                lg:px-7

                ${
                  index !== items.length - 1
                    ? "border-b border-white/10"
                    : ""
                }
              `}
            >
              {/* Number */}
              <div
                className="
                  w-[30px]
                  shrink-0
                  text-[18px]
                  font-light
                  leading-none
                  text-[#9fcafa]
                "
              >
                {item.number}
              </div>

              {/* Text */}
              <div className="flex-1">

                <div className="mb-1.5 h-px w-[17px] bg-white/60" />

                <h3
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.3px]

                    sm:text-[9px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[170px]
                    text-[7px]
                    leading-[1.4]
                    text-white/50

                    sm:text-[8px]
                  "
                >
                  {item.text}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}