/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      pulseScale: {
        '0%, 100%': {transform: 'scale(1)'},
        '50%': {transform: 'scale(1.08)'},
      },
    },
    animation: {
      pulseScale: 'pulseScale 1.6s ease-in-out infinite',
    },
  },
  plugins: [],
};
