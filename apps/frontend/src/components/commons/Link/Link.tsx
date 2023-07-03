import { VariantProps } from 'class-variance-authority';
import Root, { LinkProps as RootProps } from 'next/link';

import { clsxm } from '@/lib/clsxm';

import { linkVariants } from './LinkModel';

export type LinkProps = { className?: string } & VariantProps<
  typeof linkVariants
> &
  RootProps &
  React.PropsWithChildren;

export const Link = ({ children, variant, className, ...props }: LinkProps) => (
  <Root className={clsxm(linkVariants({ variant }), className)} {...props}>
    {children}
  </Root>
);
