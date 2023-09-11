import React, { useEffect, useState } from 'react';
import css from '../../../styles/dataList.css';

const { DataContainer, ContentCell, ContentLine, ButtonsLine, ButtonItem } =
  css;

const DataList = (props) => {
  const { data = [], setShow } = props;
  const [dataType, setDataType] = useState('расход');
  const filterData = data.filter((item) => item.split('::')[1] === dataType);
  const filterDataSumm = data
    .filter((item) => item.split('::')[1] === dataType)
    .reduce((summ, item) => {
      // console.log('filterDataSumm', item);
      // console.log(summ);
      // console.log(item.split('::')[0]);
      return (
        summ +
        +(item.split('::')[0].split(' ')[0] + item.split('::')[0].split(' ')[1])
      );
    }, 0);

  const filterDataDelta = data.reduce((summ, item) => {
    // console.log(item);
    if (item.split('::')[1] === 'доход') {
      // console.log(item);
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

  // console.log(filterDataDelta);

  const reduceDataType1 = () => {
    setDataType('доход');
    setShow(false);
  };
  const reduceDataType2 = () => {
    setDataType('расход');
    setShow(true);
  };
  const reduceDataType3 = () => setDataType('');

  useEffect(() => {
    // console.log(data);
  }, []);

  return (
    <React.Fragment>
      <ButtonsLine>
        <ButtonItem
          style={{ fontWeight: dataType === 'доход' ? 'bold' : '' }}
          onClick={reduceDataType1}
        >
          доходы
        </ButtonItem>
        <ButtonItem
          style={{ fontWeight: dataType === 'расход' ? 'bold' : '' }}
          onClick={reduceDataType2}
        >
          расходы
        </ButtonItem>
        <ButtonItem
          style={{ fontWeight: dataType === '' ? 'bold' : '' }}
          onClick={reduceDataType3}
        >
          общее
        </ButtonItem>
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
