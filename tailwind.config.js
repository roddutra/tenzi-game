module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      karla: ['Karla', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'tenzies-bg': '#0B2434',
        'tenzies-green': '#59E391',
        'tenzies-blue': '#5035FF',
      },
      animation: {
        'spin-once': 'spin 500ms ease-in-out',
      },
    },
  },
  plugins: [],
};
