import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import InfoOutline from './InfoOutline';

describe('InfoOutline Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="info-outline" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<InfoOutline />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
