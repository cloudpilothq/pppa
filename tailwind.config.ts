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
        blue: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bae2ff',
          300: '#8ccfff',
          400: '#56b3ff',
          500: '#2b91ff',
          600: '#208dce', // Primary Blue: #208dce
          700: '#146ba8',
          800: '#135583',
          900: '#15486d',
          950: '#0e2d48',
        },
        amber: {
          50: '#fbf9f4',
          100: '#f5f0e3',
          200: '#ebdcc2',
          300: '#e1c296',
          400: '#d4c65e', // Accent Gold: #d4c65e
          500: '#cca048',
          600: '#b07f35',
          700: '#92612d',
          800: '#754f2a',
          900: '#5f4125',
          950: '#342111',
        },
        teal: {
          50: '#f2fafb',
          100: '#e1f5f7',
          200: '#c6ebf2',
          300: '#9cdbe7',
          400: '#63a7b9', // Accent Teal: #63a7b9
          500: '#46a5be',
          600: '#38859e',
          700: '#316b80',
          800: '#2e5869',
          900: '#2a4b59',
          950: '#19303a',
        },
        red: {
          50: '#fcf3f1',
          100: '#f8e4df',
          200: '#f3cdc3',
          300: '#ebada1',
          400: '#e08373',
          500: '#d45e4a',
          600: '#b54625', // Alert Rust: #b54625
          700: '#a3331b',
          800: '#872c19',
          900: '#71291b',
          950: '#3c1109',
        },
        primary: {
          DEFAULT: "#0f172a", // Slate 900
          foreground: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#208dce",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#d4c65e",
          foreground: "#1f2937",
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
