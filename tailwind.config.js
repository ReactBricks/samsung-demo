const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        samsung: ['Raleway'],
      },
      screens: {
        sm: '600px',
        lg: '900px',
        xl: '1200px',
      },
      boxShadow: {
        newsLetter:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        blueSamsung: {
          100: '#dbebff',
          200: '#bed9ff',
          300: '#96beff',
          400: '#6d98ff',
          500: '#4b72ff',
          600: '#2b48ff',
          700: '#2138e3',
          800: '#1c30b7',
          900: '#20328f',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
