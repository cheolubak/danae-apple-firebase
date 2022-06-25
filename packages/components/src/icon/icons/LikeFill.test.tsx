import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import LikeFill from './LikeFill';

describe('LikeFill Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="like-fill" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<LikeFill />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
