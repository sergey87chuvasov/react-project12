import React, { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Footer from '../views/global/Footer';
import InputComponent from '../comps/Input';
import css from '../../styles/form.css';

const { FormContainer, Button } = css;

const Main = (props) => {
  const { action } = props;

  const [value, setValue] = useState('');
  const [type, setType] = useState('доход');
  const [comment, setComment] = useState('');

  const validation = () => {
    if (value.length > 2 && type) {
      console.log('валидация прошла успешно');

      const dataLine = `${value}::${type}::${comment}`;

      action((prev) => [...prev, dataLine]);

      setValue('');
      setType('доход');
      setComment('');
    } else {
      console.log('валидация прошла не успешно');
    }
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: 'flex-start' }}>
        <InputComponent
          inputValue={value}
          action={setValue}
          placeholder={'Введите сумму транзакции'}
        />
        <FormControl style={{ marginTop: '9px', marginBottom: '12px' }}>
          <FormLabel id='demo-controlled-radio-buttons-group'>
            Выберите тип транзакции
          </FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={type}
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
        {/* <InputComponent
          inputValue={type}
          action={setType}
          placeholder={'Введите тип транзакции'}
        /> */}
        {type === 'доход' && (
          <InputComponent
            inputValue={comment}
            action={setComment}
            placeholder={'Введите комментарии'}
          />
        )}
        {type === 'расход' && (
          <FormControl style={{ marginTop: '0px', marginBottom: '14px' }}>
            <FormLabel id='demo-controlled-radio-buttons-group'>
              Выберите тип расходов
            </FormLabel>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={comment}
              onChange={handleChangeComment}
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
            value.length < 3
              ? 'rgb(229, 229, 229)'
              : type.length < 3
              ? 'rgb(229, 229, 229)'
              : 'rgb(176, 243, 71)'
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Main;
