import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import BookmarkOff from './BookmarkOff';

describe('BookmarkOff Icon', () => {
  it('should render bookmark off', () => {
    const { container } = render(<Icon icon="bookmark-off" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<BookmarkOff />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
