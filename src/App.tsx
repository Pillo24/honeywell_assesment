import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import { SingUpPage } from './pages';  

// Components
import Layout from './components/layout';

// Styles
import './styles/App.scss';

function App() {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SingUpPage />} />
            <Route path="/login" element={<SingUpPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
