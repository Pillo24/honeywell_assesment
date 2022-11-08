import { Container } from '@mui/material';
import './App.css';
import SignUp from './components/SignUp';

function App() {
  return (
    <Container
      sx={{
        // border: '1px solid red',
        // backgroundColor: 'peachpuff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SignUp />
    </Container>
  );
}

export default App;
