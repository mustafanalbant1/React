/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279" },
      lg: { max: "1023" },
      md: { max: "767" },
      sm: { max: "639" },
    },
  },
  plugins: [],
};
