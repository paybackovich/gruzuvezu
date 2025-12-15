export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          dark: '#0f172a',
          light: '#eff6ff',
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"SF Pro Display"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};


