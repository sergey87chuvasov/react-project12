import React from 'react';
// import { useNavigate } from 'react-router-dom';
import css from '../../../styles/styles.css';

import HOCButton from '../../comps/HOCHeaderButton';
import Button from '../../comps/Button';

const HOCButtonComponent = HOCButton(Button);

const { HeaderContainer, HeaderCSS } = css;

// const buttonsCss = {
//   display: 'block',
//   padding: '10px 14px 12px',
//   borderRadius: '6px',
//   backgroundColor: '#B0F347',
//   cursor: 'pointer',
//   marginLeft: '10px',
//   outline: 'none',
// };

const Header = () => {
  // const navigate = useNavigate();

  // const [inner, setInner] = useState(0);

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCSS.Logo>FINN MANAGER</HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <HOCButtonComponent
            text={'/main'}
            onClick={() => console.log('переход по маршруту /main')}
          >
            Главная
          </HOCButtonComponent>
          <HOCButtonComponent
            text={'/stat/расход'}
            onClick={() => console.log('переход по маршруту /stat/расход')}
          >
            Статистика
          </HOCButtonComponent>
          <HOCButtonComponent
            text={'/plan'}
            onClick={() => console.log('переход по маршруту /plan')}
          >
            Планирование
          </HOCButtonComponent>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
