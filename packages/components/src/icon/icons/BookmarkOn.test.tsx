import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import BookmarkOn from './BookmarkOn';

describe('BookmarkOn Icon', () => {
  it('should render bookmark on', () => {
    const { container } = render(<Icon icon="bookmark-on" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<BookmarkOn />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
