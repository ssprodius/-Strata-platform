import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dfeeff",
          200: "#b7d9ff",
          300: "#86bdff",
          400: "#4d9aff",
          500: "#1c7aff",
          600: "#0f5ed9",
          700: "#0b47a8",
          800: "#0a3a87",
          900: "#092f6f"
        }
      }
    }
  },
  plugins: [],
};

export default config;
