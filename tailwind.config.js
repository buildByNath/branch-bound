/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace"
        ]
      },
      colors: {
        apple: {
          bg: "#000000",
          card: "rgba(255, 255, 255, 0.05)",
          cardBorder: "rgba(255, 255, 255, 0.1)",
          blue: "#0071e3",
          blueHover: "#0077ed",
          blueSubtle: "rgba(0, 113, 227, 0.12)",
          green: "#34c759",
          greenSubtle: "rgba(52, 199, 89, 0.12)",
          red: "#ff3b30",
          redSubtle: "rgba(255, 59, 48, 0.12)",
          amber: "#ff9500",
          amberSubtle: "rgba(255, 149, 0, 0.12)",
          purple: "#af52de",
          text: "#f5f5f7",
          secondary: "#86868b",
          tertiary: "#6e6e73",
          lightBg: "#fbfbfd",
          lightCard: "#ffffff",
          lightBorder: "rgba(0, 0, 0, 0.08)",
          lightText: "#1d1d1f",
          lightSecondary: "#86868b",
        }
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.02em",
      },
      boxShadow: {
        apple: "0 4px 24px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        appleHover: "0 20px 40px -8px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)",
        appleGlow: "0 0 40px -10px rgba(0, 113, 227, 0.3)",
      }
    },
  },
  plugins: [],
}
