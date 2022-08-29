import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 45px;
  height: 15px;
  position: relative;
  border-radius: 35px;
  transition: background-color 100ms ease-out;
  background-color: var(--color);
  cursor: pointer;
  position: absolute;
  bottom: 28px;
`;
const Toggle = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--circle);
  border: solid transparent 1px;
  border-radius: 16px;
  transition: transform 100ms ease-in-out;
  transform: var(--translate);
  position: relative;
  z-index: 2;
  bottom: 6px;
  right: 2px;;
    
  &:hover {
    background-color: var(--hover);
  }
`;

const SwitchButton = ({ onClick }) =>(
    <Container 
    onClick={onClick}
    >
        <Toggle />
    </Container>
 );

export default SwitchButton;