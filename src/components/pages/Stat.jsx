import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../views/global/Footer';
import DataList from '../views/local/DataList';
import DataChart from '../views/local/DataChart';

const Stat = (props) => {
  const { statData } = props;
  const [isShowChart, setIsShowChart] = useState(true);
  const { viewType } = useParams();
  return (
    <React.Fragment>
      <DataList
        viewType={viewType}
        setShow={setIsShowChart}
        data={statData}
      ></DataList>
      <DataChart viewType={viewType} show={isShowChart} data={statData} />
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Stat;
