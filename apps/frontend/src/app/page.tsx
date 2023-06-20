import useTranslation from 'next-translate/useTranslation';

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <main className='flex items-center justify-center min-h-screen min-w-full'>
      <h1>{t('title')}</h1>
    </main>
  );
};

export default HomePage;
