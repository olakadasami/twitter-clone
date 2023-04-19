/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary-blue": "rgb(29, 155, 240)",
        "color-white": "#E7e9ea",
        "color-grey": "#71767b",
        "color-grey-light": "#ddd",
        "color-dark-text": "#0f1419",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
