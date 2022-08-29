import React, {useContext} from 'react'
import { DataContext } from '../state/dataContext';
import Login from '../views/Login';
import Singup from '../views/Singup';
import Success from '../views/Success';
import {
  light,
  gra1,
  gra3,
  gra4, 
  Layout,
  AnimateFruit,
  CardContainer 
} from './styles';
import PinkFruit from '../resources/assets/pinkfruit.png';

const AppUI = () => {
  const { onSuccess, view } = useContext(DataContext);
  
  const gradient = !!view? gra3 : gra4;
  const theme = light;

  return(
    <div style={theme}>
      {!!onSuccess ? <Success gradient={gra1}/>
        : 
        <Layout>
          <AnimateFruit>
            <img 
            className='left'
            src={PinkFruit} 
            alt='pinfruit'
            />
          </AnimateFruit>

          <CardContainer style={gradient}>  
            {!!view ? <Login /> : <Singup />} 
          </CardContainer>

          <AnimateFruit>
            <img 
            className='right'
            src={PinkFruit} 
            alt='pinfruit'
            />
          </AnimateFruit>
        </Layout>
      }
    </div>
  )
};

export default AppUI;
