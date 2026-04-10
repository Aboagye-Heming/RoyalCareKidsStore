/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#FFF5F0",
          100: "#FFEBE0",
          200: "#FFCDB2",
          300: "#FFAF85",
          400: "#FF8747",
          500: "#FF5F0F", // Logo Orange
          600: "#E6560D",
          700: "#BF480B",
          800: "#993909",
          900: "#732B07",
        },
        secondary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#EF2D5E", // Vibrant Pink
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        accent: {
          orange: "#FF5F0F",
          yellow: "#FBBF24",
          green: "#10B981",
          blue: "#3B82F6",
        },
        slate: {
          850: "#151e2e",
          900: "#0f172a",
          950: "#020617",
        },
      },
      animation: {
        rainbow: "rainbow 5s linear infinite",
      },
      keyframes: {
        rainbow: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundImage: {
        "rainbow-gradient":
          "linear-gradient(to right, #EF2D5E, #FF5F0F, #FBBF24, #10B981, #3B82F6)",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
