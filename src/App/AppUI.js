import React, {useContext, useState} from 'react'
import { DataContext } from '../state/dataContext';
import Login from '../views/Login';
import Singup from '../views/Singup';
import Success from '../views/Success';
import {
  light, 
  Background,
  Layout,
  AnimateFruit,
  CardContainer 
} from './styles';
import PinkFruit from '../resources/assets/pinkfruit.png';

const AppUI = () => {
  const { onSuccess, view } = useContext(DataContext);
  
  return(
    <Background>
      <Layout style={light}>
        <AnimateFruit>
          <img src={PinkFruit} alt='pinfruit'/>
        </AnimateFruit>

        <CardContainer>  
          {!!onSuccess ? <Success />
            : 
          (!!view ? <Login /> : <Singup /> ) 
          }
        </CardContainer>
      </Layout>
    </Background>
  )
};

export default AppUI;
