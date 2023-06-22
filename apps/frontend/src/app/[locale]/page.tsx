import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/Icon/Icon';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <main className='flex flex-col gap-5 items-center justify-center min-h-screen min-w-full'>
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
    </main>
  );
}
