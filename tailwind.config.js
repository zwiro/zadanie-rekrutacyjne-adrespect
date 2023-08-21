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
      letterSpacing: {
        1: "-0.00875rem",
        2: "-0.0075rem",
        3: "-0.01rem",
        4: "-0.02rem",
        5: "-0.0875rem",
        6: "-0.09rem",
      },
      lineHeight: {
        115: "115%",
        120: "120%",
        150: "150%",
        hero: "4.375rem",
      },
      keyframes: {
        fadeIn: {
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
      },
    },
  },
  plugins: [],
};
