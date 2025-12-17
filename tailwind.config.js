/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Noto Sans"', 'sans-serif'],
        spline: ['"Spline Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}