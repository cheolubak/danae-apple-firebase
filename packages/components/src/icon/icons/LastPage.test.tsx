import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import LastPage from './LastPage';

describe('LastPage Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="last-page" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<LastPage />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
