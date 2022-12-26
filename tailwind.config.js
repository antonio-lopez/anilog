/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        raisinBlack: '#242629',
        eerieBlack: '#16161A',
        mediumSlateBlue: '#7F5AF0',
        tealBlue: '#257892',
        mediumSeaGreen: '#2CB67D',
        gainsboro: '#D9D9D9',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
