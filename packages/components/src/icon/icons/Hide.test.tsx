import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Hide from './Hide';

describe('Hide Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="hide" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Hide />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});