import React from 'react';

const HOCButton = (ButtonComponent) => {
  return (props) => {
    const click = () => {
      props.onClick();
    };
    return <ButtonComponent {...props} onClick={click} />;
  };
};

export default HOCButton;
