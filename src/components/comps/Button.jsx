import React from 'react';

const buttonCss = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#B0F347',
  cursor: 'pointer',
  marginLeft: '10px',
};

const Button = (props) => {
  const { inner } = props;
  return <button style={buttonCss}>{inner}</button>;
};

export default Button;
