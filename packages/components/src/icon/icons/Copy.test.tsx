import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Copy from './Copy';

describe('Copy Icon', () => {
  it('should render copy', () => {
    const { container } = render(<Icon icon="copy" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Copy />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
