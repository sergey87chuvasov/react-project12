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
        <Route path={'/stat/:viewType'} element={<Stat statData={data} />} />
        <Route path={'/plan'} element={<Plan statData={data} />} />
        <Route path={'*'} element={<Main action={setData} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
