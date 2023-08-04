/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: { max: "600px" },
        md: { max: "727px" },
        lg: { max: "983px" },
        xl: { max: "983px" },
        "2xl": "984px",
      },
    },
  },
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "prettier-plugin-tailwindcss",
  ],
};
