/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom colors from Figma (inspect Figma for exact hex; e.g., blue banners ~#00BFFF, accents)
      colors: {
        primary: {
          50: '#eff6ff', // Light blue bg for main
          500: '#00BFFF', // Main blue
          600: '#0099CC',
        },
        accent: {
          500: '#FF69B4', // Pink for badges?
        },
        // Add more: e.g., for HOT badge yellow #FFD700
        hot: '#FFD700',
        // Grays, etc., as needed
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Figma likely uses Inter; fallback to system
      },
      // Custom spacings/radii if Figma has non-standard (e.g., border-radius 5px for cards)
      borderRadius: {
        'figma-card': '8px', // Measure from Figma inspect
      },
      spacing: {
        'figma-gap': '16px', // Common grid gaps
      },
    },
  },
  plugins: [],
};