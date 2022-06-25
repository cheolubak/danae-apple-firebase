import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Gift from './Gift';

describe('Gift Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="gift" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Gift />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
