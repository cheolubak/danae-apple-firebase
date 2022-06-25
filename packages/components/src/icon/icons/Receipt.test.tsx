import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Receipt from './Receipt';

describe('Receipt Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="receipt" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Receipt />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
