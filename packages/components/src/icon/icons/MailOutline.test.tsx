import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import MailOutline from './MailOutline';

describe('MailOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="mail-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<MailOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
