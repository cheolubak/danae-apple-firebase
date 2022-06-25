import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ArrowDown from './ArrowDown';

describe('ArrowDown Icon', () => {
  it('should render arrow down icon', () => {
    const { container } = render(<Icon icon="arrow-down" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ArrowDown />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
