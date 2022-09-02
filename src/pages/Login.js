import { Container, BoxForm, BoxInfo } from '../components/containers'
import { Title, BodyText } from '../components/typography'
import TextField from '../components/inputs/TextField'
import { Button } from '../components/buttons'
import Logo from '../assets/images/logo.png'

const Login = () => {
  return (
    <Container>
      <BoxInfo>
        <img src={Logo} width="50%"/>
      </BoxInfo>
      <BoxForm>
        <Title marginBottom="0">Welcome to Login!</Title>
        <BodyText color="gray">This is a description</BodyText>
        <TextField label="Email:" placeholder="Enter your email" marginTop="3em" autofocus maxLength="50"/>
        <TextField label="Password:" placeholder="Enter your password" marginTop="0em" type="password" maxLength="16"/>
        <Button color="primary">Login</Button>
      </BoxForm>
    </Container>
  )
}

export default Login
