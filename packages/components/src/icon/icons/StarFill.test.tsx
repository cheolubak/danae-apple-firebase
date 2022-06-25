import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import StarFill from './StarFill';

describe('StarFill Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="star-fill" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<StarFill />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
