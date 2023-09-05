import React, { useState } from 'react';
import css from '../../styles/form.css';

const { Input } = css;

const InputComponent = (props) => {
  const { placeholder } = props;
  const [inputValue, setInputValue] = useState(0);

  return (
    <React.Fragment>
      <Input
        type={'text'}
        placeholder={placeholder}
        maxLength={'100'}
        onChange={(e) => {
          const newValue = e.target.value;
          setInputValue(newValue);
        }}
      />
      <span>{inputValue} BYN</span>
    </React.Fragment>
  );
};

export default InputComponent;
