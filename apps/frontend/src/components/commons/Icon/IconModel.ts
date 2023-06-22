export type IconNameType = typeof iconNames[number];

export type IconProps = {
  name: IconNameType;
  className?: string;
};

export const iconNames = [
  'arrow',
  'burger-menu',
  'calendar',
  'cancel',
  'cart',
  'chevron',
  'close',
  'comment',
  'document',
  'email',
  'facebook',
  'google',
  'like',
  'minus',
  'not-valid',
  'plus',
  'search',
  'small-chevron',
  'small-close',
  'telegram',
  'trash',
  'truck',
  'twitter',
  'user',
  'validated',
] as const;
