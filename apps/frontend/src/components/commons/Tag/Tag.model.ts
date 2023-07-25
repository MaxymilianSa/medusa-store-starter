import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'flex items-center justify-center border border-accent px-3.5 py-2 text-sm font-medium uppercase leading-4 tracking-wide',
  {
    variants: {
      variant: {
        hot: 'bg-hot text-white border-hot',
        new: 'bg-green text-white border-green',
        popular: 'bg-orange text-white border-orange',
        normal: 'bg-white text-dark-pastel',
        active: 'bg-accent text-white',
        selected: 'bg-main border-pastel gap-1.5 capitalize text-pastel',
        activeOrder: 'bg-main text-dark-grey border-main',
        inactiveOrder: 'bg-main border-main text-pastel',
      },
    },
    defaultVariants: {
      variant: 'normal',
    },
  }
);
