import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('<Button/>', () => {
  it('render default', () => {
    const { container } = render(<Icon icon="add" size={24} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
