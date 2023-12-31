/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.htmsl", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradLogo:
          "linear-gradient(108deg, #5F00BF 15.96%, rgba(39, 80, 160, 0.67) 38.66%, rgba(18, 142, 68, 0.39) 68.92%, rgba(39, 152, 160, 0.84) 85.13%)",

        gradContainerBolinhas:
          "linear-gradient(145deg, rgba(191,11,201,1) 0%, rgba(101,111,226,0.9626225490196079) 49%, rgba(0,255,130,1) 100%);",

        gradTextContainerBolinhas: "linear-gradient(92deg, #2FA8FF 6.28%, rgba(225, 103, 255, 0.33) 95%)",
      },
      fontFamily: {
        custom: ["poppins", "sans-serif"],
      },
      colors: {
        pinkLogo: "#E57FFF",
        bolinhas: {
          verde: "rgba(0,255,130,1)",
          roxo: "rgba(101,111,226,0.9626225490196079)",
          roxo2: "#7B50D4"
        }
      },
      height: {
        bannerHeight: "35rem",
      },
    },
  },
  plugins: [],
};
