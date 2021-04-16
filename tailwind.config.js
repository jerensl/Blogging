module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '1/10': '10vh',
        '9/10': '90vh',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(450px, 1fr))',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
