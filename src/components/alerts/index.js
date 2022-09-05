import styled from 'styled-components'
import * as global from '../globals'

export const Alert = styled.div`
  background-color: ${(props) => props.type === 'success' ? 'green' : 'red'};
  border: 2px solid ${(props) => props.type === 'success' ? 'darkgreen' : 'darkred'};
  border-radius: 10px;
  color: #fff;
  padding: 1em;
  font-size: .8em;
  font-weight: 600;
  text-align: center;
  width: -webkit-fill-available;
  ${global.Margins}
`
