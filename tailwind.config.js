/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F3CC4D',
        secundary: '#2E1012',
        font: '#000000'
      },
      fontFamily: {
          font: ['Indie Flower', 'cursive'],
      }
    },
  },
  plugins: [],
}

