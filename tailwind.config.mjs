import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      serif: ["Gabarito Variable", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: ["0.875rem", "1.125rem"],
      sm: ["1rem", "1.25rem"],
      base: ["1.125rem", "1.625rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "1.813rem"],
      "2xl": ["1.75rem", "2.125rem"],
      "3xl": ["2rem", "2.375rem"],
      "4xl": ["2.25rem", "2.688rem"],
      "5xl": ["2.5rem", "3rem"],
      "6xl": ["3rem", "3.625rem"],
      "7xl": ["3.75rem", "1"],
      "8xl": ["4.5rem", "4.875rem"],
      "9xl": ["6rem", "6.625rem"],
    },
    extend: {
      letterSpacing: {
        tightest: "-2px",
        tighter: "-1px",
        tight: "-0.25px",
      },
      colors: {
        primary: "#2563EB",
        neutral: "#94A3B8",
        white: "#E2E8F0",
        black: "#0E141B",
      },
      keyframes: {
        slideIn: {
          "10%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 600ms ease both",
      },
    },
  },
  plugins: [],
};
