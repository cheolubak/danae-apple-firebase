import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Close from './Close';

describe('Close Icon', () => {
  it('should render close', () => {
    const { container } = render(<Icon icon="close" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Close />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
