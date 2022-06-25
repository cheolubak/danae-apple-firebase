import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Idea from './Idea';

describe('Idea Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="idea" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Idea />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
