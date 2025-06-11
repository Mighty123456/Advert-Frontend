/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Colors (Exact Logo Colors)
        primary: {
          50: 'rgb(255, 248, 230)',
          100: 'rgb(255, 241, 204)',
          200: 'rgb(255, 234, 179)',
          300: 'rgb(255, 227, 153)',
          400: 'rgb(255, 220, 128)',
          500: 'rgb(252, 193, 8)',    // Main brand yellow
          600: 'rgb(227, 174, 7)',
          700: 'rgb(202, 155, 6)',
          800: 'rgb(177, 136, 5)',
          900: 'rgb(152, 117, 4)',
        },
        secondary: {
          50: 'rgb(230, 235, 242)',
          100: 'rgb(204, 214, 225)',
          200: 'rgb(179, 193, 208)',
          300: 'rgb(153, 172, 191)',
          400: 'rgb(128, 151, 174)',
          500: 'rgb(8, 46, 83)',      // Main brand navy
          600: 'rgb(7, 41, 75)',
          700: 'rgb(6, 37, 67)',
          800: 'rgb(5, 32, 59)',
          900: 'rgb(4, 28, 51)',
        },
        // Supporting Colors
        navy: {
          light: 'rgb(16, 66, 123)',
          dark: 'rgb(4, 23, 42)',
        },
        yellow: {
          muted: 'rgb(255, 215, 100)',
          bright: 'rgb(255, 200, 20)',
        },
        // Background Colors
        background: {
          primary: 'rgb(255, 255, 255)',
          secondary: 'rgb(250, 250, 250)',
          dark: 'rgb(8, 46, 83)',
        },
        // Text Colors
        text: {
          primary: 'rgb(8, 46, 83)',
          secondary: 'rgb(60, 80, 110)',
          muted: 'rgb(100, 120, 150)',
          light: 'rgb(255, 255, 255)',
        },
        // Border Colors
        border: {
          DEFAULT: 'rgb(229, 231, 235)',
          light: 'rgb(243, 244, 246)',
          primary: 'rgb(252, 193, 8)',
          secondary: 'rgb(8, 46, 83)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};