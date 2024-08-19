/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#18171E',
        darkBg: '#0d0c11',
        accent: "#05862D",
        accentHover: "#005C21"
      },
      fontFamily: {
        display: ["Squada One", "sans-serif"],
        text: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}