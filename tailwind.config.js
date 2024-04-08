/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rgba-17-44-65': 'rgba(17, 44, 65, 1)',
        'gray-107': 'rgba(107, 107, 107, 1)',
        'custom-blue': 'rgba(17, 44, 65, 1)',
        whiteRGBA: 'rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
};
