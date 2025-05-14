/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4f2',
          100: '#12140f',
          200: '#23271e',
          300: '#353b2d',
          400: '#464e3c',
          500: '#57614b',
          600: '#7a8869',
          700: '#9ba78d',
          800: '#bdc4b3',
          900: '#dee2d9',
          950: '#f3f4f2',
        },
        secondary: {
          50: '#f2f3f2',
          100: '#0f130f',
          200: '#1e251f',
          300: '#2d382e',
          400: '#3c4b3d',
          500: '#4b5e4d',
          600: '#69836c',
          700: '#8da48f',
          800: '#b3c2b5',
          900: '#d9e1da',
          950: '#f2f3f2',
        },
        tertiary: {
          50: '#faf8f5',
          100: '#2c2316',
          200: '#58472c',
          300: '#846a43',
          400: '#ad8d5c',
          500: '#c3ac89',
          600: '#cfbca0',
          700: '#dbcdb8',
          800: '#e7ded0',
          900: '#f3eee7',
          950: '#faf8f5',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 