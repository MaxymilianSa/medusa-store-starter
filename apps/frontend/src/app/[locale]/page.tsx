import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/Icon/Icon';
import { Tag } from '@/components/commons/Product/Tag/Tag';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <main className='flex min-h-screen min-w-full flex-col items-center justify-center gap-5'>
      <h1>{t('title')}</h1>
      <div className='flex gap-5'>
        <Link href='/'>PL</Link>
        <Link href='/en'>EN</Link>
      </div>
      <div className='flex gap-5'>
        <Icon name='google' />
        <Icon name='facebook' />
        <Icon name='telegram' />
        <Icon name='twitter' />
      </div>
      <div className='py-2.5'>
        <div>
          <Tag variant='popular' />
          <Tag variant='hot' />
          <Tag variant='new' />
        </div>
      </div>
    </main>
  );
}
