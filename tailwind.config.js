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
        slideFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
        fadeInDelay: "fadeIn 1s 1.2s forwards",
        fadeInDelay2: "fadeIn 1s 1.4s forwards",
        fadeInDelay3: "fadeIn 1s 1.6s forwards",
        fadeInDelay4: "fadeIn 1s 1.8s forwards",
        fadeInDelay5: "fadeIn 1s 2s forwards",
        fadeInDelay6: "fadeIn 1s 2.2s forwards",
        slideFromTop: "slideFromTop 1s",
        slideFromLeft: "slideFromLeft 1s",
        slideFromRight: "slideFromRight 1s",
        slideFromBottom: "slideFromBottom 1s",
      },
    },
  },
  plugins: [],
};
