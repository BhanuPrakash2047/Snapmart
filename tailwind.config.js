/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        phonepePurple: '#5821D3', // Approximate PhonePe primary purple
        phonepeDarkPurple: '#4C18B9', // Darker shade for hover or accents
        phonepeGray: '#F5F5F5', // Light gray background
        phonepeTextGray: '#6B7280', // Text gray color for light text
        phonepeWhite: '#FFFFFF', // White for text or background
      },
      // Add custom scrollbar styles
      scrollbar: {
        width: '0',
      },
    },
  },
  plugins: [],
}
