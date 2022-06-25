import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Photo from './Photo';

describe('Photo Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="photo" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Photo />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
