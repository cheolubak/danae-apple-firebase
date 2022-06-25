import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Person from './Person';

describe('Person Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="person" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Person />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
