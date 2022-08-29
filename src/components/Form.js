import React from 'react'
import styled from 'styled-components';

const FormContainer = styled.form`
    height: 100%;
    width: 100%;
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    background: ${({login})=>(!!login ? 'var(--primary_light)' : 'var(--mid_light)')};
    color: var(--white);

    display: grid;
    grid-template-rows: 110px auto;
    justify-items: center;
    align-items: end;
    padding-bottom: 60px;
`;

const InputContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center; 
    align-self: baseline;
    border-top: 1px solid var(--main);
    padding-top: 20px;
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
