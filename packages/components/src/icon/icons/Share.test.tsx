import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import Share from './Share';

describe('Share Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="share" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<Share />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
