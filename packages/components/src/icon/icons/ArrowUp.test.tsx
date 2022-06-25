import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ArrowUp from './ArrowUp';

describe('ArrowUp Icon', () => {
  it('should render arrow up', () => {
    const { container } = render(<Icon icon="arrow-up" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ArrowUp />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
