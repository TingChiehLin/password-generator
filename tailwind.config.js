/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#24232C",
        "white-gray": "#817D92",
        "bright-gray": "#E6E5EA",
        "primary-dark": "#18171F",
        "bright-green": "#A4FFAF",
        "bright-red": "#F64A4A",
        "bright-orange": "#FB7C58",
        "bright-yellow": "#F8CD65",
      },
    },
  },
  plugins: [],
};
