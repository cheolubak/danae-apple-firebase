import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Money from './Money';

describe('Money Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="money" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Money />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
