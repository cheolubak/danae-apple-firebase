import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Error from './Error';

describe('Error Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="error" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Error />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
