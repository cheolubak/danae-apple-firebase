import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Prev from './Prev';

describe('Prev Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="prev" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Prev />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
