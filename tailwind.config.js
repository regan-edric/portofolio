/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#0e7490",
        dark: "#0f172b",
        warnaBorder: "#E4405F"
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}