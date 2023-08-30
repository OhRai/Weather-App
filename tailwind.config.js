/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1E1E27'
      },
      fontFamily: {
        graphikBold: ['GraphikBold', 'sans-serif'],
        graphikExtralight: ['GraphikExtralight', 'sans-serif'],
        graphikLight: ['GraphikLight', 'sans-serif'],
        graphikMedium: ['GraphikMedium', 'sans-serif'],
        graphikRegular: ['GraphikRegular', 'sans-serif'],
        graphikThin: ['GraphikThin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

