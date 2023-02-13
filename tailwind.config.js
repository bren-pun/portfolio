/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dmsans: ["DM Sans", "sans-serif"],
      },
      screens: {
        xs: "667",
      },
      colors: {
        black: "#8AEDA3",
        blacker: "#0F1827",
        whiteblack: "#C6C6C6",
        whiter: "#273647",
        blackwhite: "#C6C6C6",
        whiters: "#182330",
        whiterist: "#1F2A37",
        opacity: "#0D272D",
      },
    },
  },
  plugins: [],
};
