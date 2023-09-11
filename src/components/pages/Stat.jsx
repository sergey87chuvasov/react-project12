import React from 'react';
import Footer from '../views/global/Footer';
import DataList from '../views/local/DataList';
import DataChart from '../views/local/DataChart';

const Stat = (props) => {
  const { statData } = props;
  return (
    <React.Fragment>
      <DataList data={statData}></DataList>
      <DataChart data={statData} />
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Stat;
