import React, { CSSProperties, ReactNode } from 'react';
import './DropdownOptionGroup.scss';

interface DropdownOptionGroupProps {
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

function DropdownOptionGroup({
  children,
  style,
  ...props
}: DropdownOptionGroupProps) {
  return (
    <ul className="option-group" style={style}>
      {children}
    </ul>
  );
}

export default DropdownOptionGroup;
