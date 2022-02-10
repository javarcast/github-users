module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          300: '#333',
          900: '#000',
        },
        primary: '#12497f',
        secondary: '#6baaeb ',
        tertiary: ' #3b73bb ',
        quaternary: '#245d9a ',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
