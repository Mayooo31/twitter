/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38618c",
        secondary: "#f3f3f3",
        grayish: "#ffffffb3",
      },
    },
    screens: {
      xxs: "350px",
      xs: "500px",
      ss: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
