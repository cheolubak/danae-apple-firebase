import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Call from './Call';

describe('Call Icon', () => {
  it('should render call', () => {
    const { container } = render(<Icon icon="call" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Call />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
