/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#00BFFF',
          600: '#0099CC',
        },
        accent: {
          500: '#FF69B4',
        },
        hot: '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'figma-card': '8px',
      },
      spacing: {
        'figma-gap': '16px',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out forwards',
        'slide-out': 'slide-out 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
};
