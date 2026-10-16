import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d1722",
        bgAlt: "#0f1c2a",
        accent: "#B7C6DD",
        carbon: "#1D1D1B",
        traceableBlue: "#212E4E",
        clinicalMist: "#B7C6DD",
        steelGray: "#959596",
      },
      fontFamily: {
        logo: ["Forma DJR Text", "Arial", "sans-serif"],
        heading: ["Helvetica", "Arial", "Helvetica Neue", "sans-serif"],
        body: ["Spent VF", "Forma DJR Text", "var(--font-body)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
