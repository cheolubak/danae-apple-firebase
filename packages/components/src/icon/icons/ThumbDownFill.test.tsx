import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ThumbDownFill from './ThumbDownFill';

describe('ThumbDownFill Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="thumb-down-fill" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ThumbDownFill />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
