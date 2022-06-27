import React, { ReactNode } from 'react';
import { Value } from 'sass';
import './DropdownOption.scss';

interface DropdownOptionProps {
  children: string;
  value: any;
  selectedValue: ({ title, value }: { title: string; value: any }) => void;
}

function DropdownOption({
  children,
  value,
  selectedValue,
  ...props
}: DropdownOptionProps) {
  return (
    <li
      className="option"
      onClick={() => selectedValue({ title: children, value })}
    >
      {children}
    </li>
  );
}
export default DropdownOption;
