import { useState } from 'react'
import styled from 'styled-components'
import * as global from '../globals'
import { FaEnvelope, FaLock, FaUserCircle, FaEye, FaEyeSlash } from 'react-icons/fa'

const InputBox = styled.div`
  ${global.Margins}
  &:hover > span, &:focus > span{
    color: ${global.primaryColor};
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
    border: 2px solid ${global.primaryColor};
  }
  &:focus {
    border: 2px solid ${global.primaryColor};
    font-weight: 500;
  }

  ${({ error }) =>
    !error && `
      border: 2px solid red;
      &:hover {
        border: 2px solid red;
      }
      &:focus {
        border: 2px solid red;
        font-weight: 500;
      }
  `}

  @media (max-width: 500px) {
    padding-left: 3em;
  }
  
`
const InputLabel = styled.label`
  font-size: .8em;
`

const IconInput = styled.span`
  color: #b8b8b8;
  position: relative;
  top: -29px;
  left: 10px;
  ${({ active }) =>
    active && `
      color: ${global.primaryColor};
  `}
`

const IconPass = styled.span`
  color: #b8b8b8;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 85%;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: .7em;
  font-weight: 600;
  margin-bottom: 1em;
  margin-top: -15px;
`

// eslint-disable-next-line react/prop-types
const TextField = ({ label, placeholder, marginTop, name, error, errorMessage, ...rest }) => {
  const [showPass, setShowPass] = useState(false)
  const [active, setActive] = useState(false)

  const inputIcons = (name) => {
    switch (name) {
      case 'name':
        return (
          <FaUserCircle/>
        )
      case 'email':
        return (
          <FaEnvelope/>
        )
      case 'password':
        return (
            <>
              <FaLock/>
              <IconPass onClick={() => setShowPass(!showPass)}>
                {!showPass ? <FaEye/> : <FaEyeSlash/>}
              </IconPass>
            </>
        )
    }
  }

  return (
    <InputBox marginTop={marginTop}>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} error={error} {...rest} type={name !== 'password' ? 'text' : showPass ? 'text' : 'password'} onFocus={() => setActive(true)} onBlur={() => setActive(false)}/>
      <IconInput active={active}>
        {inputIcons(name)}
      </IconInput>
      {!error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputBox>
  )
}
export default TextField
