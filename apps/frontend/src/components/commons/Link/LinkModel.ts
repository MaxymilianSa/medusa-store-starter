import { cva } from 'class-variance-authority';

export const linkVariants = cva(
  'cursor-pointer text-base decoration-accent underline-offset-2 hover:underline hover:text-pastel',
  {
    variants: {
      variant: {
        medium: 'text-base',
        small: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'medium',
    },
  }
);
