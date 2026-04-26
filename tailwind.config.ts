import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAFAF7",
          dark: "#0A0A0A",
        },
        ink: {
          DEFAULT: "#171717",
          dark: "#E5E5E5",
        },
        accent: {
          DEFAULT: "#D97757",
          dark: "#E89878",
        },
        muted: {
          DEFAULT: "#4B4B4B",
          dark: "#A3A3A3",
        },
        line: {
          DEFAULT: "#D4D4D0",
          dark: "#1F1F1F",
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
