import { clsxm } from '@/lib/clsxm';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isAccentuated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'active' | 'disabled';
  customBackgroundColor?: string;
}

export const Button = ({
  label,
  isAccentuated,
  size = 'md',
  variant = 'primary',
  customBackgroundColor,
  ...props
}: ButtonProps) => {
  const darkPastel = '#AD8775';
  const pastel = '#D1BCB2';

  const variants = {
    primary: `bg-[${pastel}] hover:bg-[${darkPastel}]`,
    secondary: `bg-white text-[${pastel}] hover:bg-[${pastel}]`,
    active: `bg-[${darkPastel}] hover:bg-[${pastel}]`,
    disabled: `bg-white text-[${darkPastel}]`,
  };

  const sizeVariant = {
    sm: 'w-20',
    md: 'w-48',
    lg: 'w-60',
  };

  // TODO: Add button icon variant
  // TODO: Accent props
  // TODO: Change colors to tailwind-colors
  // TODO: Refactor variants to youtube videos

  return (
    <button
      type={props.type}
      className={clsxm(
        'px-7 py-4 uppercase text-white',
        variants[variant],
        sizeVariant[size],
        isAccentuated && 'font-semibold tracking-widest',
        customBackgroundColor && `bg-[${customBackgroundColor}]`
      )}
    >
      {label}
    </button>
  );
};
