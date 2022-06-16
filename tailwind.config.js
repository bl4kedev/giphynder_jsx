/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'movil': '500px',
        'tablet': '820px',
        'laptop': '1000px'
      }
    },
  },
  plugins: [],
}