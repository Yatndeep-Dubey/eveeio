/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#313a70",
        secondary: "#ffe500",
        blackish: "#4d4d4d",
        grayish: "#717171",
        purplish: "#969bd2",
        blueish: "#5095fe",
      },

      // media queries
      screens: {
        sm: "40rem", // 640px

        md: "48rem", // 768px

        lg: "64rem", // 1024px

        xl: "80rem", // 1280px

        "2xl": "96rem", // 1536px
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
