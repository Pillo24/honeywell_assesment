import React, {useContext, useState} from 'react'
import { DataContext } from '../state/dataContext';
import Login from '../views/Login';
import Singup from '../views/Singup';
import Success from '../views/Success';
import PinkFruit from '../resources/assets/pinkfruit.png';
import {light, dark} from '../resources/Theme';
import SwitchButton from '../components/SwitchButton';
import {
  Layout,
  AnimateFruit,
  CardContainer,
  AppContainer 
} from './styles';

const AppUI = () => {
  const { onSuccess, view } = useContext(DataContext);
  const [palette, setPalette] = useState(true);
  const theme = !!palette ? light : dark;

  const succes_gradient =theme.gradient.gra1;
  const gradient = !!view? theme.gradient.gra3 : theme.gradient.gra4;

  return(
    <AppContainer style={theme}>

      {!!onSuccess ? <Success gradient={succes_gradient}/>
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
      <SwitchButton onClick={()=>setPalette(!palette)}/>
    </AppContainer>
  )
};

export default AppUI;
