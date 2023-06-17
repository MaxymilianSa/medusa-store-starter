import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'px-7 py-4 uppercase text-white transition-all duration-75',
  {
    variants: {
      variant: {
        primary: 'bg-[#D1BCB2] text-white hover:bg-[#AD8775]',
        secondary: 'bg-white text-[#D1BCB2]',
        active: 'bg-white text-[#D1BCB2]',
        disabled: 'bg-white text-[#AD8775]',
      },
      size: {
        default: 'w-48',
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
