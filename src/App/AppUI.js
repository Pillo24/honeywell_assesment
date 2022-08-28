import React, {useContext, useState} from 'react'
import { DataContext } from '../state/dataContext';
import Login from '../views/Login';
import Singup from '../views/Singup';
import Success from '../views/Success';

const AppUI = () => {
  const { onSuccess, view } = useContext(DataContext);
  
  return(
    <>
      {!!onSuccess ? <Success />
        : 
      (!!view ? <Login /> : <Singup /> ) 
      }
    </>
  )
};

export default AppUI;
