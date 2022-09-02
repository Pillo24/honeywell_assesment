import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid #726BD1;
  border-radius: 20px;
  padding: .7em 0;
  width: 100%;

  ${({ color }) =>
    color === 'primary' && `
      background-color: #726BD1;
      color: #fff;

      &:hover {
        border: 2px solid #000;
      }
  `}
`
