import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Info from './Info';

describe('Info Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="info" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Info />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
