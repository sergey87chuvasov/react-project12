import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main';
import Header from './components/views/global/Header';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan';

function App() {
  const [, setShowPage] = useState('main');
  const [data, setData] = useState([]);

  return (
    <React.Fragment>
      <Header action={setShowPage}></Header>
      <Routes>
        <Route path={'/main'} element={<Main action={setData} />} />
        <Route path={'/stat'} element={<Stat statData={data} />} />
        <Route path={'/plan/:demoParam'} element={<Plan />} />
      </Routes>
      {/* <Header action={setShowPage}></Header> */}
      {/* {showPage === 'main' ? (
        <Main action={setData}></Main>
      ) : showPage === 'stat' ? (
        <Stat statData={data}></Stat>
      ) : (
        <Plan></Plan>
      )} */}
    </React.Fragment>
  );
}

export default App;
