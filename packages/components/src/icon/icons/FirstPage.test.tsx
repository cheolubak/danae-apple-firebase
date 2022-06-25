import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import FirstPage from './FirstPage';

describe('FirstPage Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="first-page" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<FirstPage />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
