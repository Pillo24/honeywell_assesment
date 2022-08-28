import React from 'react'
import styled from 'styled-components';

const FormContainer = styled.form`
    height: 500px;
    width: 100%;
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    background: ${({login})=>(!!login ? 'var(--primary_light)' : 'var(--mid_light)')};
    color: var(--white);

    display: grid;
    grid-template-rows: 150px auto;
    justify-items: center;
    align-items: center;
`;

const InputContainer = styled.div`
    display: grid;
    background: var(--black);
    align-items: center;
    justify-items: center; 
`;



const Form = ({onSubmit, title, login, children}) => {
  return (
    <FormContainer onSubmit={onSubmit} login={login} noValidate>
         <h1>{title}</h1>
        <InputContainer>
            {children}
        </InputContainer>
    </FormContainer>
  )
}

export default Form;
