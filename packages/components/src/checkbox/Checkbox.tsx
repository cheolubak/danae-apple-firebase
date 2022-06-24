import React, { ReactNode } from 'react';
import './Checkbox.scss';

interface CheckboxProps {
  color?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
}

function Checkbox({ color, ...props }: CheckboxProps) {
  return (
    <label className="checkbox" data-color={color ?? 'primary'}>
      <input type="checkbox" />
      <span className="checkmark" />
      {props.children}
    </label>
  );
}

export default Checkbox;
