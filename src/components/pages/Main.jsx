import React from 'react';
import Header from '../views/global/Header';
import Footer from '../views/global/Footer';
import InputComponent from '../comps/Input';
import css from '../../styles/form.css';

const { FormContainer } = css;

const Main = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <FormContainer>
        <InputComponent placeholder={'Введите сумму транзакции'} />
        <InputComponent placeholder={'Введите тип транзакции'} />
        <InputComponent placeholder={'Введите комментарии'} />
      </FormContainer>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Main;
