import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import ArrowDropUp from './ArrowDropUp';

describe('ArrowDropUp Icon', () => {
  it('should render arrow drop up icon', () => {
    const { container } = render(<Icon icon="arrow-drop-up" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<ArrowDropUp />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
