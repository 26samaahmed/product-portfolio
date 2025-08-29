/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ephesis: ['Ephesis', 'cursive'],
        alumni: ['Alumni Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
