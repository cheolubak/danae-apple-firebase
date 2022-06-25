import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Find from './Find';

describe('Find Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="find" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Find />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
