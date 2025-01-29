/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [];/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#00D285',
          600: '#059669',
        },
        'secondary': '#1E1E1E',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}