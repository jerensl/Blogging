module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '1/10': '10vh',
        '9/10': '90vh',
      },
      minHeight: {
        '1/10': '10vh',
        'full-screen': '90vh',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(450px, 1fr))',
      },
      textColor: {
        markdown: {
          base: 'var(--color-text-base)',
        },
      },
      backgroundColor: {
        markdown: {
          fill: 'var(--color-fill)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: 'var(--color-text-base)',
            },
            h2: {
              color: 'var(--color-text-base)',
            },
            code: {
              color: theme('colors.red.600'),
              backgroundColor: theme('colors.gray.100'),
              padding: '2px 4px',
              borderRadius: '0.25rem',
            },
            p: {
              fontWeight: 'normal',
            },
            ul: {
              fontWeight: 'normal',
            },
          },
        },
        dark: {
          css: {},
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('autoprefixer'),
  ],
}
