import { Box, BoxLogo, BoxTitle, BoxForm, BoxInfo } from '../components/containers'
import { Title, BodyText, MainTitle } from '../components/typography'
import TextField from '../components/inputs/TextField'
import { Button, Anchor } from '../components/buttons'
import Logo from '../assets/images/logo.png'

const Login = () => {
  return (
    <>
      <Box>
        <BoxInfo>
          <BoxLogo>
            <img src={Logo}/>
          </BoxLogo>
          <BoxTitle>
            <MainTitle color="red" fontWeight="bold" fontSize="2.5em" marginBottom="0">THE FUTURE</MainTitle>
            <MainTitle marginTop="0" fontWeight="bold" fontSize="2.5em">IS WHAT WE MAKE IT</MainTitle>
            </BoxTitle>
        </BoxInfo>
        <BoxForm>
          <Title marginBottom="0">Welcome to Login!</Title>
          <BodyText color="gray">This is a description</BodyText>
          <TextField label="Email:" placeholder="Enter your email" marginTop="3em" autofocus maxLength="50"/>
          <TextField label="Password:" placeholder="Enter your password" marginTop="0em" type="password" maxLength="16"/>
          <Button color="primary" marginBottom="1em">Login</Button>
          <Anchor fontSize=".8em">
            <BodyText fontSize="inherit" fontWeight="400" color="gray" marginRight=".3em">Dont have an account yet? </BodyText>
            Sign up
          </Anchor>
          <Anchor fontSize=".8em" marginTop="1em">Forgot password?</Anchor>
        </BoxForm>

      </Box>
    </>
  )
}

export default Login
