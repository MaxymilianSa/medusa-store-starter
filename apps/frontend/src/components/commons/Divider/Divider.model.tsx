import { cva } from 'class-variance-authority';

export const dividerVariants = cva('h-px', {
  variants: {
    size: {
      sm: 'w-1/3',
      md: 'w-1/2',
      lg: 'w-8/12',
      xl: 'w-9/12',
      full: 'w-full',
    },
    color: {
      pastel: 'bg-pastel',
      current: 'bg-currentColor',
      white: 'bg-white',
      accent: 'bg-accent',
      orange: 'bg-orange',
      darkPastel: 'bg-dark-Pastel',
      darkGrey: 'bg-dark-grey',
      middleGrey: 'bg-middle-grey',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'pastel',
  },
});
