import React, { useState } from 'react';
import Main from './components/pages/Main';
import Header from './components/views/global/Header';
import Stat from './components/pages/Stat';

function App() {
  const [showPage, setShowPage] = useState('main');
  const [data, setData] = useState([]);
  return (
    <React.Fragment>
      <Header action={setShowPage}></Header>
      {showPage === 'main' ? (
        <Main action={setData}></Main>
      ) : (
        <Stat statData={data}></Stat>
      )}
    </React.Fragment>
  );
}

export default App;
