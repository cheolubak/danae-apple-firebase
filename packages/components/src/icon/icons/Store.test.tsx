import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Store from './Store';

describe('Store Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="store" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Store />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
