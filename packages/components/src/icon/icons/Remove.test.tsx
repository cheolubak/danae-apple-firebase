import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Remove from './Remove';

describe('Remove Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="remove" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Remove />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
