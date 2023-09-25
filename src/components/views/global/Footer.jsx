import React, { useContext } from 'react';
import css from '../../../styles/styles.css';
import FooterContext from '../../../redux-state/contect/footerContext';

const { FooterContainer } = css;

const Footer = ({ children }) => {
  const [footerText, setFooterText] = useContext(FooterContext);
  return (
    <React.Fragment>
      <FooterContainer
        onClick={() => setFooterText('Новый текст для подвала')}
        style={{ justifyContent: 'space-around', fontSize: '14px' }}
      >
        {footerText}
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
