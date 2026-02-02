import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" }, 
        },
        "star-shine": {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 5px rgba(255,255,255,0.7))",
            brightness: "1"
          },
          "50%": { 
            filter: "drop-shadow(0 0 15px rgba(255,255,255,1))",
            brightness: "1.3"
          },
        },
        "border-glow": {
          "0%, 100%": { "border-color": "rgba(255, 255, 255, 0.1)" },
          "50%": { "border-color": "rgba(255, 255, 255, 0.4)" },
        },
      },
      // No seu tailwind.config.ts, altere apenas a linha da animação:
animation: {
  "float": "float 6s ease-in-out infinite",
  "soft-pulse": "soft-pulse 1.5s ease-in-out infinite", // Velocidade aumentada aqui
  "star-shine": "star-shine 3s ease-in-out infinite",
  "border-glow": "border-glow 4s ease-in-out infinite",
},
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;