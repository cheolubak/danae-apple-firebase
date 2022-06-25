import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Label from './Label';

describe('Label Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="label" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Label />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
