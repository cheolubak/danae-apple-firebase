import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ThumbUpFill from './ThumbUpFill';

describe('ThumbUpFill Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="thumb-up-fill" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ThumbUpFill />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
