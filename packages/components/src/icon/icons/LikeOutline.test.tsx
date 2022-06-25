import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import LikeOutline from './LikeOutline';

describe('LikeOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="like-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<LikeOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
