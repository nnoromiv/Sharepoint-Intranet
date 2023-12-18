/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollText: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '50%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        }
      },
      animation: {
        scrollText: 'scrollText 10s linear infinite'
      }
    },
  },
  plugins: [require("daisyui")],
}