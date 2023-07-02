/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      main: 'rgb(var(--color-main) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      pastel: 'rgb(var(--color-pastel) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      orange: 'rgb(var(--color-orange) / <alpha-value>)',
      hot: 'rgb(var(--color-hot) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)',
      'dark-grey': 'rgb(var(--color-dark-grey) / <alpha-value>)',
      'middle-grey': 'rgb(var(--color-middle-grey) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-prompt)', ...fontFamily.sans],
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        md: '1.125rem', // 18px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        xxl: '1.875rem', // 30px
      },
      lineHeight: {
        xs: '0.875rem', // 14px
        sm: '1rem', // 16px
        base: '1.125rem', // 18px
        md: '1.25rem', // 20px
        lg: '1.5rem', // 24px
        xl: '1.625rem', // 26px
        xxl: '1.75rem', // 28px
        xxxl: '1.875rem', // 30px
        xxxxl: '2.375rem', // 38px
      },
      letterSpacing: {
        xs: '0.063rem',
        sm: '0.125rem',
        xl: '0.188rem',
      },
      dropShadow: {
        primary: '0px 10px 20px rgba(209, 188, 178, 0.25)',
        secondary:
          '8.16431e-16px 13.3333px 26.6667px rgba(173, 135, 117, 0.2), inset -1.85058e-16px -3.02222px 3.02222px #E4E4E4, inset 1.85058e-16px 3.02222px 3.02222px #FFFFFF',
      },
    },
  },
  plugins: [],
};
