import React from 'react';
import css from '../../styles/form.css';

const { Input } = css;

const InputComponent = (props) => {
  const { placeholder } = props;
  return (
    <React.Fragment>
      <Input type={'text'} placeholder={placeholder} maxLength={'100'} />
    </React.Fragment>
  );
};

export default InputComponent;
