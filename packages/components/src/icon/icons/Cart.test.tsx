import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Cart from './Cart';

describe('Cart Icon', () => {
  it('should render cart', () => {
    const { container } = render(<Icon icon="cart" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Cart />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
