/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F0', // warm ivory
        surface: '#FFFFFF',
        charcoal: '#151515', // primary text
        mutedGray: '#6B6B6B', // secondary text
        forest: {
          DEFAULT: '#1B3B2B', // deep forest green
          light: '#28543E',
          dark: '#11261B',
          subtle: '#EBF2EE',
        },
        terracotta: {
          DEFAULT: '#C65A38', // warm terracotta
          light: '#DE7351',
          dark: '#A64323',
          subtle: '#FDF1EC',
        },
        gold: {
          DEFAULT: '#CFA145', // muted brass / gold
          light: '#E5BF6F',
          subtle: '#FAF4E6',
        },
        borderLight: '#E8E4DC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        card: '0 4px 20px -2px rgba(21, 21, 21, 0.05)',
        elevated: '0 12px 36px -4px rgba(21, 21, 21, 0.08)',
        float: '0 20px 48px -6px rgba(21, 21, 21, 0.12)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
