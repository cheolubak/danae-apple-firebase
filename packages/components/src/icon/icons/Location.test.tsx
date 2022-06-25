import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Location from './Location';

describe('Location Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="location" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Location />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
