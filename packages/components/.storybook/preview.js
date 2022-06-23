import React from 'react';
import '../src/styles/_Color.scss';
import '../src/styles/_Typography.scss';

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
