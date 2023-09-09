import React from 'react';
import Footer from '../views/global/Footer';
import DataList from '../views/local/DataList';

const Stat = (props) => {
  const { statData } = props;
  return (
    <React.Fragment>
      <DataList data={statData}></DataList>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Stat;
