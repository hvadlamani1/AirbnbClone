/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Poppings', 'sans-serif'],
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '70/30': '70% 28%',
  },
  plugins: [],
};
