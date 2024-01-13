/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-yellow': 'hsl(47, 88%, 63%)',
        'neo-white': 'hsl(0, 0%, 100%)',
        'neo-grey': 'hsl(0, 0%, 50%)',
        'neo-black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        'figtree': 'Figtree',
      },
      screens: {
        'sDT': '1024px',
      },
      boxShadow: {
        'mbShadow': '8px 8px 0px 0px',
        'sDtShadow': '16px 16px 0px 0px',
      }
    },
  },
  plugins: [],
}