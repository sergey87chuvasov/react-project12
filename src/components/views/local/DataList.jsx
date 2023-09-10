import React, { useEffect, useState } from 'react';
import css from '../../../styles/dataList.css';

const { DataContainer, ContentCell, ContentLine, ButtonsLine, ButtonItem } =
  css;

const DataList = (props) => {
  const { data = [] } = props;
  const [dataType, setDataType] = useState('расход');
  const filterData = data.filter((item) => item.split('::')[1] === dataType);
  const filterDataSumm = data
    .filter((item) => item.split('::')[1] === dataType)
    .reduce((summ, item) => {
      return (
        summ +
        +(item.split('::')[0].split(' ')[0] + item.split('::')[0].split(' ')[1])
      );
    }, 0);

  const filterDataDelta = data.reduce((summ, item) => {
    if (item.split('::')[1] === 'доход') {
      return (
        summ +
        +(item.split('::')[0].split(' ')[0] + item.split('::')[0].split(' ')[1])
      );
    } else {
      return (
        summ -
        +(item.split('::')[0].split(' ')[0] + item.split('::')[0].split(' ')[1])
      );
    }
  }, 0);

  const reduceDataType1 = () => setDataType('доход');
  const reduceDataType2 = () => setDataType('расход');
  const reduceDataType3 = () => setDataType('');

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <React.Fragment>
      <ButtonsLine>
        <ButtonItem onClick={reduceDataType1}>доходы</ButtonItem>
        <ButtonItem onClick={reduceDataType2}>расходы</ButtonItem>
        <ButtonItem onClick={reduceDataType3}>общее</ButtonItem>
      </ButtonsLine>
      <DataContainer>
        {filterData.length > 0 && (
          <React.Fragment>
            {filterData.map((item, index) => {
              return (
                <ContentLine key={index} style={{ marginBottom: '10px' }}>
                  <ContentCell width={'20%'}>{item.split('::')[0]}</ContentCell>
                  <ContentCell width={'20%'}>{item.split('::')[1]}</ContentCell>
                  <ContentCell width={'60%'}>{item.split('::')[2]}</ContentCell>
                </ContentLine>
              );
            })}
            <ContentLine>
              <ContentCell width={'20%'}>{filterDataSumm}</ContentCell>
              <ContentCell width={'20%'}>--</ContentCell>
              <ContentCell width={'60%'}>--</ContentCell>
            </ContentLine>
          </React.Fragment>
        )}
        {filterData.length === 0 && (
          <React.Fragment>
            {data.map((item, index) => {
              return (
                <ContentLine key={index} style={{ marginBottom: '10px' }}>
                  <ContentCell width={'20%'}>{item.split('::')[0]}</ContentCell>
                  <ContentCell width={'20%'}>{item.split('::')[1]}</ContentCell>
                  <ContentCell width={'60%'}>{item.split('::')[2]}</ContentCell>
                </ContentLine>
              );
            })}
            <ContentLine>
              <ContentCell width={'20%'}>{filterDataDelta}</ContentCell>
              <ContentCell width={'20%'}>--</ContentCell>
              <ContentCell width={'60%'}>--</ContentCell>
            </ContentLine>
          </React.Fragment>
        )}
      </DataContainer>
    </React.Fragment>
  );
};

export default DataList;
