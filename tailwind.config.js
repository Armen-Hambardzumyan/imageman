/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "light-green": "#4FDD88",
        "turquoise-green": "#87C5A7",
        "light-orange": "#F8AF6C",
      },
      height: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
