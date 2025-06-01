// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                       // Vite HTML entry
    "./src/**/*.{js,ts,jsx,tsx}",         // ← ALL your React/TSX files
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js",
  ],
  theme: {
    extend: {
      colors: {
        'grape-red': '#F05437',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
