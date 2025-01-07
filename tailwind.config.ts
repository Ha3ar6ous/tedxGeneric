import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tedRed: '#E62B1E',
        lightRed: '#EF233C',
        black: '#000000',
        white: '#FFFFFF',
        charcoalGrey: '#333333',
        lightGrey: '#F5F5F5',
        silver: '#BDBDBD',
      },
      animation: {
        pulse: 'pulse 3s infinite',
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
