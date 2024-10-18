/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgSVG: 'url("../src/assets/bg.svg")',
        bgAboutSVG: "url('../src/assets/aboutPattern.svg')",
      },
      screens: {
        xmd: "960px",
        lg2: "1100px",
      },
      colors: {
        dark: "#86B9B0",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Kaushan: ["Kaushan Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
