import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Add from './Add';

describe('Add Icon', () => {
  it('should render add icon', () => {
    const { container } = render(<Icon icon="add" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Add />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
