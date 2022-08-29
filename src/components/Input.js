import React from 'react'
import styled from 'styled-components';

const Inputcontainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 30px;
  
  input {
      width: 100%;
      background: rgba(0, 0, 0, 0);
      border: 3px solid var(--secondary);
      padding: 10px 0;
      outline: none;
      font-size: 16px;
      border-radius: 6px;
      padding-left: 8px;
   
      ::placeholder {
        color: var(--secondary);
        font-size: 16px;
        padding-left: 8px;
      }
    }

    input:hover, 
    input:active,
    input:focus 
    {
      border: 3px solid var(--main);   
      background: var(--white);
      ::placeholder {
        color: var(--main);
      }
    }
`;


const Input = ({
    value, 
    onChange, 
    errors,
    type,
    name,
    placeholder
}) => {
  return (
    <Inputcontainer>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!errors && <p>{errors}</p>}
    </Inputcontainer>
  )
}

export default Input;
