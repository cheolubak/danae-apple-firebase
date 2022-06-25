import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Help from './Help';

describe('Help Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="help" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Help />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
