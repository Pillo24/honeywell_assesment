import React, {useContext} from 'react'
import styled from 'styled-components';
import Bg from '../../resources/assets/bg_purple.jpg'
import { DataContext } from '../../state/dataContext';
import { device } from '../../resources/Theme';

const Background = styled.div`
    background-image:url(${Bg});
    background-color:var(--primary);
    filter: var(--filter);
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 600;
    padding: 20px;
    color: var(--secondary);

    @media ${device.mobileS} { 
        padding: 0 0 20px 0;
    }
`;

const HomeButton = styled.div`
    font-weight: 600;
    font-size: 40px;
    color: var(--white);
    background: var(--gradient);
    border-radius: 10px;
    padding: 10px 40px;
    width: 200px;
    margin: 0 auto;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


    @media ${device.mobileS} { 
        width: 180px;
    }


@media (prefers-reduced-motion: no-preference) {
    & {
        animation: Shine infinite 1.9s ease-in-out;
    }
    &:hover {
        background: var(--gradient);
        animation: none;
    }
}

@keyframes Shine {
    0% {
        top: 0px; 
        left: 0px;     
        background: var(--gradient0);
    }
    25%  {
        top: 0px; 
        left: 100px; 
        background: var(--gradient25);
    }
    50%  {
        top: 100px; 
        left: 100px; 
        background: var(--gradient50);
    }
    75%  {
        top: 100px; 
        left: 0px; 
        background: var(--gradient75);
    }
    100% {
        top: 0px; 
        left: 0px; 
        background: var(--gradient100);
    }
}

  &:active{
      transform: translateY(4px);
  }
`;

const Card = styled.div`
  background-color: var(--mid_light);
  max-width: 600px;
  width: auto;
  text-align: center;
  border-radius: 20px;
  padding: 20px 10px 50px 10px;

  @media ${device.mobile} { 
        border-radius: 0%;
        padding: 20px 0px 50px 0px;
    }
`;

const Success = ({gradient}) => {
  const { setOnSuccess } = useContext(DataContext);

  return (
    <Background style={gradient}>
      <Card>
        <Title>Access Approved </Title>
        <HomeButton onClick={()=>setOnSuccess(false)}>Home</HomeButton>
      </Card>
    </Background>
  )
}

export default Success;
