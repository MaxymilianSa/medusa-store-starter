'use client';

import { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { clsxm } from '@/lib/clsxm';

import { Icon } from '@/components/commons/Icon/Icon';
import { IconNameType } from '@/components/commons/Icon/IconModel';

import { circleButtonVariants } from './CircleButton.model';

type CircleButtonProps = {
  iconName?: IconNameType;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof circleButtonVariants>;

export const CircleButton = forwardRef<HTMLButtonElement, CircleButtonProps>(
  ({ size, className, iconName, children, ...props }, ref) => (
    <button
      className={clsxm(circleButtonVariants({ size, className }))}
      {...{ ref, ...props }}
    >
      {iconName ? (
        <Icon
          name={iconName}
          className={clsxm(size === 'large' ? 'h-6 w-6' : 'h-5 w-5')}
        />
      ) : (
        children
      )}
    </button>
  )
);
