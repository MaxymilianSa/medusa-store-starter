import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex gap-2.5 items-center justify-center px-7 py-4 uppercase text-white transition-all duration-75',
  {
    variants: {
      variant: {
        primary: 'bg-pastel text-white hover:bg-dark-pastel',
        secondary: 'bg-white text-pastel',
        active: 'bg-white text-pastel',
        disabled: 'bg-white text-dark-pastel',
      },
      size: {
        default: 'w-auto',
        sm: 'w-36',
        md: 'w-48',
        lg: 'w-60',
      },
      accent: {
        default: 'font-normal tracking-normal',
        on: 'font-semibold tracking-widest',
      },
      customBg: {
        default: '',
        on: 'bg-red-400',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'primary',
      accent: 'default',
      customBg: 'default',
    },
  }
);
