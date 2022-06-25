import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import StarHalf from './StarHalf';

describe('StarHalf Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="star-half" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<StarHalf />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
