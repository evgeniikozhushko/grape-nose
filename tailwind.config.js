// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                       // Vite HTML entry
    "./src/**/*.{js,ts,jsx,tsx}",         // ← ALL your React/TSX files
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grape-red': '#F05437',
        'grape-blue': '#1B0F2A',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
