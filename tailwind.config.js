/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#1D58EE",
        secondary_color: "#628DFB",
        bg_color: "#151c25",
        secondary_bgcolor: "#0b0e13",
        text_primary: "#d6d7d8",
        text_secondary: "#8d8e8f",
      },
    },
  },
  plugins: [],
}