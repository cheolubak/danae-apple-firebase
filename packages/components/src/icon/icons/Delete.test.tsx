import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Delete from './Delete';

describe('Delete Icon', () => {
  it('should render delete', () => {
    const { container } = render(<Icon icon="delete" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Delete />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
