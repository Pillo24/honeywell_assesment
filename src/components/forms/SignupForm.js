/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Title, BodyText } from '../typography'
import TextField from '../inputs/TextField'
import { Button, Anchor } from '../buttons'
import { validateEmail, validatePassword, validateName } from '../inputs/Validations'

const SignupForm = ({ setActiveScreen, setCreateUser, handleSignup, createUser }) => {
  const [isBlocked, setIsBlocked] = useState(true)
  const [isValidName, setIsValidName] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  useEffect(() => {
    const validations = async () => {
      if (isValidEmail && isValidPassword && isValidName) {
        setIsBlocked(false)
      } else {
        setIsBlocked(true)
      }
    }

    validations()
  }, [createUser])

  const handleName = (e) => {
    const name = validateName(e.target.value)
    setIsValidName(name)
    setCreateUser((prev) => ({ ...prev, name: e.target.value }))
  }

  const handleEmail = (e) => {
    const email = validateEmail(e.target.value)
    setIsValidEmail(email)
    setCreateUser((prev) => ({ ...prev, email: e.target.value }))
  }

  const handlePassword = (e) => {
    const password = validatePassword(e.target.value)
    setIsValidPassword(password)
    setCreateUser((prev) => ({ ...prev, password: e.target.value }))
  }

  useEffect(() => {
    setCreateUser({})
  }, [])
  return (
    <>
      <Title marginBottom=".5em">Create your <strong>account</strong></Title>
      <BodyText color="gray">Join us! And be part of the Honeywell family.</BodyText>
      <TextField
        name="name"
        label="Name:"
        placeholder="Enter your name"
        marginTop="3em"
        autoFocus
        maxLength="50"
        value={createUser?.name ? createUser?.name : ''}
        error={createUser?.name ? isValidName : true}
        errorMessage="Please enter your name"
        onChange={handleName}
      />
      <TextField
        name="email"
        label="Email:"
        placeholder="Enter your email"
        marginTop="0"
        maxLength="50"
        value={createUser?.email ? createUser?.email : ''}
        error={createUser?.email ? isValidEmail : true}
        errorMessage="Please enter valid email"
        onChange={handleEmail}
      />
      <TextField
        name="password"
        label="Password:"
        placeholder="Enter your password"
        marginTop="0"
        type="password"
        maxLength="16"
        value={createUser?.password ? createUser?.password : ''}
        error={createUser?.password ? isValidPassword : true}
        errorMessage="Password must have minimum 8 characters, starts with letter, at least one letter lowercase, at least one letter uppercase, one number and one special character, no spaces"
        onChange={handlePassword}
      />
      <Button color="primary" marginBottom="1em" onClick={handleSignup} isBlocked={isBlocked} disabled={isBlocked}>
        Sign up
      </Button>
      <Anchor fontSize=".8em" onClick={() => setActiveScreen('login')}>
        <BodyText
          fontSize="inherit"
          fontWeight="400"
          color="gray"
          marginRight=".3em">
          Already have an account?{' '}
        </BodyText>
        Sign in
      </Anchor>
    </>
  )
}

export default SignupForm
