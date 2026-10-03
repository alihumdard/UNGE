import {
  ArrowRight,
  FlaskConical,
  Leaf,
  Users,
} from "lucide-react";

const scienceItems = [
  {
    icon: FlaskConical,
    title: "INVESTIGACIÓN",
    text: "Rigurosidad científica en cada etapa.",
  },
  {
    icon: Leaf,
    title: "CONOCIMIENTO",
    text: "Del laboratorio a la vida real.",
  },
  {
    icon: Users,
    title: "BIENESTAR",
    text: "Soluciones para las personas.",
  },
];

export default function ScienceSection() {
  return (
    <section className="w-full overflow-hidden border-t border-white/10 bg-[#061821] text-white">
      <div className="grid min-h-[285px] grid-cols-1 md:grid-cols-[39%_31%_30%]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-7 py-8 sm:px-9 lg:px-10">
          <h2 className="text-[34px] font-semibold uppercase leading-[0.9] tracking-[-1.5px] sm:text-[38px] lg:text-[42px]">
            NUESTRA
            <br />
            <span className="text-[#9fcafa]">
              CIENCIA
            </span>
          </h2>

          <p className="mt-4 max-w-[300px] text-[9px] leading-[1.45] text-white/75 sm:text-[10px] lg:text-[11px]">
            Investigación aplicada para generar evidencia y
            soluciones que mejoren la vida de las personas.
          </p>

          <a
            href="/ciencia"
            className="mt-4 inline-flex h-[34px] w-fit items-center gap-3 rounded-full border border-white/70 px-4 text-[7px] font-medium tracking-[0.8px] transition-all duration-300 hover:bg-white hover:text-[#061821]"
          >
            EXPLORAR CIENCIA

            <ArrowRight size={12} strokeWidth={1.4} />
          </a>
        </div>

        {/* IMAGE */}
        <div className="relative min-h-[285px] overflow-hidden">
          <img
            src="/images/science.jpg"
            alt="Investigación científica"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* RIGHT COLUMN — EXACT 30% */}
        <div className="flex flex-col bg-[#061821]">
          {scienceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  flex
                  flex-1
                  items-center
                  gap-4
                  border-l
                  border-white/10
                  px-6
                  py-3

                  lg:px-7

                  ${
                    index !== scienceItems.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                `}
              >
                <div className="flex w-[25px] shrink-0 justify-center">
                  <Icon
                    size={22}
                    strokeWidth={1.2}
                    className="text-[#9fcafa]"
                  />
                </div>

                <div>
                  <h3 className="text-[8px] font-semibold tracking-[0.3px] sm:text-[9px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-[145px] text-[7px] leading-[1.4] text-white/50 sm:text-[8px]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}