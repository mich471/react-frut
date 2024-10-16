/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'SoftRed': 'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'DarkDesaturatedcyan': 'hsl(167, 40%, 24%)',
        'DarkBlue': 'hsl(198, 62%, 26%)',
        'DarkModeratecyan': 'hsl(168, 34%, 41%)',
        'VeryDarkDesaturatedblue': 'hsl(212, 27%, 19%)',
        'VerydarkGrayishBlue': 'hsl(213, 9%, 39%)',
        'DarkGrayishBlue': 'hsl(232, 10%, 55%)',
        'GrayishBlue': 'hsl(210, 4%, 67%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'Barlow': ['Barlow', 'sans-serif'],
        'Fraunces': ['Fraunces', 'serif']
      },
      screens: {
        'xs': '320px',
        'tablet': '700px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}

