/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: { max: "320px" }, // iPhone SE
        "2xl": "1201px",
      },
    },
  },
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "prettier-plugin-tailwindcss",
  ],
};
