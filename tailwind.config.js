module.exports = {
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mukta", "sans-serif"],
      },
      boxShadow: {
        "gray-200": "0.15em 0.15em 0.3em #99B5D2",
      },
    },
    linearGradientColors: (theme) => ({
      "red-progress": [theme("colors.red.600"), theme("colors.red.500")],
      "yellow-progress": [
        theme("colors.yellow.600"),
        theme("colors.yellow.500"),
      ],
      "green-progress": [theme("colors.green.600"), theme("colors.green.500")],
    }),
  },
  variants: {},
  plugins: [
    require("tailwindcss-neumorphism"),
    require("tailwindcss-gradients"),
  ],
};
