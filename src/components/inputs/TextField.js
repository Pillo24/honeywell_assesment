import styled from 'styled-components'
import { Margins } from '../globals'
import { FaEnvelope, FaLock } from 'react-icons/fa'

const InputBox = styled.div`
  ${Margins}
  &:hover > span{
    color: #726BD1;
  }
  &:focus > span{
    color: #726BD1;
  }
`

const InputText = styled.input`
  background: white;
  border: 2px solid #dbdbdb;
  border-radius: 5px;
  height: 35px;
  margin-top: .5em;
  outline: 0;
  padding-left: 2.4em;
  width: -webkit-fill-available;
  &:hover {
    border: 2px solid #726BD1;
  }
  &:focus {
    border: 2px solid #726BD1;
    font-weight: 500;
  }

  ${({ error }) =>
    error && `
      border: 2px solid red;
  `}

  @media (max-width: 500px) {
    padding-left: 3em;
  }
  
`
const InputLabel = styled.label`
  font-size: .8em;
`

const Icon = styled.span`
  color: #b8b8b8;
  position: relative;
  top: -29px;
  left: 10px;
`

// eslint-disable-next-line react/prop-types
const TextField = ({ label, placeholder, marginTop, type, error, ...rest }) => {
  return (
    <InputBox marginTop={marginTop}>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} error={error} {...rest}/>
      {type === 'password' && (
        <Icon>
          <FaLock/>
        </Icon>
      )}
      {type !== 'password' && (
        <Icon>
          <FaEnvelope/>
        </Icon>
      )}
    </InputBox>
  )
}
export default TextField
