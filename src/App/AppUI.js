import React, {useContext, useState} from 'react'
import { DataContext } from '../state/dataContext';
import Login from '../views/Login';
import Singup from '../views/Singup';
import Success from '../views/Success';
import {
  light,
  gra1,
  gra2,
  gra3,
  gra4, 
  Layout,
  AnimateFruit,
  CardContainer 
} from './styles';
import PinkFruit from '../resources/assets/pinkfruit.png';

const AppUI = () => {
  const { onSuccess, view } = useContext(DataContext);
  
  const gradient = gra2;
  const theme = light;

  return(
      <Layout style={theme}>
        <AnimateFruit>
          <img 
          className='left'
          src={PinkFruit} 
          alt='pinfruit'
          />
        </AnimateFruit>

        <CardContainer style={gradient}>  
          {!!onSuccess ? <Success />
            : 
          (!!view ? <Login /> : <Singup /> ) 
          }
        </CardContainer>

        <AnimateFruit>
          <img 
          className='right'
          src={PinkFruit} 
          alt='pinfruit'
          />
        </AnimateFruit>
      </Layout>
  )
};

export default AppUI;
