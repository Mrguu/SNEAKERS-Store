/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-pink": "#e83b3b",
        "nav-color": "#ff5757c2c",
      },
      boxShadow: {
        "4xl": "0px 10px 60px #bf3737",
      },
      dropShadow: {
        "5xl": "0px 10px 10px #0000",
      },
      fontFamily: {
        abc: [`"Titan One", sans-serif`],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
