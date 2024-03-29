/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        'main-ultra-dark': '#15191e',
        'main-dark': '#191e24',
        main: '#1d232a',
      },

    },
  },
  plugins: [],
};

