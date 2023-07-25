'use client';

import { VariantProps } from 'class-variance-authority';

import { clsxm } from '@/lib/clsxm';

import { Icon } from '@/components/commons/Icon/Icon';
import { IconNameType } from '@/components/commons/Icon/IconModel';

import { tagVariants } from './Tag.model';

type FilterTagProps = {
  label: string;
  className?: string;
  iconName?: IconNameType;
  iconClassName?: string;
  iconPosition?: 'prepend' | 'append';
  handleClose?: () => void;
  handleClick?: () => void;
} & VariantProps<typeof tagVariants>;

export const Tag = ({
  label,
  className,
  iconName,
  iconClassName,
  iconPosition = 'prepend',
  variant,
  handleClick,
  handleClose,
}: FilterTagProps) => {
  // TODO: Translations
  // TODO: HANDLE CLICK / HANDLE CLOSE

  return (
    <div
      className={clsxm(
        tagVariants({ variant, className }),
        handleClick && 'cursor-pointer hover:opacity-90'
      )}
    >
      <div className='flex items-center gap-2.5'>
        <span className='text-sm font-medium leading-4'>{label}</span>
        {iconName ? (
          <Icon
            name={iconName}
            className={clsxm(
              'h-18 w-auto text-pastel',
              iconPosition === 'prepend' && '-order-1',
              iconClassName
            )}
          />
        ) : null}

        {variant === 'selected' ? (
          <>
            <span className='text-sm font-medium uppercase leading-4 text-black'>
              {label}
            </span>
            <button onClick={handleClose} className='bg-none'>
              <Icon name='small-close' />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};
