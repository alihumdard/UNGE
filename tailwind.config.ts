import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#0F1A26", bgAlt: "#141A20", accent: "#B5C3DC" },
      fontFamily: {
        heading: ["var(--font-heading)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
