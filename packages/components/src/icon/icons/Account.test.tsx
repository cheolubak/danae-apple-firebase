import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Account from './Account';

describe('Account Icon', () => {
  it('should render account icon', () => {
    const { container } = render(<Icon icon="account" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Account />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
