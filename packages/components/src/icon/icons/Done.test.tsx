import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Done from './Done';

describe('Done Icon', () => {
  it('should render done', () => {
    const { container } = render(<Icon icon="done" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Done />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
