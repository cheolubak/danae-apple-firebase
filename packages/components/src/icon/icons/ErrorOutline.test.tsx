import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ErrorOutline from './ErrorOutline';

describe('ErrorOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="error-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ErrorOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
