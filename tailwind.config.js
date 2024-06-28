/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter',  'sans-serif']
      },
      colors: {
        primaryColor: "#000D7E"
      }
    },
  },
  plugins: [],
}

