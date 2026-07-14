import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        card: "rgba(255, 255, 255, 0.05)",
        "card-foreground": "#ffffff",
        popover: "#050505",
        "popover-foreground": "#ffffff",
        primary: "#d4af37",
        "primary-foreground": "#050505",
        secondary: "#10b981",
        "secondary-foreground": "#050505",
        muted: "#1a1a1a",
        "muted-foreground": "#a0a0a0",
        accent: "#60a5fa",
        "accent-foreground": "#050505",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.1)",
        ring: "#d4af37",
        chart: {
          "1": "#d4af37",
          "2": "#10b981",
          "3": "#60a5fa",
          "4": "#f59e0b",
          "5": "#ec4899",
        },
        sidebar: "#050505",
        "sidebar-foreground": "#ffffff",
        "sidebar-primary": "#d4af37",
        "sidebar-primary-foreground": "#050505",
        "sidebar-accent": "#1a1a1a",
        "sidebar-accent-foreground": "#ffffff",
        "sidebar-border": "rgba(255, 255, 255, 0.1)",
        "sidebar-ring": "#d4af37",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "premium": "0 0 40px rgba(212, 175, 55, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        "aurora": "aurora 60s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          "33%": {
            backgroundPosition: "30% 50%, 70% 50%",
          },
          "66%": {
            backgroundPosition: "70% 50%, 30% 50%",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
