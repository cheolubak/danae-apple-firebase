import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ArrowRight from './ArrowRight';

describe('ArrowRight Icon', () => {
  it('should render arrow left', () => {
    const { container } = render(<Icon icon="arrow-right" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ArrowRight />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
