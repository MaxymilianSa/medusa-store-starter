import { cva } from 'class-variance-authority';

export type TagVariants = 'hot' | 'new' | 'popular' | null | undefined;

export const tagVariants = cva(
  'max-w-xs w-auto uppercase text-center leading-4 font-medium text-sm text-white px-4 py-1.5',
  {
    variants: {
      variant: {
        hot: 'bg-hot',
        popular: 'bg-orange',
        new: 'bg-green',
      },
    },
    defaultVariants: {
      variant: 'new',
    },
  }
);

export const getTagVariantText = (variant: TagVariants) => {
  switch (variant) {
    case 'hot':
      return 'hot';
    case 'new':
      return 'new';
    case 'popular':
      return 'popular';
    default:
      break;
  }
};
