import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Commons/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'text',
    variant: 'secondary',
    icon: 'small-chevron',
  },
};

export const DefaultSingle: Story = {
  args: {
    children: 'text',
    variant: 'secondary',
  },
};

export const Opened: Story = {
  args: {
    children: 'text',
    variant: 'primary',
    icon: 'small-chevron',
    iconClassName: 'rotate-180',
    opened: 'opened',
  },
};
