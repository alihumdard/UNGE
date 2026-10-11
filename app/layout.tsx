import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const heading = localFont({
  src: "../public/fonts/InterTight-700-800.woff2",
  variable: "--font-heading",
  weight: "700 800",
  display: "swap",
});

const body = localFont({
  src: "../public/fonts/Inter-300-400-500.woff2",
  variable: "--font-body",
  weight: "300 400 500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNGE | Cannabis medicinal, ciencia, salud e innovación",
  description: "Investigación aplicada para generar evidencia y soluciones que mejoren la vida de las personas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
