import React, { useContext } from 'react'
import { DataContext } from '../../state/dataContext';


const Login = () => {
    const {
        submitleLogin, 
        validateLogin, 
        values, 
        errors
      } = useContext(DataContext);

  return (
    <form onSubmit={submitleLogin} noValidate>
      <h1>
        Login
      </h1>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          value={values.email}
          onChange={validateLogin}
        />
        {!!errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value={values.password}
          onChange={validateLogin}
        />
        {!!errors.password && <p>{errors.password}</p>}
      </div>

      <button type='submit'>
        Login
      </button>
      <span>
        Don't have an account? Register <a href='#'>here</a>
      </span>
    </form>
  )
}

export default Login;
