/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C36DC",
        background_primary: "#F1F4FA",
        font_primary: "#809FB8"
      }
    },
  },
  plugins: [],
}
