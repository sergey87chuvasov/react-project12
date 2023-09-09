import React from 'react';
import css from '../../../styles/styles.css';

const { HeaderContainer, HeaderCSS } = css;

const buttonsCss = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#B0F347',
  cursor: 'pointer',
  marginLeft: '10px',
  outline: 'none',
};

const Header = (props) => {
  const { action } = props;
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCSS.Logo>FINN MANAGER</HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <button onClick={() => action('main')} style={buttonsCss}>
            Главная
          </button>
          <button onClick={() => action('stat')} style={buttonsCss}>
            Статистика
          </button>
          <button style={buttonsCss}>Планирование</button>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
