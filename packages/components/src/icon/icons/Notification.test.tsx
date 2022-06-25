import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Notification from './Notification';

describe('Notification Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="notification" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Notification />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
