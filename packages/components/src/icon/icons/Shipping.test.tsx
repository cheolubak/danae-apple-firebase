import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Shipping from './Shipping';

describe('Shipping Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="shipping" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Shipping />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
