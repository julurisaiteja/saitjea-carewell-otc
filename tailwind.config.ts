import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#ffffff",
          fg: "#0b1f33",
          muted: "#5a7186",
          primary: "#0b5fff",
          accent: "#0b5fff",
          surface: "#ffffff",
          border: "#d7e2ec",
          hero: "#0b1f33",
        },
      },
      fontFamily: {
        display: ["IBM Plex Sans", "Helvetica", "Arial", "sans-serif"],
        body: ["IBM Plex Sans", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        rise: "rise 0.4s linear both",
        "rise-delay": "rise 0.4s linear 0.08s both",
      },
    },
  },
  plugins: [],
};
export default config;
