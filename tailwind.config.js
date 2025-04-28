/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: {
          100: '#F0ECFF',
          900: '#6842FF',
        },  
        accent: '#E0E0E0'
      },
      fontFamily: {
        uregular: ['Urbanist_400Regular', 'sans-serif'],
        ubold: ['Urbanist_700Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}