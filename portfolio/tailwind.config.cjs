/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alumni Sans', 'sans-serif'],
        heading: ['Ephesis', 'cursive'],
      },
    },
  },
  plugins: [],
};
