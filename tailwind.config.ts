import type { Config } from "tailwindcss";

// Brand palette extracted from the Dog Days Tattoo logo (vintage Americana).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: { DEFAULT: "#9DA17E", dark: "#5E624A", deep: "#7E8262" },
        gold: { DEFAULT: "#E0A53C", deep: "#C9842B" },
        ink: "#141414",
        cream: { DEFAULT: "#F4EEDF", 2: "#E9DEC6", dim: "#B6AD95" },
      },
      fontFamily: {
        display: ["var(--font-alfa)", "serif"],
        western: ["var(--font-rye)", "serif"],
        sans: ["var(--font-franklin)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        run: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-2px)" } },
        kenburns: { to: { transform: "scale(1.14)" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        run: "run 4s ease-in-out infinite",
        kenburns: "kenburns 20s ease-in-out infinite alternate",
        "fade-up": "fade-up .7s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
