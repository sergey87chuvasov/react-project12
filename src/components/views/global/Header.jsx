import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from '../../../styles/styles.css';

import HOCButton from '../../comps/HOCHeaderButton';
import Button from '../../comps/Button';

const HOCButtonComponent = HOCButton(Button);

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
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCSS.Logo>FINN MANAGER</HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <HOCButtonComponent
            onClick={() => console.log('hello')}
            inner={'demoButton'}
          ></HOCButtonComponent>
          <button onClick={() => navigate('/main')} style={buttonsCss}>
            Главная
          </button>
          <button onClick={() => navigate('/stat/расход')} style={buttonsCss}>
            Статистика
          </button>
          <button onClick={() => navigate('/plan')} style={buttonsCss}>
            Планирование
          </button>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
