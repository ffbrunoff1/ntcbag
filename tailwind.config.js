/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
        accent: '#4CAF50',
        'accent-dark': '#2E7D32',
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-900': '#111827',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
