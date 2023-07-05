'use client';

import { VariantProps } from 'class-variance-authority';

import { clsxm } from '@/lib/clsxm';

import { Icon } from '@/components/commons/Icon/Icon';

import { filterTagVariants } from './FilterTag.model';

type FilterTagProps = { label: string; activeFilter?: string } & VariantProps<
  typeof filterTagVariants
>;

export const FilterTag = ({ label, variant }: FilterTagProps) => {
  // TODO: Translation
  // TODO: handleClose
  // TODO: handleClick
  // TODO: What's the difference between active and selected?
  return (
    <div className={clsxm(filterTagVariants({ variant }))}>
      {label}
      {variant === 'selected' && (
        <span className='flex items-center gap-2.5 uppercase text-black'>
          TEXT
          <button onClick={() => console.log('close')}>
            <Icon
              name='close'
              className='color-dark h-2.5 w-2.5 cursor-pointer'
            />
          </button>
        </span>
      )}
    </div>
  );
};
