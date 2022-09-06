import styled from 'styled-components'
import { Margins } from '../globals'

export const Title = styled.h2`
  color: ${(props) => props.color ? props.color : '#000'};
  font-size: ${(props) => props.fontSize};
  ${Margins}
  & strong {
    color: red;
  }
`
export const BodyText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  ${Margins}
`
export const MainTitle = styled.h2`
  animation: flip 5s infinite;
  animation-delay: calc(2s);
  color: ${(props) => props.color};
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: ${(props) => props.fontSize};
  ${Margins}
  @keyframes flip {
    0%,30% {
      transform: rotateX(360deg) 
    }
  }
`
