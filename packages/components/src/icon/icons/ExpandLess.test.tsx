import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ExpandLess from './ExpandLess';

describe('ExpandLess Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="expand-less" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ExpandLess />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
