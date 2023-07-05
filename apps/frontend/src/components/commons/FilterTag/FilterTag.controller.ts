import { useTranslations } from 'next-intl';

export const useFilterTag = () => {
  const t = useTranslations('Index');

  return { t };
};
