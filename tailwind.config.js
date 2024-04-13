/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts,svg}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-seporator": "rgb(38, 38, 38)",
        "light-seporator": "rgb(219, 219, 219)",
      },
      screens: {
        "lg+": "1263px",
        "lg-": "1160px"
      }

    },
  },
  plugins: [],
}
