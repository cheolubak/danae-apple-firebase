import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Card from './Card';

describe('Card Icon', () => {
  it('should render card', () => {
    const { container } = render(<Icon icon="card" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Card />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
