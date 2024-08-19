import type { Config } from "tailwindcss"
const {nextui} = require("@nextui-org/react");

const config = {
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
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse var(--duration) ease-out infinite",
      },
      boxShadow: {
        'custom': 'rgba(99, 99, 99, 0.15) 0px 2px 4px 0px',
      },
      colors: {
        bgGray: '#f2f2f2',
        textGray: '#4c555f',
        mainPurple: '#643afd',
        accentPurple: '#CCCCFF',
        greenAccent: '#4ade80',
      },
      screens: {
        'sm': '640px',
        'md': '820px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()], 
} satisfies Config

export default config