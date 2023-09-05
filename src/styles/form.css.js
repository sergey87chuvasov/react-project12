import styled from 'styled-components';

const css = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 600px;
    height: auto;
    min-height: 60px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 40px auto 40px;
    padding: 20px;
  `,
  Input: styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgb(229, 229, 229);
    border-radius: 5px;
    padding-left: 14px;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  `,
};

export default css;
