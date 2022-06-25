import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Home from './Home';

describe('Home Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="home" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Home />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
