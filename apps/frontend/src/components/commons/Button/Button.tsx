import { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { clsxm } from '@/lib/clsxm';

import { buttonVariants } from './ButtonModel';

type ButtonProps = {
  iconName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

// TODO: Add button icon variant
// TODO: Configure Storybook customBg Control

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      accent,
      customBg,
      className,
      children,
      iconName,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsxm(
        buttonVariants({ size, variant, accent, customBg, className })
      )}
      {...props}
    >
      <>
        {children}
        {iconName ? <span>&nbsp;{iconName}</span> : ''}
      </>
    </button>
  )
);
