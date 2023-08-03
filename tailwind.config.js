/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "984px",
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
