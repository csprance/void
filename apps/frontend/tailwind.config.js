/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          // 850: "#F600EA",
        },
        tide: {
          50: "#F4F6FB",
          100: "#E7E9EF",
          200: "#DADEE7",
          300: "#C0C6D3",
          400: "#A9AFBC",
          500: "#8F97A8",
          600: "#768093",
          700: "#5D687E",
          800: "#4A5264",
          850: "#363C4A",
          900: "#23272F",
          950: "#181B20",
          1000: "#0F1115",
        },
      },
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
        "10xl": "104rem", // 1664px
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
