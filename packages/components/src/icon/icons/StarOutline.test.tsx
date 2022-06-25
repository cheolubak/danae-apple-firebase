import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import StarOutline from './StarOutline';

describe('StarOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="star-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<StarOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
