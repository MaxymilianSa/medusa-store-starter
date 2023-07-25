'use client';

import { useTranslations } from 'next-intl';

import { Tag } from './commons/Tag/Tag';

const TagsExample = () => {
  const t = useTranslations('Index');

  const handleClose = () => {
    console.log('close');
  };

  return (
    <div>
      <Tag label={t('tags.status.done')} />
      <Tag variant='hot' label={t('tags.status.done')} />
      <Tag variant='new' label={t('tags.status.done')} />
      <Tag variant='popular' label={t('tags.status.done')} />
      <Tag variant='normal' label={t('tags.status.done')} />
      <Tag variant='active' label={t('tags.status.done')} />
      <Tag
        variant='activeOrder'
        label='En route'
        iconName='truck'
        iconClassName='text-dark-pastel'
      />
      <Tag
        variant='activeOrder'
        label='New order'
        iconName='document'
        iconClassName='text-dark-pastel'
      />
      <Tag
        variant='inactiveOrder'
        label='Cancelled'
        iconName='cancel'
        iconPosition='append'
      />
      <Tag
        variant='inactiveOrder'
        label='Done'
        iconName='validated'
        iconPosition='append'
      />

      <Tag
        handleClose={handleClose}
        variant='selected'
        label={t('tags.status.color')}
      />
    </div>
  );
};
export default TagsExample;
