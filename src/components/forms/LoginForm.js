/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Title, BodyText } from '../typography'
import TextField from '../inputs/TextField'
import { Button, Anchor } from '../buttons'
import { validateEmail, validatePassword } from '../inputs/Validations'

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setActiveScreen, userData, setUserData, handleLogin }) => {
  const [isBlocked, setIsBlocked] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  useEffect(() => {
    const validations = async () => {
      if (isValidEmail && isValidPassword) {
        isValidEmail && isValidPassword ? setIsBlocked(false) : setIsBlocked(true)
      } else {
        setIsBlocked(true)
      }
    }

    validations()
  }, [userData])

  const handleEmail = (e) => {
    const email = validateEmail(e.target.value)
    setIsValidEmail(email)
    setUserData((prev) => ({ ...prev, email: e.target.value }))
  }

  const handlePassword = (e) => {
    const password = validatePassword(e.target.value)
    setIsValidPassword(password)
    setUserData((prev) => ({ ...prev, password: e.target.value }))
  }
  return (
    <>
      <Title marginBottom=".5em">Welcome to <strong>Honeywell</strong>!</Title>
      <BodyText color="gray">Please enter your registered email account and password.</BodyText>
      <TextField
        label="Email:"
        placeholder="Enter your email"
        marginTop="3em"
        autoFocus
        maxLength="50"
        name="email"
        error={userData?.email ? isValidEmail : true}
        errorMessage="Please enter valid email"
        value={userData?.email ? userData?.email : ''}
        onChange={handleEmail}
      />
      <TextField
        name="password"
        label="Password:"
        placeholder="Enter your password"
        marginTop="0em"
        maxLength="16"
        error={userData?.password ? isValidPassword : true}
        errorMessage="Password must be between 6 and 16 characters"
        value={userData?.password ? userData?.password : ''}
        onChange={handlePassword}
      />
      <Button color="primary" marginBottom="1em" onClick={handleLogin} isBlocked={isBlocked} disabled={isBlocked}>
        Login
      </Button>
      <Anchor fontSize=".8em" onClick={() => setActiveScreen('signup')}>
        <BodyText
          fontSize="inherit"
          fontWeight="400"
          color="gray"
          marginRight=".3em">
          Dont have an account yet?{' '}
        </BodyText>
        Sign up
      </Anchor>
      <Anchor fontSize=".8em" marginTop="1em" onClick={() => setActiveScreen('forgot')}>
        Forgot password?
      </Anchor>
    </>
  )
}

export default LoginForm
