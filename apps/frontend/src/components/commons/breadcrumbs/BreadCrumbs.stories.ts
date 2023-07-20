import type { Meta, StoryObj } from '@storybook/react';

import { BreadCrumbs } from './BreadCrumbs';

const meta: Meta<typeof BreadCrumbs> = {
  title: 'Commons/BreadCrumbs',
  component: BreadCrumbs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BreadCrumbs>;

export const Primary: Story = {
  args: {
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Textile',
        href: '/',
      },
      {
        label: 'Armchair, fleece ',
      },
    ],
  },
};
