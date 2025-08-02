// index.jsx 또는 main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './App';
import TermsPage from './TermsPage';
import CompleteSignupPage from './CompleteSignupPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oauth/signup" element={<TermsPage />} />
      <Route path="/oauth/complete-signup" element={<CompleteSignupPage />} />
    </Routes>
  </Router>
);
