import styled from 'styled-components'
import { Margins } from '../globals'

export const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  ${Margins}
`
export const BodyText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  ${Margins}
`
