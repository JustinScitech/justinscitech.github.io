/** @type {import('tailwindcss').Config} */ export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        "gradient-anim": {
          "0%": { "background-size": "150% 150%" },
          "50%": { "background-size": "200% 200%" },
          "100%": { "background-size": "150% 150%" },
        },
      },
      animation: {
        "gradient-anim": "gradient-anim 6s linear infinite",
      },
      colors: {
        primary: "#050816",
        secondary: "#6a8faf", // bluish-grey
        tertiary: "#123055", // deeper blue
        "black-100": "#0a1f33", // dark blue
        "black-200": "#050b19", // very dark blue
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0a1f33", //dark blue shadow
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   topbg: "url('/src/assets/animebg.jpg')",
      // },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
