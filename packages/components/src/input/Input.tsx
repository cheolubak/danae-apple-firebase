import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'file' | 'number' | 'email';
  accept?: string;
  maxlength?: number;
  pattern?: string;
  value?: any | File;
  name?: string;
  onChange: () => void;
}

function Input({
  placeholder,
  type,
  maxlength,
  accept,
  value,
  name,
  ...props
}: InputProps) {
  const [val, setVal] = useState(value);
  useEffect(() => {
    setVal(value);
  }, [value]);

  function changeFile(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const files = target.files;
    if (!!files && files.length > 0) {
      setVal(files[0]);
    }
  }
  return (
    <>
      {type !== 'file' ? (
        <input
          className="input"
          name={name}
          type={type ?? 'text'}
          placeholder={placeholder ?? '내용을 입력해주세요'}
          maxLength={maxlength}
        />
      ) : (
        <label className="input input-file">
          {!!val ? (
            <span className="file-name">{(val as File).name}</span>
          ) : (
            <span className="placeholder">
              {placeholder ?? '파일을 선택해주세요'}
            </span>
          )}
          <input
            type="file"
            name={name}
            accept={accept ?? '*/*'}
            onChange={changeFile}
          />
        </label>
      )}
    </>
  );
}

export default Input;
