import React, { useState } from 'react';
import Footer from '../views/global/Footer';
import DataList from '../views/local/DataList';
import DataChart from '../views/local/DataChart';

const Stat = (props) => {
  const { statData } = props;
  const [isShowChart, setIsShowChart] = useState(true);
  return (
    <React.Fragment>
      <DataList setShow={setIsShowChart} data={statData}></DataList>
      <DataChart show={isShowChart} data={statData} />
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Stat;
