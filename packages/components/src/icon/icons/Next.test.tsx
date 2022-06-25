import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Next from './Next';

describe('Next Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="next" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Next />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
