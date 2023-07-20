import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Commons/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'pastel',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    color: 'pastel',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'pastel',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    color: 'pastel',
  },
};

export const FullWidth: Story = {
  args: {
    size: 'full',
    color: 'pastel',
  },
};
