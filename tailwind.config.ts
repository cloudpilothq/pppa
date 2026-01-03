import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0f172a", // Slate 900
          foreground: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#059669", // Emerald 600
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#d97706", // Amber 600
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9", // Slate 100
          foreground: "#64748b", // Slate 500
        },
      },
    },
  },
  plugins: [],
};
export default config;
