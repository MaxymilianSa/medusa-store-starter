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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size, variant, className, children, iconClassName, iconName, ...props },
    ref
  ) => (
    <button
      className={clsxm(buttonVariants({ size, variant, className }))}
      {...{ ref, ...props }}
    >
      <>
        {children}
        {iconName ? (
          <Icon
            name={iconName}
            className={clsxm('inline text-white', iconClassName)}
          />
        ) : null}
      </>
    </button>
  )
);
