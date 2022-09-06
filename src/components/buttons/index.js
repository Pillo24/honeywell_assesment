import styled from 'styled-components'
import * as global from '../globals'

export const Button = styled.button`
  border: 1px solid ${global.primaryColor};
  border-radius: 20px;
  cursor: pointer;
  ${global.Margins}
  padding: .7em 0;
  width: 100%;

  ${({ color, isBlocked }) =>
    color === 'primary' && `
      background-color: ${isBlocked ? global.primaryColorBlocked : global.primaryColor};
      color: #fff;

      &:hover {
        font-weight: ${isBlocked ? '' : 'bold'};
      }
  `}
`

export const AnchorButton = styled.a`
  border: 1px solid ${global.primaryColor};
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  font-size: .8em;
  ${global.Margins}
  justify-content: center;
  padding: .7em 0;
  text-decoration: none;
  width: -webkit-fill-available;

  ${({ color, isBlocked }) =>
    color === 'primary' && `
      background-color: ${isBlocked ? global.primaryColorBlocked : global.primaryColor};
      color: #fff;

      &:hover {
        font-weight: ${isBlocked ? '' : 'bold'};
      }
  `}
`

export const Anchor = styled.a`
  align-items: center;
  color: ${global.primaryColor};
  cursor: pointer;
  display: inline-flex;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  justify-content: center;
  ${global.Margins}
  width: -webkit-fill-available;
  &:hover {
    font-weight: 700;
  }
`
