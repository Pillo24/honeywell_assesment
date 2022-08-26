import React from 'react';

const FormSignup = () => {
  
  return (
    <div>
      <form noValidate>
        <h1>
          Register
        </h1>
        <div>
          <label>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Enter your username'
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type='password'
            name='password2'
            placeholder='Confirm your password'
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