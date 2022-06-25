import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Show from './Show';

describe('Show Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="show" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Show />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
