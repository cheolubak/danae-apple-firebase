import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import HelpOutline from './HelpOutline';

describe('HelpOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="help-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<HelpOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
