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
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#583CF1', // Royal Purple
          600: '#4c34d1',
          700: '#432db1',
          800: '#372591',
          900: '#2e1e71',
        },
        secondary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#EF2D5E', // Vibrant Pink
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        accent: {
          orange: '#F97316',
          yellow: '#FBBF24',
          green: '#10B981',
          blue: '#3B82F6',
        },
        slate: {
          850: '#151e2e',
          900: '#0f172a',
          950: '#020617',
        }
      },
      animation: {
        'rainbow': 'rainbow 5s linear infinite',
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(to right, #EF2D5E, #F97316, #FBBF24, #10B981, #583CF1)',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
