import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import { LoginPage } from './pages';  

// Components
import Layout from './components/layout';

// Styles
import './App.css';

function App() {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
