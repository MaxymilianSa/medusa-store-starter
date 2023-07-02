import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Commons/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Hot: Story = {
  args: {
    variant: 'hot',
  },
};

export const New: Story = {
  args: {
    variant: 'new',
  },
};

export const Popular: Story = {
  args: {
    variant: 'popular',
  },
};
