import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#1B2B4B",
        brand: "#F26522",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        scrollPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        scrollPulse: "scrollPulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
