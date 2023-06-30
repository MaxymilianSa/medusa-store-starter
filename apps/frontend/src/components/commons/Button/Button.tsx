'use client';

import { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { clsxm } from '@/lib/clsxm';

import { Icon } from '@/components/commons/Icon/Icon';
import { IconNameType } from '@/components/commons/Icon/IconModel';

import { buttonVariants } from './ButtonModel';

type ButtonProps = {
  iconName?: IconNameType;
  iconClassName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

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
      iconClassName,
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
        {iconName ? (
          <Icon name={iconName} className={clsxm('inline', iconClassName)} />
        ) : (
          ''
        )}
      </>
    </button>
  )
);
