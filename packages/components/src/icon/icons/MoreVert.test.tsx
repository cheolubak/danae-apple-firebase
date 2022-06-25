import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import MoreVert from './MoreVert';

describe('MoreVert Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="more-vert" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<MoreVert />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
