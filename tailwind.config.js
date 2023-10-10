/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 28,
      "2xl": 40,
    },

    extend: {
      fontFamily: {
        poppins: "Poppins",
        sans: "Inter, sans-serif"
      },
    },

  },
  plugins: [],
}

