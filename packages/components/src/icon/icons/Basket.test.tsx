import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Basket from './Basket';

describe('Basket Icon', () => {
  it('should render basket', () => {
    const { container } = render(<Icon icon="basket" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Basket />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
