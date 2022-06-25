import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Exit from './Exit';

describe('Exit Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="exit" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Exit />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
