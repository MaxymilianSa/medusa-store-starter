import type { Meta, StoryObj } from '@storybook/react';

import { CircleButton } from './CircleButton';

const meta: Meta<typeof CircleButton> = {
  title: 'Commons/CircleButton',
  component: CircleButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CircleButton>;

export const Large: Story = {
  args: {
    size: 'large',
    iconName: 'cart',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    iconName: 'cart',
  },
};
