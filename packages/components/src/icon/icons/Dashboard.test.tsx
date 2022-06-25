import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Dashboard from './Dashboard';

describe('Dashboard Icon', () => {
  it('should render dashboard', () => {
    const { container } = render(<Icon icon="dashboard" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Dashboard />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
