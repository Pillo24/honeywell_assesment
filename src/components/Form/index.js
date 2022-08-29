import React, {useContext} from 'react'
import {
  FormContainer,
  InputContainer,
  SubmitButton,
  Link,
  LinkContainer
} from './styles';
import { DataContext } from '../../state/dataContext';

const Form = ({
  onSubmit, 
  title, 
  button_text,
  children
}) => {
  const { setView, view } = useContext(DataContext);

  return (
    <FormContainer onSubmit={onSubmit} login={view} noValidate>
         <h1>{title}</h1>
        
        <InputContainer>
            {children}
        </InputContainer>

        <SubmitButton type='submit'>
        {button_text}
        </SubmitButton>
      
      {!! view ?
        <LinkContainer onClick={() => setView(!view)}>
          Don't have an account? 
          <Link>Register</Link>
        </LinkContainer>
      :
        <LinkContainer onClick={() => setView(!view)}>
          Already have an account? 
          <Link>Login</Link>
        </LinkContainer>
      }
    </FormContainer>
  )
}

export default Form;
