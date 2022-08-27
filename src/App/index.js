import React from 'react';
import AppUI from './AppUI';
import { DataProvider } from '../state/dataContext';

function App() {
  return (
    <DataProvider>
      <AppUI />
    </DataProvider>
  );
}

export default App;