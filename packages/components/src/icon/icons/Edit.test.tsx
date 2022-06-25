import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Edit from './Edit';

describe('Edit Icon', () => {
  it('should render edit', () => {
    const { container } = render(<Icon icon="edit" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Edit />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
