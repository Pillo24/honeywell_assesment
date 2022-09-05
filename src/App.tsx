import React, { useState } from 'react';
import styled from "styled-components"

import { SignupForm, SignupResult } from './components/SignupForm';
import { SuccessPage } from './components/SuccessPage';

const AppWrapper = styled.main`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

function App() {
  const [data, setData] = useState<SignupResult | null>(null);

  return (
    <AppWrapper>
      {
        data ? (
          <SuccessPage>
            <h2>Thank you {data.username}</h2>
            We will send an email to {data.email} soon!
          </SuccessPage>
        ): <SignupForm onSubmit={setData} />
      }
      
    </AppWrapper>
  );
}

export default App;
