import { Container } from '@mui/material';
import './App.css';
import SignUp from './components/SignUp';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h3>Hello there #FutureShaper...</h3>
    //     <p>
    //       This is a simple React app that will be used to asses your skills.
    //     </p>
    //     <p>
    //       Please follow the instructions in the README.md file to get started.
    //     </p>
    //     <p>
    //       Edit <code>src/App.js</code> and show me what you got!
    //     </p>
    //     <SignUp />
    //   </header>
    // </div>
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
