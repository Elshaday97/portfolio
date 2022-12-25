/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#899DCE",
        secondary: "#177E89",
        teritary: "#9AE8C7",
        black: "#323232",
        gray: "#C9CBCA",
        white: "#fff",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      heading: ["League Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
