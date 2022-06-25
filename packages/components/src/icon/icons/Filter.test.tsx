import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Filter from './Filter';

describe('Filter Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="filter" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Filter />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
