/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: "#F5F0EC",
        beige: "#DCC1AB",
        green: "#1B5B31",
        black: "#111111",
      },
    },
  },
  plugins: [],
};
