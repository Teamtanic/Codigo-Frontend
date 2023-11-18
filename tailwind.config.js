/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontSize: {
      "2xs": 12,
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
      screens: {
        'md': '860px'
      }
    },

  },
  plugins: [require("tailwindcss-radix")()],
}

