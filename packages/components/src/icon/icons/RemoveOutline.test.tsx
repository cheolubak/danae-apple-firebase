import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import RemoveOutline from './RemoveOutline';

describe('RemoveOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="remove-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<RemoveOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
