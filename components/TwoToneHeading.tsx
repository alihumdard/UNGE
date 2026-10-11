export default function TwoToneHeading({
  white, accent, className = "",
}: { white: string[]; accent: string[]; className?: string }) {
  return (
    <h2 className={`h-display ${className}`}>
      {white.map((l) => (<span key={l} className="block text-white">{l}</span>))}
      {accent.map((l) => (<span key={l} className="block text-accent">{l}</span>))}
    </h2>
  );
}
