export default function SectionIndex({ n }: { n: string }) {
  return (
    <span className="relative inline-block w-fit self-start px-3 text-[1.75rem] font-light leading-none text-white md:text-[1.95rem]">
      <span className="absolute left-0 top-0 h-full w-1.5 border-b border-l border-t border-white/80" />
      {n}
      <span className="absolute right-0 top-0 h-full w-1.5 border-b border-r border-t border-white/80" />
    </span>
  );
}
