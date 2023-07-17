/** @type {import('tailwindcss').Config} */
const clr1 = {
  primary: "#164B60",
  secondary: "#1B6B93",
  ternery: "#4FC0D0",
  fornery: "#A2FF86",
};
const clr2 = {
  primary: "#f3f5fc",
  secondary: "#EEE3CB",
  ternery: "#D7C0AE",
  fornery: "#967E76",
};
const clr3 = {
  primary: "#f3f5fc",
  secondary: "#EEE3CB",
  ternery: "#D7C0AE",
  fornery: "#967E76",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: clr3,
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
