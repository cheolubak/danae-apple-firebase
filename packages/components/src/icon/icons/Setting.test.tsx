import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Setting from './Setting';

describe('Setting Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="setting" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Setting />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
