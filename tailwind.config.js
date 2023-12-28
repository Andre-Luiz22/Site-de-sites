/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        banner: "30rem",
      },
      colors:{
        carrosselBg: "rgba(0,0,0,.1)"
      },
      fontFamily: {
        montSerrat: ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
};
