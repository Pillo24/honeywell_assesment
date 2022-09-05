import { useEffect, useState } from 'react'
import { Title, BodyText } from '../typography'
import TextField from '../inputs/TextField'
import { Button, Anchor } from '../buttons'
import { Alert } from '../alerts'
import { validateEmail } from '../inputs/Validations'

// eslint-disable-next-line react/prop-types
const ForgotPassword = ({ setActiveScreen, handleForgotPassword, emailForgot, setEmailForgot, isEmailReset }) => {
  const [isBlocked, setIsBlocked] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(false)
  useEffect(() => {
    const validations = async () => {
      if (isValidEmail) {
        isValidEmail ? setIsBlocked(false) : setIsBlocked(true)
      } else {
        setIsBlocked(true)
      }
    }

    validations()
  }, [emailForgot])

  const handleEmail = (e) => {
    const email = validateEmail(e.target.value)
    setEmailForgot(e.target.value)
    setIsValidEmail(email)
  }

  useEffect(() => {
    setIsValidEmail(false)
    setEmailForgot('')
  }, [isEmailReset])

  return (
    <>
      <Title marginBottom=".5em">Recover your <strong>password</strong></Title>
      <BodyText color="gray" marginBottom="2em">Please enter your registered email address. We will send instructions to help reset your password.</BodyText>
      <TextField
        label="Email:"
        placeholder="Enter your email"
        marginTop="3em"
        autoFocus
        maxLength="50"
        name="email"
        error={emailForgot ? isValidEmail : true}
        errorMessage="Please enter valid email"
        value={emailForgot}
        onChange={handleEmail}
      />
      <Button color="primary" marginBottom="1em" onClick={handleForgotPassword} isBlocked={isBlocked} disabled={isBlocked}>
        Recover password
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
      {isEmailReset && <Alert type={isEmailReset} marginTop="2em">{isEmailReset === 'success' ? 'We sent you the email for recover your password.' : 'There was an error, try it again'}</Alert>}
    </>
  )
}

export default ForgotPassword
