import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNGE | Cannabis medicinal, ciencia, salud e innovación",
  description: "Investigación aplicada para generar evidencia y soluciones que mejoren la vida de las personas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
