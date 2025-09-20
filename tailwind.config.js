/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

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
          50: '#eff6ff', // Light blue background from Figma
          500: '#00BFFF', // Main blue (e.g., banners)
          600: '#0099CC',
        },
        accent: {
          500: '#FF69B4', // Pink for badges?
        },
        hot: '#FFD700', // HOT badge yellow
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Likely Figma font
      },
      borderRadius: {
        'figma-card': '8px', // Match Figma card corners (inspect for exact)
      },
      spacing: {
        'figma-gap': '16px', // Common grid gap from Figma
      },
    },
  },
  plugins: [],
};