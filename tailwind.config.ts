import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C4162A",
          dark: "#0B0F19",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.08)",
        glass: "0 30px 80px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "28px",
      },
    },
  },
  plugins: [],
}

export default config
