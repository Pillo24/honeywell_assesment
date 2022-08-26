import React from 'react';
import useForm from '../../resources/hooks/useForm';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values} = useForm(submitForm);

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <h1>
          Register
        </h1>
        <div>
          <label>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>
          Sign up
        </button>
        <span>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;