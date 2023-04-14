/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["*.html", "*js"],
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  theme: {
    extend: {
      fontFamily: {
        "mergic": ["Mergic", "sans-serif"],
        "sigmar-one": ["SigmarOne", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
