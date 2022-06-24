import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '../input/Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

export const TextInput: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
TextInput.args = { type: 'text', placeholder: '내용을 입력해주세요' };

export const FileInput: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
FileInput.args = { type: 'file', placeholder: '파일을 선택해주세요' };
