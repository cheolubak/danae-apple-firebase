import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'danger', 'default'],
      control: { type: 'radio' },
    },
    type: {
      options: ['text', 'fill', 'outline'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

export const TextButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>BUTTON</Button>
);
TextButton.args = { theme: 'default', type: 'text', size: 'large' };

export const FillButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>BUTTON</Button>
);
FillButton.args = { theme: 'primary', type: 'fill', size: 'large' };

export const OutlineButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>BUTTON</Button>
);
OutlineButton.args = { theme: 'default', type: 'outline', size: 'large' };
