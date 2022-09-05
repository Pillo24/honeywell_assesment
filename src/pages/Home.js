import { useState, useEffect } from 'react'
import { Container, Box, BoxLogo, BoxTitle, BoxForm, BoxInfo } from '../components/containers'
import { MainTitle } from '../components/typography'
import { Alert } from '../components/alerts'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase-config'
import Logo from '../assets/images/logo.png'
import Loader from '../assets/images/loading.png'
import LoginForm from '../components/forms/LoginForm'
import SignupForm from '../components/forms/SignupForm'
import ForgotPassword from '../components/forms/ForgotPassword'
import LoggedView from '../components/views/LoggedView'

const Home = () => {
  const [activeScreen, setActiveScreen] = useState('login')
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState([])
  const [createUser, setCreateUser] = useState({})
  const [emailForgot, setEmailForgot] = useState('')
  const [isEmailReset, setIsEmailReset] = useState('')
  const [error, setError] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((response) => {
          console.log(response)
          setActiveScreen('logged')
          setIsLoading(false)
          setUserData({})
        })
        .catch((error) => {
          console.log(error)
          setError(true)
          setIsLoading(false)
        })
    } catch (err) {
      console.log(err.message)
      setError(true)
      setIsLoading(false)
    }
  }

  const handleSignup = async () => {
    try {
      setIsLoading(true)
      await createUserWithEmailAndPassword(auth, createUser.email, createUser.password).then(async (response) => {
        await updateProfile(auth.currentUser, { displayName: createUser.name }).catch(
          (err) => console.log(err)
        )
        setActiveScreen('logged')
        setIsLoading(false)
        setCreateUser({})
      })
    } catch (err) {
      setIsLoading(false)
      setError(true)
      console.log(err)
    }
  }

  const handleLogOut = async () => {
    await signOut(auth)
  }

  const handleForgotPassword = async () => {
    try {
      setIsLoading(true)
      await sendPasswordResetEmail(auth, emailForgot)
      setIsEmailReset('success')
      setActiveScreen('forgot')
      setIsLoading(false)
      setEmailForgot('')
    } catch (err) {
      setIsLoading(false)
      console.log(err)
      setIsEmailReset('error')
    }
  }

  useEffect(() => {
    const loading = async () => {
      setIsLoading(true)
      !user ? setActiveScreen('login') : setActiveScreen('logged')
      setTimeout(() => setIsLoading(false), 500)
    }

    loading()
  }, [user])

  const getTitle = () => {
    switch (activeScreen) {
      case 'login':
        return (
          <>
            <MainTitle color="red" fontWeight="bold" fontSize="2.5em" marginBottom="0">THE FUTURE</MainTitle>
            <MainTitle marginTop="0" fontWeight="bold" fontSize="2.5em">IS WHAT WE MAKE IT</MainTitle>
          </>
        )
      case 'signup':
        return (
            <>
              <MainTitle fontWeight="bold" fontSize="2.5em" marginBottom="0">WHY WAIT FOR</MainTitle>
              <MainTitle marginTop="0" color="red" fontWeight="bold" fontSize="2.5em" marginBottom="0">THE FUTURE</MainTitle>
              <MainTitle marginTop="0" fontWeight="bold" fontSize="2.5em">WHEN YOU CAN CREATE IT</MainTitle>
            </>
        )
      case 'logged':
        return (
          <>
            <MainTitle marginTop="1em" color="red" fontWeight="bold" fontSize="2.5em" marginBottom="0">WELCOME</MainTitle>
            <MainTitle marginTop="0" fontWeight="bold" fontSize="2.5em">TO YOUR ACCOUNT</MainTitle>
          </>
        )
    }
  }

  return (
    <Container>
      <Box>
        <BoxInfo view={activeScreen}>
          <BoxLogo view={activeScreen}>
            <img src={Logo}/>
          </BoxLogo>
          <BoxTitle view={activeScreen}>
            {getTitle()}
          </BoxTitle>
        </BoxInfo>
        <BoxForm>
          {isLoading && <img src={Loader}/>}
          {!isLoading && activeScreen === 'logged' && user && <LoggedView user={user} handleLogOut={handleLogOut}/>}
          {!isLoading && activeScreen === 'login' && !user && <LoginForm setActiveScreen={setActiveScreen} userData={userData} setUserData={setUserData} handleLogin={handleLogin}/>}
          {!isLoading && activeScreen === 'signup' && !user && <SignupForm setActiveScreen={setActiveScreen} createUser={createUser} setCreateUser={setCreateUser} handleSignup={handleSignup}/>}
          {!isLoading && activeScreen === 'forgot' && !user && <ForgotPassword setActiveScreen={setActiveScreen} handleForgotPassword={handleForgotPassword} emailForgot={emailForgot} setEmailForgot={setEmailForgot} isEmailReset={isEmailReset}/>}
          {!isLoading && error && <Alert marginTop="2em">There was an error, try again</Alert>}
        </BoxForm>

      </Box>
    </Container>
  )
}

export default Home
