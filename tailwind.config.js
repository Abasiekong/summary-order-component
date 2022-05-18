module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': '#e0e8ff',
        'bright-blue': '#3829e0',
        'very-pale-blue': '#f5f7ff',
        'desaturated-blue': '#7280a7',
        'dark-blue': '#1f2f56'
      },

      width: {
        '450': '28.125em',
        '330': '20.625em',
        '355': '22.1875em',
      },
    },
  },
  plugins: [],
};
