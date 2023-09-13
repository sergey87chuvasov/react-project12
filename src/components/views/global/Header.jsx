import React from 'react';
import { Link } from 'react-router-dom';
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

const Header = () => {
  // const { action } = props;
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCSS.Logo>FINN MANAGER</HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <button style={buttonsCss}>
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to={'/main'}
            >
              Главная
            </Link>
          </button>
          <button style={buttonsCss}>
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to={'/stat'}
            >
              Статистика
            </Link>
          </button>
          <button style={buttonsCss}>
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to={'/plan'}
            >
              Планирование
            </Link>
          </button>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
