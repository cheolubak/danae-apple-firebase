import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Chart from './Chart';

describe('Chart Icon', () => {
  it('should render chart', () => {
    const { container } = render(<Icon icon="chart" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Chart />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
