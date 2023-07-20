import { Icon } from '@/components/commons/Icon/Icon';
import { Link } from '@/components/commons/Link/Link';

export type BreadCrumbsProps = {
  links: {
    label: string;
    href?: string;
  }[];
};

export const BreadCrumbs = ({ links }: BreadCrumbsProps) => {
  return (
    <div className='flex items-center gap-2 text-pastel text-xs'>
      {links.map(({ label, href }, index) =>
        href ? (
          <>
            <Link key={index} href={href} className='text-xs font-medium'>
              {label}
            </Link>
            <Icon name='small-chevron' className='-rotate-90' />
          </>
        ) : (
          <p className='text-primary font-medium' key={index}>
            {label}
          </p>
        )
      )}
    </div>
  );
};
