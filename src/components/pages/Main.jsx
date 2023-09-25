import React, { useEffect, useState } from 'react';

import {
  changeViewType,
  changeValue,
  changeComment,
} from '../../redux-state/reducers/view-type-for-main';

import { useSelector, useDispatch } from 'react-redux';

import FooterContext from '../../redux-state/contect/footerContext';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Footer from '../views/global/Footer';
import InputComponent from '../comps/Input';
import css from '../../styles/form.css';

import { useRef } from 'react';

const { FormContainer, Button, Input } = css;

const Main = (props) => {
  const { action } = props;

  const valueInput = useRef();
  const [footerText, setFooterText] = useState('Курс по основам REACT JS');

  const dispatch = useDispatch();
  const viewType = useSelector((state) => state.viewTypeMain.viewType);
  const viewValue = useSelector((state) => state.viewTypeMain.value);
  const viewComment = useSelector((state) => state.viewTypeMain.comment);

  const validation = () => {
    if (viewValue.length > 2 && viewType) {
      console.log('валидация прошла успешно');

      const dataLine = `${viewValue}::${viewType}::${viewComment}`;

      action(dataLine);

      dispatch(changeValue(''));
      dispatch(changeViewType('доход'));
      dispatch(changeComment(''));
    } else {
      console.log('валидация прошла не успешно');
    }
  };

  const handleChange = (event) => {
    dispatch(changeViewType(event.target.value));
  };

  const handleChangeValue = (param) => {
    dispatch(changeValue(param));
  };

  const handleChangeComment = (param) => {
    dispatch(changeComment(param));
  };

  const handleChangeCommentRadio = (event) => {
    dispatch(changeComment(event.target.value));
  };

  const setFocus = () => {
    valueInput.current.disabled = false;
    valueInput.current.focus();
  };

  useEffect(() => {
    console.log(viewType);
  }, [viewType]);

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: 'flex-start' }}>
        {/*-------------------------------------------- */}
        <Button
          backgroundColor={'rgb(176,243,71)'}
          onClick={setFocus}
          style={{ marginBottom: '12px' }}
        >
          Начать заполнение
        </Button>
        <Input
          ref={valueInput}
          value={viewValue}
          type={'text'}
          placeholder={'Введите сумму транзакции'}
          maxLength={'100'}
          disabled
          onChange={(event) => {
            const newValue = event.target.value;
            handleChangeValue(newValue);
          }}
        ></Input>
        {/*-------------------------------------------- */}
        <InputComponent
          ref={valueInput}
          inputValue={viewValue}
          action={handleChangeValue}
          placeholder={'Введите сумму транзакции'}
        />
        <FormControl style={{ marginTop: '9px', marginBottom: '12px' }}>
          <FormLabel id='demo-controlled-radio-buttons-group'>
            Выберите тип транзакции
          </FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={viewType}
            onChange={handleChange}
            style={{ marginTop: '5px', marginLeft: '6px' }}
          >
            <FormControlLabel
              value='расход'
              control={<Radio />}
              label='расход'
            />
            <FormControlLabel value='доход' control={<Radio />} label='доход' />
          </RadioGroup>
        </FormControl>
        {viewType === 'доход' && (
          <InputComponent
            inputValue={viewComment}
            action={handleChangeComment}
            placeholder={'Введите комментарии'}
          />
        )}
        {viewType === 'расход' && (
          <FormControl style={{ marginTop: '0px', marginBottom: '14px' }}>
            <FormLabel id='demo-controlled-radio-buttons-group'>
              Выберите тип расходов
            </FormLabel>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={viewComment}
              onChange={handleChangeCommentRadio}
              style={{ marginTop: '5px', marginLeft: '6px' }}
            >
              <FormControlLabel
                value='покупка продуктов'
                control={<Radio />}
                label='покупка продуктов'
              />
              <FormControlLabel
                value='оплата счетов'
                control={<Radio />}
                label='оплата счетов'
              />
              <FormControlLabel
                value='покупка одежды'
                control={<Radio />}
                label='покупка одежды'
              />
              <FormControlLabel
                value='расходы на транспорт'
                control={<Radio />}
                label='расходы на транспорт'
              />
              <FormControlLabel
                value='развлечения'
                control={<Radio />}
                label='развлечения'
              />
              <FormControlLabel
                value='путешествия'
                control={<Radio />}
                label='путешествия'
              />
            </RadioGroup>
          </FormControl>
        )}
        <Button
          backgroundColor={
            viewValue.length < 3
              ? 'rgb(229, 229, 229)'
              : viewType.length < 3
              ? 'rgb(229, 229, 229)'
              : 'rgb(176, 243, 71)'
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>

      {true && (
        <FooterContext.Provider value={[footerText, setFooterText]}>
          <Footer></Footer>
        </FooterContext.Provider>
      )}

      {false && (
        <FooterContext.Provider value={footerText}>
          <FooterContext.Consumer>
            {(value) => <Footer>{value}</Footer>}
          </FooterContext.Consumer>
        </FooterContext.Provider>
      )}
    </React.Fragment>
  );
};

export default Main;
