import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Download from './Download';

describe('Download Icon', () => {
  it('should render download', () => {
    const { container } = render(<Icon icon="download" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Download />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
