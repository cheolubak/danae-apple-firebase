import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ExpandMore from './ExpandMore';

describe('ExpandMore Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="expand-more" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ExpandMore />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
