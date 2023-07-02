'use client';

import { VariantProps } from 'class-variance-authority';

import { clsxm } from '@/lib/clsxm';

import { getTagVariantText, tagVariants } from './TagModel';

type TagProps = { className?: string } & VariantProps<typeof tagVariants>;

const Tag = ({ variant, className, ...props }: TagProps) => (
  <div className={clsxm(tagVariants({ variant, className }))} {...props}>
    {getTagVariantText(variant)}
  </div>
);

export default Tag;
