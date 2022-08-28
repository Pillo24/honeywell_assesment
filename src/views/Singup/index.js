import React, { useContext } from 'react';
import { DataContext } from '../../state/dataContext';
import Form from '../../components/Form';
import Input from '../../components/Input';

const FormSignup = () => {
  const {
    handleSubmit, 
    handleChange, 
    values, 
    errors
  } = useContext(DataContext);

  return (
    <Form 
    title='Register'
    onSubmit={handleSubmit}
    >

      <Input 
      type='text'
      name='username'
      placeholder='Enter your username'
      value={values.username} 
      onChange={handleChange}
      errors={errors.username}
      />

      <Input 
      type='email'
      name='email'
      placeholder='Enter your email'
      value={values.email}
      onChange={handleChange}
      errors={errors.email}
      />

      <Input 
      type='password'
      name='password'
      placeholder='Enter your password'
      value={values.password}
      onChange={handleChange}
      errors={errors.password}
      /> 

      <Input 
      type='password'
      name='password2'
      placeholder='Confirm your password'
      value={values.password2}
      onChange={handleChange}
      errors={errors.password2}
      /> 

      <button type='submit'>
        Sign up
      </button>
      
      <span>
        Already have an account? Login <a href='#'>here</a>
      </span>
    </Form>
  );
};

export default FormSignup;