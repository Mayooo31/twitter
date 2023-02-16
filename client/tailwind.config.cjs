/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15202b",
        secondary: "#f3f3f3",
        grayish: "#ffffffb3",
      },
    },
    screens: {
      xxs: "350px",
      xs: "500px",
      ss: "600px",
      sm: "768px",
      md: "1040px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};
