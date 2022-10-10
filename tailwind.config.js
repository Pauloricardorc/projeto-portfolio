/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        'background': '#0B132B',
        'primary': '#1C2541',
        'secondary': '#5BC0BE',
        'action': '#3A506B',
        'text': '#FFFFFF',
        'placeholder': '#CCCCCC'
      },
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
