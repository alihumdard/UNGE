export default function TwoToneHeading({
  white, accent, className = "", inline = false,
}: { white: string[]; accent: string[]; className?: string; inline?: boolean }) {
  // inline keeps the two tones on one line (with a space between them);
  // the default stacks each fragment on its own line.
  if (inline) {
    return (
      <h2 className={`h-display ${className}`}>
        <span className="text-white">{white.join(" ")}</span>{" "}
        <span className="text-accent">{accent.join(" ")}</span>
      </h2>
    );
  }

  return (
    <h2 className={`h-display ${className}`}>
      {white.map((l) => (<span key={l} className="block text-white">{l}</span>))}
      {accent.map((l) => (<span key={l} className="block text-accent">{l}</span>))}
    </h2>
  );
}
