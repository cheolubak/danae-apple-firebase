import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from './Icon';
import './Icon.scss';

describe('<Icon/>', () => {
  it('render default', () => {
    const { container } = render(<Icon icon="add" />);

    expect(container.firstChild).toMatchSnapshot();

    expect(container.firstChild).toHaveStyle({
      fontSize: '24px',
    });

    expect(container.firstElementChild?.getAttribute('data-color')).toBe(null);
  });

  it('render primary', () => {
    const { container } = render(<Icon icon="add" color="primary" />);

    expect(container.firstChild).toMatchSnapshot();

    expect(container.firstElementChild?.getAttribute('data-color')).toBe(
      'primary',
    );
  });

  it('render secondary', () => {
    const { container } = render(<Icon icon="add" color="secondary" />);

    expect(container.firstChild).toMatchSnapshot();

    expect(container.firstElementChild?.getAttribute('data-color')).toBe(
      'secondary',
    );
  });

  it('danger primary', () => {
    const { container } = render(<Icon icon="add" color="danger" />);

    expect(container.firstChild).toMatchSnapshot();

    expect(container.firstElementChild?.getAttribute('data-color')).toBe(
      'danger',
    );
  });

  it('black primary', () => {
    const { container } = render(<Icon icon="add" color="black" />);

    expect(container.firstChild).toMatchSnapshot();

    expect(container.firstElementChild?.getAttribute('data-color')).toBe(
      'black',
    );
  });

  it('change size render', () => {
    const test = [18, 24, 32, 40, 48];
    test.forEach((x) => {
      const { container } = render(<Icon icon="add" color="black" size={x} />);
      expect(container.firstChild).toHaveStyle({
        fontSize: `${x}px`,
      });
    });
  });
});
