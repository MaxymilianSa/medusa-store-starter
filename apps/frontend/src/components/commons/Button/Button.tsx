import { clsxm } from '@/lib/clsxm';
import { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { buttonVariants } from './ButtonModel';

type ButtonProps = {
  isIcon?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

// TODO: Add button icon variant
// TODO: Change colors to tailwind-colors
// TODO: Configure Storybook customBg Control

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, accent, customBg, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={clsxm(
        buttonVariants({ size, variant, accent, customBg, className })
      )}
      {...props}
    >
      {children}
    </button>
  )
);
