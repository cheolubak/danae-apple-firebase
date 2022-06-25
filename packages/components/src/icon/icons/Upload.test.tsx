import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Upload from './Upload';

describe('Upload Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="upload" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Upload />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
