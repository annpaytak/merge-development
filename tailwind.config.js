/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      gray: "#E0E5E9",
      error: "#FF4B26",
      complete: "#6FCF97",
      primary: {
        grey: "#C6D0E0",
        black: "#333333",
        DEFAULT: "#065BEA",
        hover: "#0451D2",
        disabled: "#C6D0E0",
      },
      "text-grey": "#75777A",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
