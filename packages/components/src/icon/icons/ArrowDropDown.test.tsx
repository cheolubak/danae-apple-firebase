import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ArrowDropDown from './ArrowDropDown';

describe('ArrowDropDown Icon', () => {
  it('should render arrow drop down icon', () => {
    const { container } = render(<Icon icon="arrow-drop-down" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ArrowDropDown />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
