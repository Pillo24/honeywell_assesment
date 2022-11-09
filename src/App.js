import { Container } from '@mui/material';
import './App.css';

import SignUpLayout from './components/SignUp/SignUpLayout';

function App() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SignUpLayout />
    </Container>
  );
}

export default App;
