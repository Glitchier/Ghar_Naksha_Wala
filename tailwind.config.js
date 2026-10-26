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
        primary: { DEFAULT: "#0D9488", dark: "#0F766E", light: "#E6F6F4" },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Kaushan: ["Kaushan Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
