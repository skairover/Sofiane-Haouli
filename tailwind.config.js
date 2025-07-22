// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // adjust if needed
  theme: {
    extend: {
      keyframes: {
        slideText: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideText: 'slideText 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
