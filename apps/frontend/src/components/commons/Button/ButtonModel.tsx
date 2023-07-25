import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex gap-2.5 items-center justify-center uppercase text-white transition-all duration-75',
  {
    variants: {
      variant: {
        primary: 'bg-pastel text-white hover:bg-dark-pastel',
        secondary:
          'bg-white text-dark-pastel border border-pastel hover:bg-pastel hover:text-white',
        active: 'bg-dark-pastel text-white',
        disabled: 'bg-pastel text-secondary cursor-not-allowed',
        disabledSecondary:
          'bg-white text-dark-pastel border border-pastel cursor-not-allowed',
      },
      size: {
        large: 'px-8 py-4',
        small: 'px-8 py-3',
      },
      textVariant: {
        large: 'font-semibold text-md leading-6 tracking-sm',
        normal: 'font-normal text-md leading-6 tracking-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      textVariant: 'normal',
      size: 'large',
    },
  }
);
