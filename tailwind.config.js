module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    colors: {
      buttonblue: '#00ffff',
      buttondark: '#029292',
      inputbackground: '#ffefef',
    },
    extend: {},
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
}
