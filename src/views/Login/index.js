import React, { useContext } from 'react';
import { DataContext } from '../../state/dataContext';
import Form from '../../components/Form';
import Input from '../../components/Input';


const Login = () => {
    const {
        submitleLogin, 
        validateLogin, 
        values, 
        errors
      } = useContext(DataContext);
  return (
    <Form 
    title='Login'
    button_text='Login'
    onSubmit={submitleLogin}
    >
      <Input 
      type='email'
      name='email'
      placeholder='Email'
      value={values.email}
      onChange={validateLogin}
      errors={errors.email}
      />

      <Input 
      type='password'
      name='password'
      placeholder='Password'
      value={values.password}
      onChange={validateLogin}
      errors={errors.password}
      /> 
    </Form>
  )
}

export default Login;
