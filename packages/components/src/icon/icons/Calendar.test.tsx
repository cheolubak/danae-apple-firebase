import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Calendar from './Calendar';

describe('Calendar Icon', () => {
  it('should render calendar', () => {
    const { container } = render(<Icon icon="calendar" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Calendar />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
