import { css } from 'styled-components'

export const Margins = css`
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`

export const primaryColor = 'rgba(0, 113, 179, 1)'
export const primaryColorBlocked = 'rgba(0, 113, 179, .5)'
