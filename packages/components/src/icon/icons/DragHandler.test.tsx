import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import DragHandler from './DragHandler';

describe('DragHandler Icon', () => {
  it('should render draghandler', () => {
    const { container } = render(<Icon icon="drag-handler" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<DragHandler />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
