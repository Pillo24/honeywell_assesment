import React from 'react'
import {
  FormContainer,
  InputContainer,
  SubmitButton,
  Link,
  LinkContainer
} from './styles';

const Form = ({
  onSubmit, 
  title, 
  login,
  button_text,
  children
}) => {

  const SwitchView = () => {

  };

  return (
    <FormContainer onSubmit={onSubmit} login={login} noValidate>
         <h1>{title}</h1>
        
        <InputContainer>
            {children}
        </InputContainer>

        <SubmitButton type='submit'>
        {button_text}
        </SubmitButton>
      
     
        <LinkContainer onClick={SwitchView}>
          Already have an account? 
          <Link>Login</Link>
        </LinkContainer>
    </FormContainer>
  )
}

export default Form;
