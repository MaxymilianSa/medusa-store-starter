import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Commons/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    variant: 'medium',
    children: 'Hide items',
    href: '/',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'small link',
    href: '/',
  },
};
