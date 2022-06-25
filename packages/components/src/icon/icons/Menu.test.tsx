import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Menu from './Menu';

describe('Menu Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="menu" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Menu />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
