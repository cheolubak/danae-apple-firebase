import React, { ReactElement, useEffect, useReducer, useState } from 'react';
import DropdownOption from '../dropdown-option/DropdownOption';
import Overlay from '../overlay/Overlay';
import './Dropdown.scss';

interface DropdownProps {
  placeholder?: string;
  children: ReactElement;
}

function Dropdown({ placeholder, children, ...props }: DropdownProps) {
  const [focus, setFocus] = useState<boolean>(false);
  const [selected, setSelected] =
    useState<{ title: string; value: any } | null>(null);

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
  }

  function clickDropdown() {
    onFocus();
  }

  function selectedOption({
    title,
    value,
  }: {
    title: string;
    value: any;
  }): void {
    setSelected({ title, value });
    onBlur();
  }

  return (
    <>
      {focus && <Overlay onClick={onBlur} />}
      <button
        className={`dropdown${focus ? ' ' + 'focus' : ''}`}
        onClick={clickDropdown}
      >
        <span className={!!selected ? '' : 'placeholder'}>
          {!!selected ? selected.title : placeholder ?? '선택해주세요'}
        </span>
        {React.cloneElement(children, {
          style: { display: focus ? 'block' : 'none' },
          children: children.props.children.map(
            (x: ReactElement<typeof DropdownOption>, idx: number) => {
              return React.cloneElement(x, {
                key: idx,
                ...{
                  selectedValue: selectedOption,
                },
              });
            },
          ),
        })}
      </button>
    </>
  );
}

export default Dropdown;
