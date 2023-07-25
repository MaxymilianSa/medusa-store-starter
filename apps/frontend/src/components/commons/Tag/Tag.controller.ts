import { useTranslations } from 'next-intl';

export const useTag = () => {
  const t = useTranslations('Index');

  return { t };
};
