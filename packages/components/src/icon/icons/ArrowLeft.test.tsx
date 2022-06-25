import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ArrowLeft from './ArrowLeft';

describe('ArrowDropUp Icon', () => {
  it('should render arrow left', () => {
    const { container } = render(<Icon icon="arrow-left" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ArrowLeft />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
