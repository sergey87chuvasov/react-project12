import styled from 'styled-components';

const css = {
  DataContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 40px auto 40px;
    padding: 20px;
  `,
  ContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
  `,
  ContentCell: styled.span`
    display: block;
    position: relative;
    font-size: 14px;
    width: ${(props) => props.width};
    text-align: center;
  `,
};

export default css;
