/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '22ch' },
        },
        blink: {
          '0%, 100%': { borderColor: 'white' },
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 3s steps(22, end) forwards',
        blink: 'blink 0.7s step-end infinite',
        'typing-blink': 'typing 3s steps(22, end) forwards, blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}