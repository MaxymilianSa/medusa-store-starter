import { VariantProps } from 'class-variance-authority';

import { clsxm } from '@/lib/clsxm';

import { dividerVariants } from './Divider.model';

type DividerProps = {
  className?: string;
} & VariantProps<typeof dividerVariants>;

export const Divider = ({
  size = 'full',
  color = 'pastel',
  className,
}: DividerProps) => (
  <div className={clsxm(dividerVariants({ size, color, className }))} />
);
