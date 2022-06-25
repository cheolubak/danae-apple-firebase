import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import AddOutline from './AddOutline';

describe('AddOutline Icon', () => {
  it('should render add outline icon', () => {
    const { container } = render(<Icon icon="add-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<AddOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
