import React from 'react';
import './Button.scss';

type ButtonProps = {
  theme?: 'default' | 'primary' | 'secondary' | 'warn';
  children?: React.ReactNode;
  type?: 'text' | 'fill' | 'outline';
  size?: 'large' | 'middle' | 'small';
};

function Button({
  theme = 'default',
  type = 'text',
  size = 'middle',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className="btn"
      type="button"
      data-theme={theme}
      data-type={type}
      data-size={size}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
