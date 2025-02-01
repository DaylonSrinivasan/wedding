/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        elegant: ['Dancing Script', 'serif'],
        title: ['Merriweather', 'serif'],
        text: ['Outfit', 'serif'],
      },
    },
  },
  plugins: []
}

