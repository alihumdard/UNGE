export default function SectionIndex({ n }: { n: string }) {
  return (
    <span className="relative inline-block px-2 py-0.5 text-[0.95rem] font-light text-white">
      <span className="absolute left-0 top-0 h-full w-1.5 border-b border-l border-t border-white/80" />
      {n}
      <span className="absolute  top-0 h-full w-1.5 border-b border-r border-t border-white/80" />
    </span>
  );
}
