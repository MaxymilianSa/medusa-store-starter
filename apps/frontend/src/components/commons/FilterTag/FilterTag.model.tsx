import { cva } from 'class-variance-authority';

export const filterTagVariants = cva(
  'flex items-center justify-center border border-accent px-3.5 py-2 text-sm font-medium uppercase leading-4 cursor-pointer',
  {
    variants: {
      variant: {
        normal: 'bg-white text-dark-pastel',
        active: 'bg-accent text-white hover:opacity-90',
        selected: 'gap-1.5 capitalize bg-white text-pastel',
      },
    },
    defaultVariants: {
      variant: 'normal',
    },
  }
);
