import type { Config } from "tailwindcss"
const {nextui} = require("@nextui-org/react");

const config = {
  // darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  prefix: "",
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'pulse-shadow': {
          '0%, 100%': {
            boxShadow: '0 0 10px 4px rgba(59, 229, 31, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 10px 4px rgba(59, 229, 31, 1)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-shadow': 'pulse-shadow 3s infinite',
      },
      boxShadow: {
        'custom': 'rgba(99, 99, 99, 0.15) 0px 2px 4px 0px',
      },
      colors: {
        textGray: '#4c555f',
        gradiantBlue: 'rgba(16, 119, 215, 1)',
        gradiantAccentBlue: 'rgba(151, 197, 248, 1)',
        greenAccent: '#3BE51F',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()], 
} satisfies Config

export default config