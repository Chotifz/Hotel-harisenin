/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
  './public/**/*.{html,js}',
],

  theme: {
    extend: {
      fontFamily: {
        'logo': ["MonteCarlo", "cursive", "sans-serif"],
      
      },
      backgroundImage: {
        'hero-pattern': "url(/public/img/bedroom-002.jpg)",
        'hero-dua' : "url(/public/img/window-003.jpg)",
      }
    },
  },
  plugins: [require("daisyui")],
}

