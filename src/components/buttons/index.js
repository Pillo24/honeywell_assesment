import styled from 'styled-components'
import * as global from '../globals'

export const Button = styled.button`
  border: 1px solid ${global.primaryColor};
  border-radius: 20px;
  ${global.Margins}
  padding: .7em 0;
  width: 100%;

  ${({ color }) =>
    color === 'primary' && `
      background-color: ${global.primaryColor};
      color: #fff;

      &:hover {
        border: 2px solid #000;
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
