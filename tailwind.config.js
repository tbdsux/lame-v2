const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.vue"],
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
