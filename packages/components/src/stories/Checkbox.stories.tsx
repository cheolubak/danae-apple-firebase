import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '../checkbox/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger'],
      controls: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const DefaultCheckbox: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>checkbox</Checkbox>
);
DefaultCheckbox.args = {};
