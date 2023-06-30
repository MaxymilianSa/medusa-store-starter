import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/commons/Button/Button';
import { Icon } from '@/components/commons/Icon/Icon';

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
      <div>
        <h1>{t('title')}</h1>
        <Button iconName='ikonka'>Click me</Button>
      </div>
    </main>
  );
}
