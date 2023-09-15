import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Plan = () => {
  const { demoParam } = useParams();

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    console.log(demoParam);
    setParams({ userName: 'Serge', userAge: '333' });
  }, [demoParam, setParams]);

  return (
    <React.Fragment>
      <span
        style={{ marginTop: '100px', marginLeft: '130px', display: 'block' }}
      >
        имя пользователя - {params.get('userName')}
      </span>
      <span
        style={{ marginTop: '50px', marginLeft: '130px', display: 'block' }}
      >
        возраст пользователя - {params.get('userAge')}
      </span>
    </React.Fragment>
  );
};

export default Plan;
