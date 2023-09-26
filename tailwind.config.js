/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
