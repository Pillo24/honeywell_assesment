import React, {useState} from 'react';
import Singup from './views/Singup';

function App() {
  const [onSubmit, setOnSubmit] = useState(false);

  const submitForm = () => {
    setOnSubmit(true);
  };

  return (
    <>
      {!onSubmit ? 
        (<Singup submitForm={submitForm} />) 
        : 
        (<p>SUCCESSSSSSS</p>)
      }
    </>
  );
}

export default App;
