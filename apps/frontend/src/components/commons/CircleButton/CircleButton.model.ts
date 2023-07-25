import { cva } from 'class-variance-authority';

export const circleButtonVariants = cva(
  'uppercase flex items-center justify-center text-pastel rounded-full border border-pastel',
  {
    variants: {
      size: {
        large: 'w-16 h-16',
        small: 'w-12 h-12',
      },
    },
    defaultVariants: {
      size: 'large',
    },
  }
);
