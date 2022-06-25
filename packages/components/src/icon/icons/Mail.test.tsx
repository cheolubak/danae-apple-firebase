import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Mail from './Mail';

describe('Mail Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="mail" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Mail />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
