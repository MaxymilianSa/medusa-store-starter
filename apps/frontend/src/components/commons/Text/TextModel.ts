import { cva } from 'class-variance-authority';

export const textVariants = cva(
  'cursor-pointer uppercase text-base leading-5 decoration-accent underline-offset-2 tracking-wide hover:underline',
  {
    variants: {
      variant: {
        primary: 'text-primary',
        secondary: 'text-pastel',
      },
      opened: {
        default: '',
        opened: 'underline',
      },
    },
    defaultVariants: {
      variant: 'primary',
      opened: 'default',
    },
  }
);
