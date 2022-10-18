/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#FFE6C4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
