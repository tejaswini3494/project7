/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cheeseburga: ['Cheeseburger', 'sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        xl: '1px 18px 10px rgba(0, 0, 0, 0.5)',
        none: 'none',
      },
      dropShadow: {
        imgShadow: '1px 100px 5px gray',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '10px 12px 1px black',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}

