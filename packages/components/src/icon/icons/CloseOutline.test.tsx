import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import CloseOutline from './CloseOutline';

describe('CloseOutline Icon', () => {
  it('should render close outline', () => {
    const { container } = render(<Icon icon="close-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<CloseOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
