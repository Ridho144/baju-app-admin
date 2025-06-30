/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          emas: '#d4af37',
          'emas-gelap': '#b28d2b',
        },
      },
    },
  plugins: [require("daisyui")], 
  }
  