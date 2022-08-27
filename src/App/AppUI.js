import React, {useContext} from 'react'
import { DataContext } from '../state/dataContext';
import Singup from '../views/Singup';

const Form = () => {
  const { onSuccess } = useContext(DataContext);
    
  return(
    <>
      {!!onSuccess ? 
        <p>SUCCESSSSSSS</p>
        : 
        <Singup />
      }
    </>
  )
};

export default Form;
