/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RedHatText: ["Red Hat Text"],
      },
      variants: {
        fill: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
