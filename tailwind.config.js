/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#003a30",
        secundary:"#151515",
        main:"#1A1B1F",
        titulo:"#E9C088",
        boton:"#E9C088"
      }
    },
  },
  plugins: [],
}

