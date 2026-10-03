import {
  ArrowRight,
  Bell,
  CheckCircle,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "CALIDAD",
    text: "Estándares más altos",
  },
  {
    icon: ShieldCheck,
    title: "SEGURIDAD",
    text: "Procesos controlados",
  },
  {
    icon: Bell,
    title: "TRAZABILIDAD",
    text: "Del origen al producto",
  },
  {
    icon: Leaf,
    title: "BIENESTAR",
    text: "Enfocados en las personas",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full overflow-hidden bg-[#061821] text-white">

      {/* MAIN PRODUCT AREA */}
      <div className="relative min-h-[360px] overflow-hidden sm:min-h-[390px]">

        {/* Background Image */}
        <img
          src="/images/products.jpg"
          alt="UNGE productos medicinales"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#061821]
            via-[#061821]/75
            to-[#061821]/10
          "
        />

        {/* Additional bottom darkening */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#061821]/40
            via-transparent
            to-transparent
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[360px]
            flex-col
            justify-center
            px-7
            py-12

            sm:min-h-[390px]
            sm:px-10

            lg:px-12
            xl:px-14
          "
        >
          <div className="max-w-[360px]">

            <h2
              className="
                text-[38px]
                font-semibold
                uppercase
                leading-[0.9]
                tracking-[-1.5px]

                sm:text-[43px]

                lg:text-[46px]
              "
            >
              NUESTROS
              <br />
              PRODUCTOS
            </h2>

            <p
              className="
                mt-5
                max-w-[280px]
                text-[9px]
                leading-[1.5]
                text-white/80

                sm:text-[10px]

                lg:text-[11px]
              "
            >
              Productos desarrollados con respaldo
              científico, calidad y trazabilidad para
              mejorar la vida de las personas.
            </p>

            <a
              href="/productos"
              className="
                mt-6
                inline-flex
                h-[35px]
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
              VER PRODUCTOS

              <ArrowRight
                size={12}
                strokeWidth={1.4}
              />
            </a>

          </div>
        </div>
      </div>

      {/* BENEFITS BAR */}
      <div
        className="
          grid
          grid-cols-2
          border-t
          border-white/10

          md:grid-cols-4
        "
      >
        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                flex
                min-h-[78px]
                items-center
                gap-3
                px-5
                py-4

                lg:px-7

                ${
                  index !== 3
                    ? "border-r border-white/10"
                    : ""
                }

                ${
                  index < 2
                    ? "border-b border-white/10 md:border-b-0"
                    : ""
                }
              `}
            >
              <Icon
                size={24}
                strokeWidth={1.2}
                className="shrink-0 text-[#9fcafa]"
              />

              <div>
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
                    text-[7px]
                    leading-[1.4]
                    text-white/45

                    sm:text-[8px]
                  "
                >
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}