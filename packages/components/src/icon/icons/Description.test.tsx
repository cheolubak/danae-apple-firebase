import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Description from './Description';

describe('Description Icon', () => {
  it('should render description', () => {
    const { container } = render(<Icon icon="description" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Description />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
