import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Send from './Send';

describe('Send Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="send" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Send />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
