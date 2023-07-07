import { VariantProps } from 'class-variance-authority';

import { clsxm } from '@/lib/clsxm';

import { Icon } from '@/components/commons/Icon/Icon';
import { IconNameType } from '@/components/commons/Icon/IconModel';

import { textVariants } from './TextModel';

export type TextProps = {
  icon?: IconNameType;
  iconClassName?: string;
} & VariantProps<typeof textVariants> &
  React.PropsWithChildren;

export const Text = ({
  icon,
  iconClassName,
  children,
  ...props
}: TextProps) => (
  <p className='flex gap-1 items-center'>
    <span className={clsxm(textVariants(props))}>{children}</span>
    {icon ? (
      <Icon name={icon} className={clsxm('text-primary', iconClassName)} />
    ) : null}
  </p>
);
